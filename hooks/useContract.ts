"use client";

/**
 * IOTA CONTRACT INTEGRATION HOOK (SDK MỚI - TransactionBlock)
 */

import { useState, useEffect } from "react";
import {
  useCurrentAccount,
  useIotaClient,
  useSignAndExecuteTransaction,
  useIotaClientQuery,
} from "@iota/dapp-kit";
import { TransactionBlock } from "@iota/iota-sdk/transactions";
import { useNetworkVariable } from "@/lib/config";
import type { IotaObjectData } from "@iota/iota-sdk/client";

// CONTRACT CONFIG
export const CONTRACT_MODULE = "contract";
export const CONTRACT_METHODS = {
  CREATE: "create",
  INCREMENT: "increment",
  SET_VALUE: "set_value",
} as const;

// Extract fields
function getObjectFields(data: IotaObjectData): { value: number; owner: string } | null {
  if (!data) return null;
  if (data.content?.dataType !== "moveObject") return null;

  const fields = (data.content as any).fields;
  if (!fields) return null;

  let value: number;
  if (typeof fields.value === "string") {
    value = parseInt(fields.value, 10);
  } else if (typeof fields.value === "number") {
    value = fields.value;
  } else {
    return null;
  }

  if (!fields.owner) return null;

  return { value, owner: String(fields.owner) };
}

// Interfaces
export interface ContractData {
  value: number;
  owner: string;
}

export interface ContractState {
  isLoading: boolean;
  isPending: boolean;
  isConfirming: boolean;
  isConfirmed: boolean;
  hash: string | undefined;
  error: Error | null;
}

export interface ContractActions {
  createObject: () => Promise<void>;
  increment: () => Promise<void>;
  reset: () => Promise<void>;
  setValue: (value: number) => Promise<void>;
  clearObject: () => void;
}

export const useContract = () => {
  const currentAccount = useCurrentAccount();
  const address = currentAccount?.address;
  const packageId = useNetworkVariable("packageId");
  const iotaClient = useIotaClient();
  const { mutate: signAndExecute, isPending } = useSignAndExecuteTransaction();

  const [objectId, setObjectId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hash, setHash] = useState<string | undefined>();
  const [transactionError, setTransactionError] = useState<Error | null>(null);

  // Load objectId from URL hash
  useEffect(() => {
    if (typeof window !== "undefined") {
      const h = window.location.hash.slice(1);
      if (h) setObjectId(h);
    }
  }, []);

  // Query object
  const queryEnabled = !!objectId;
  const {
    data: queryResponse,
    isPending: isFetching,
    error: queryError,
    refetch,
  } = useIotaClientQuery(
    "getObject",
    queryEnabled
      ? { id: objectId!, options: { showContent: true, showOwner: true } }
      : undefined,
    { enabled: queryEnabled }
  );

  const rawObject: any = queryResponse?.data ?? queryResponse ?? null;
  const fields = rawObject ? getObjectFields(rawObject) : null;

  const contractData: ContractData | null = fields
    ? { value: fields.value, owner: fields.owner }
    : null;

  const isOwner = !!(
    fields &&
    address &&
    fields.owner.toLowerCase() === address.toLowerCase()
  );

  const objectExists = !!rawObject;
  const hasValidData = !!fields;

  // ✅ CREATE OBJECT
  const createObject = async () => {
    if (!packageId) return;

    try {
      setIsLoading(true);
      setTransactionError(null);
      setHash(undefined);

      const tx = new TransactionBlock();
      tx.moveCall({
        target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.CREATE}`,
        arguments: [],
      });

      signAndExecute(
        { transaction: tx },
        {
          onSuccess: async ({ digest }) => {
            setHash(digest);
            try {
              const { effects } = await iotaClient.waitForTransaction({
                digest,
                options: { showEffects: true },
              });

              const newObjectId = effects?.created?.[0]?.reference?.objectId;
              if (newObjectId) {
                setObjectId(newObjectId);
                if (typeof window !== "undefined") {
                  window.location.hash = newObjectId;
                }
              }
            } finally {
              setIsLoading(false);
            }
          },
          onError: (err) => {
            setTransactionError(err as Error);
            setIsLoading(false);
          },
        }
      );
    } catch (err) {
      setTransactionError(err as Error);
      setIsLoading(false);
    }
  };

  // ✅ INCREMENT
  const increment = async () => {
    if (!objectId || !packageId) return;

    try {
      setIsLoading(true);
      setTransactionError(null);

      const tx = new TransactionBlock();
      tx.moveCall({
        target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.INCREMENT}`,
        arguments: [tx.object(objectId)],
      });

      signAndExecute(
        { transaction: tx },
        {
          onSuccess: async ({ digest }) => {
            setHash(digest);
            try {
              await iotaClient.waitForTransaction({ digest });
              if (refetch) await refetch();
            } finally {
              setIsLoading(false);
            }
          },
          onError: (err) => {
            setTransactionError(err as Error);
            setIsLoading(false);
          },
        }
      );
    } catch (err) {
      setTransactionError(err as Error);
      setIsLoading(false);
    }
  };

  // ✅ RESET
  const reset = async () => {
    await setValue(0);
  };

  // ✅ SET VALUE
  const setValue = async (value: number) => {
    if (!objectId || !packageId) return;

    try {
      setIsLoading(true);
      setTransactionError(null);

      const tx = new TransactionBlock();
      tx.moveCall({
        target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.SET_VALUE}`,
        arguments: [tx.object(objectId), tx.pure(value)], // ✅ SDK MỚI
      });

      signAndExecute(
        { transaction: tx },
        {
          onSuccess: async ({ digest }) => {
            setHash(digest);
            try {
              await iotaClient.waitForTransaction({ digest });
              if (refetch) await refetch();
            } finally {
              setIsLoading(false);
            }
          },
          onError: (err) => {
            setTransactionError(err as Error);
            setIsLoading(false);
          },
        }
      );
    } catch (err) {
      setTransactionError(err as Error);
      setIsLoading(false);
    }
  };

  // ✅ CLEAR
  const clearObject = () => {
    setObjectId(null);
    setTransactionError(null);
    setHash(undefined);
    if (typeof window !== "undefined") {
      window.location.hash = "";
    }
  };

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
  };
};