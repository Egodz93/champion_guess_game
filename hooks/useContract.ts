"use client"

/**
 * IOTA CONTRACT INTEGRATION HOOK
 */

import { useState, useEffect } from "react"
import {
  useCurrentAccount,
  useIotaClient,
  useSignAndExecuteTransaction,
  useIotaClientQuery,
} from "@iota/dapp-kit"
import { Transaction } from "@iota/iota-sdk/transactions"
import { useNetworkVariable } from "@/lib/config"
import type { IotaObjectData } from "@iota/iota-sdk/client"

// CONTRACT CONFIG
export const CONTRACT_MODULE = "contract"
export const CONTRACT_METHODS = {
  CREATE: "create",
  INCREMENT: "increment",
  SET_VALUE: "set_value",
} as const

// Extract fields robustly
function getObjectFields(data: IotaObjectData): { value: number; owner: string } | null {
  if (!data) return null
  if (data.content?.dataType !== "moveObject") {
    console.log("Data is not a moveObject:", data.content?.dataType)
    return null
  }

  const fields = (data.content as any).fields
  if (!fields) {
    console.log("No fields found in object data")
    return null
  }

  // Log to help debugging
  // console.log("Object fields structure:", JSON.stringify(fields, null, 2))

  // value may be string (u64) or number
  let value: number
  if (typeof fields.value === "string") {
    value = parseInt(fields.value, 10)
    if (isNaN(value)) {
      console.log("Value is not a valid number:", fields.value)
      return null
    }
  } else if (typeof fields.value === "number") {
    value = fields.value
  } else if (fields.value && typeof fields.value === "object" && typeof fields.value.fields === "object" && typeof fields.value.fields.value !== "undefined") {
    // handle nested shape if any
    const maybe = fields.value.fields.value
    value = typeof maybe === "string" ? parseInt(maybe, 10) : Number(maybe)
    if (isNaN(value)) return null
  } else {
    console.log("Value is not a number or string:", typeof fields.value, fields.value)
    return null
  }

  if (!fields.owner && fields.owner !== 0) {
    console.log("Owner field is missing")
    return null
  }

  const owner = String(fields.owner)

  return { value, owner }
}

// Hook interfaces
export interface ContractData {
  value: number
  owner: string
}

export interface ContractState {
  isLoading: boolean
  isPending: boolean
  isConfirming: boolean
  isConfirmed: boolean
  hash: string | undefined
  error: Error | null
}

export interface ContractActions {
  createObject: () => Promise<void>
  increment: () => Promise<void>
  reset: () => Promise<void>
  setValue: (value: number) => Promise<void>
  clearObject: () => void
}

export const useContract = () => {
  const currentAccount = useCurrentAccount()
  const address = currentAccount?.address
  const packageId = useNetworkVariable("packageId")
  const iotaClient = useIotaClient()
  const { mutate: signAndExecute, isPending } = useSignAndExecuteTransaction()
  const [objectId, setObjectId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hash, setHash] = useState<string | undefined>()
  const [transactionError, setTransactionError] = useState<Error | null>(null)

  // load objectId from location.hash
  useEffect(() => {
    if (typeof window !== "undefined") {
      const h = window.location.hash.slice(1)
      if (h) setObjectId(h)
    }
  }, [])

  // Query the object only when we have objectId
  const queryEnabled = !!objectId
  const { data: queryResponse, isPending: isFetching, error: queryError, refetch } = useIotaClientQuery(
    "getObject",
    // pass params only when enabled to avoid passing undefined id
    queryEnabled ? { id: objectId!, options: { showContent: true, showOwner: true } } : undefined,
    { enabled: queryEnabled }
  )

  // Normalize the returned object data (robust to shapes)
  const rawObject: any = queryResponse?.data ?? queryResponse ?? null
  const fields = rawObject ? getObjectFields(rawObject) : null
  const contractData: ContractData | null = fields ? { value: fields.value, owner: fields.owner } : null
  const isOwner = !!(fields && address && fields.owner.toLowerCase() === address.toLowerCase())

  const objectExists = !!rawObject
  const hasValidData = !!fields

  // create object
  const createObject = async () => {
    if (!packageId) {
      setTransactionError(new Error("packageId not configured"))
      return
    }

    try {
      setIsLoading(true)
      setTransactionError(null)
      setHash(undefined)
      const tx = new Transaction()
      tx.moveCall({
        arguments: [],
        target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.CREATE}`,
      })

      signAndExecute(
        { transaction: tx },
        {
          onSuccess: async ({ digest }) => {
            setHash(digest)
            try {
              const { effects } = await iotaClient.waitForTransaction({
                digest,
                options: { showEffects: true },
              })
              const newObjectId = effects?.created?.[0]?.reference?.objectId
              if (newObjectId) {
                setObjectId(newObjectId)
                if (typeof window !== "undefined") {
                  window.location.hash = newObjectId
                }
              } else {
                console.warn("No object ID found in transaction effects")
              }
            } catch (waitError) {
              console.error("Error waiting for transaction:", waitError)
              setTransactionError(waitError instanceof Error ? waitError : new Error(String(waitError)))
            } finally {
              setIsLoading(false)
            }
          },
          onError: (err) => {
            const error = err instanceof Error ? err : new Error(String(err))
            setTransactionError(error)
            console.error("Error:", err)
            setIsLoading(false)
          },
        }
      )
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err))
      setTransactionError(error)
      console.error("Error creating object:", err)
      setIsLoading(false)
    }
  }

  // increment
  const increment = async () => {
    if (!objectId || !packageId) {
      setTransactionError(new Error("Missing objectId or packageId"))
      return
    }

    try {
      setIsLoading(true)
      setTransactionError(null)
      const tx = new Transaction()
      tx.moveCall({
        arguments: [tx.object(objectId)],
        target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.INCREMENT}`,
      })

      signAndExecute(
        { transaction: tx },
        {
          onSuccess: async ({ digest }) => {
            setHash(digest)
            try {
              await iotaClient.waitForTransaction({ digest })
              if (refetch) await refetch()
            } catch (e) {
              console.error("Wait or refetch failed:", e)
            } finally {
              setIsLoading(false)
            }
          },
          onError: (err) => {
            const error = err instanceof Error ? err : new Error(String(err))
            setTransactionError(error)
            console.error("Error:", err)
            setIsLoading(false)
          },
        }
      )
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err))
      setTransactionError(error)
      console.error("Error incrementing:", err)
      setIsLoading(false)
    }
  }

  // reset (set to 0)
  const reset = async () => {
    await setValue(0)
  }

  // set value
  const setValue = async (value: number) => {
    if (!objectId || !packageId) {
      setTransactionError(new Error("Missing objectId or packageId"))
      return
    }

    try {
      setIsLoading(true)
      setTransactionError(null)
      const tx = new Transaction()
      tx.moveCall({
        arguments: [tx.object(objectId), tx.pure.u64(value)],
        target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.SET_VALUE}`,
      })

      signAndExecute(
        { transaction: tx },
        {
          onSuccess: async ({ digest }) => {
            setHash(digest)
            try {
              await iotaClient.waitForTransaction({ digest })
              if (refetch) await refetch()
            } catch (e) {
              console.error("Wait/refetch failed:", e)
            } finally {
              setIsLoading(false)
            }
          },
          onError: (err) => {
            const error = err instanceof Error ? err : new Error(String(err))
            setTransactionError(error)
            console.error("Error:", err)
            setIsLoading(false)
          },
        }
      )
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err))
      setTransactionError(error)
      console.error("Error setting value:", err)
      setIsLoading(false)
    }
  }

  const clearObject = () => {
    setObjectId(null)
    setTransactionError(null)
    setHash(undefined)
    if (typeof window !== "undefined") {
      window.location.hash = ""
    }
  }

  const actions: ContractActions = {
    createObject,
    increment,
    reset,
    setValue,
    clearObject,
  }

  const contractState: ContractState = {
    isLoading: (isLoading && !objectId) || isFetching,
    isPending,
    isConfirming: false,
    isConfirmed: !!hash && !isLoading && !isPending,
    hash,
    error: queryError || transactionError,
  }

 return {
  data: contractData,
  actions: {
    createObject,
    increment,
    reset,
    setValue,
    clearObject,
  },
  state: {
    isLoading: (isLoading && !objectId) || isFetching,
    isPending,
    isConfirming: false,
    isConfirmed: !!hash && !isLoading && !isPending,
    hash,
    error: queryError || transactionError,
  },
  objectId,
  isOwner,
  objectExists,
  hasValidData,
}
}
