(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/heroes_guess_dapp/components/Wallet-connect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletConnect",
    ()=>WalletConnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/dapp-kit/dist/esm/index.js [app-client] (ecmascript)");
"use client";
;
;
function WalletConnect() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "1rem",
            display: "flex",
            justifyContent: "flex-end"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectButton"], {}, void 0, false, {
            fileName: "[project]/heroes_guess_dapp/components/Wallet-connect.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/heroes_guess_dapp/components/Wallet-connect.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = WalletConnect;
var _c;
__turbopack_context__.k.register(_c, "WalletConnect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/heroes_guess_dapp/hooks/useContract.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTRACT_METHODS",
    ()=>CONTRACT_METHODS,
    "CONTRACT_MODULE",
    ()=>CONTRACT_MODULE,
    "useContract",
    ()=>useContract
]);
/**
 * ============================================================================
 * IOTA CONTRACT INTEGRATION HOOK
 * ============================================================================
 * 
 * This hook contains ALL the contract interaction logic.
 * 
 * To customize your dApp, modify the configuration section below.
 * 
 * ============================================================================
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/dapp-kit/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/Transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/lib/config.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CONTRACT_MODULE = "contract" // Your Move module name
;
const CONTRACT_METHODS = {
    CREATE: "create",
    INCREMENT: "increment",
    SET_VALUE: "set_value"
};
// ============================================================================
// DATA EXTRACTION
// ============================================================================
// Modify this to extract data from your contract's object structure
function getObjectFields(data) {
    if (data.content?.dataType !== "moveObject") {
        console.log("Data is not a moveObject:", data.content?.dataType);
        return null;
    }
    const fields = data.content.fields;
    if (!fields) {
        console.log("No fields found in object data");
        return null;
    }
    // Log the actual structure for debugging
    console.log("Object fields structure:", JSON.stringify(fields, null, 2));
    // Handle value - it might be a string (u64) or number
    let value;
    if (typeof fields.value === "string") {
        value = parseInt(fields.value, 10);
        if (isNaN(value)) {
            console.log("Value is not a valid number:", fields.value);
            return null;
        }
    } else if (typeof fields.value === "number") {
        value = fields.value;
    } else {
        console.log("Value is not a number or string:", typeof fields.value, fields.value);
        return null;
    }
    // Handle owner - convert to string
    if (!fields.owner) {
        console.log("Owner field is missing");
        return null;
    }
    const owner = String(fields.owner);
    return {
        value,
        owner
    };
}
const useContract = ()=>{
    _s();
    const currentAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentAccount"])();
    const address = currentAccount?.address;
    const packageId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNetworkVariable"])("packageId");
    const iotaClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIotaClient"])();
    const { mutate: signAndExecute, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignAndExecuteTransaction"])();
    const [objectId, setObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hash, setHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [transactionError, setTransactionError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Load object ID from URL hash
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useContract.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const hash = window.location.hash.slice(1);
                if (hash) setObjectId(hash);
            }
        }
    }["useContract.useEffect"], []);
    // Fetch object data
    const { data, isPending: isFetching, error: queryError, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIotaClientQuery"])("getObject", {
        id: objectId,
        options: {
            showContent: true,
            showOwner: true
        }
    }, {
        enabled: !!objectId
    });
    // Extract fields
    const fields = data?.data ? getObjectFields(data.data) : null;
    const isOwner = fields?.owner.toLowerCase() === address?.toLowerCase();
    // Check if object exists but data extraction failed
    const objectExists = !!data?.data;
    const hasValidData = !!fields;
    // Create object
    const createObject = async ()=>{
        if (!packageId) return;
        try {
            setIsLoading(true);
            setTransactionError(null);
            setHash(undefined);
            const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
            tx.moveCall({
                arguments: [],
                target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.CREATE}`
            });
            signAndExecute({
                transaction: tx
            }, {
                onSuccess: async ({ digest })=>{
                    setHash(digest);
                    try {
                        const { effects } = await iotaClient.waitForTransaction({
                            digest,
                            options: {
                                showEffects: true
                            }
                        });
                        const newObjectId = effects?.created?.[0]?.reference?.objectId;
                        if (newObjectId) {
                            setObjectId(newObjectId);
                            if ("TURBOPACK compile-time truthy", 1) {
                                window.location.hash = newObjectId;
                            }
                            // Reset loading - the query will handle its own loading state
                            setIsLoading(false);
                        } else {
                            setIsLoading(false);
                            console.warn("No object ID found in transaction effects");
                        }
                    } catch (waitError) {
                        console.error("Error waiting for transaction:", waitError);
                        setIsLoading(false);
                    }
                },
                onError: (err)=>{
                    const error = err instanceof Error ? err : new Error(String(err));
                    setTransactionError(error);
                    console.error("Error:", err);
                    setIsLoading(false);
                }
            });
        } catch (err) {
            const error = err instanceof Error ? err : new Error(String(err));
            setTransactionError(error);
            console.error("Error creating object:", err);
            setIsLoading(false);
        }
    };
    // Increment
    const increment = async ()=>{
        if (!objectId || !packageId) return;
        try {
            setIsLoading(true);
            setTransactionError(null);
            const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
            tx.moveCall({
                arguments: [
                    tx.object(objectId)
                ],
                target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.INCREMENT}`
            });
            signAndExecute({
                transaction: tx
            }, {
                onSuccess: async ({ digest })=>{
                    setHash(digest);
                    await iotaClient.waitForTransaction({
                        digest
                    });
                    await refetch();
                    setIsLoading(false);
                },
                onError: (err)=>{
                    const error = err instanceof Error ? err : new Error(String(err));
                    setTransactionError(error);
                    console.error("Error:", err);
                    setIsLoading(false);
                }
            });
        } catch (err) {
            const error = err instanceof Error ? err : new Error(String(err));
            setTransactionError(error);
            console.error("Error incrementing:", err);
            setIsLoading(false);
        }
    };
    // Reset
    const reset = async ()=>{
        if (!objectId || !packageId) return;
        try {
            setIsLoading(true);
            setTransactionError(null);
            const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
            tx.moveCall({
                arguments: [
                    tx.object(objectId),
                    tx.pure.u64(0)
                ],
                target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.SET_VALUE}`
            });
            signAndExecute({
                transaction: tx
            }, {
                onSuccess: async ({ digest })=>{
                    setHash(digest);
                    await iotaClient.waitForTransaction({
                        digest
                    });
                    await refetch();
                    setIsLoading(false);
                },
                onError: (err)=>{
                    const error = err instanceof Error ? err : new Error(String(err));
                    setTransactionError(error);
                    console.error("Error:", err);
                    setIsLoading(false);
                }
            });
        } catch (err) {
            const error = err instanceof Error ? err : new Error(String(err));
            setTransactionError(error);
            console.error("Error resetting:", err);
            setIsLoading(false);
        }
    };
    const contractData = fields ? {
        value: fields.value,
        owner: fields.owner
    } : null;
    const clearObject = ()=>{
        setObjectId(null);
        setTransactionError(null);
        if ("TURBOPACK compile-time truthy", 1) {
            window.location.hash = "";
        }
    };
    const actions = {
        createObject,
        increment,
        reset,
        clearObject
    };
    const contractState = {
        isLoading: isLoading && !objectId || isPending || isFetching,
        isPending,
        isConfirming: false,
        isConfirmed: !!hash && !isLoading && !isPending,
        hash,
        error: queryError || transactionError
    };
    return {
        data: contractData,
        actions,
        state: contractState,
        objectId,
        isOwner,
        objectExists,
        hasValidData
    };
};
_s(useContract, "bPzXPbj/f5pGoCL9xy7YZOE90Bs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNetworkVariable"],
        __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIotaClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignAndExecuteTransaction"],
        __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIotaClientQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/heroes_guess_dapp/components/sample.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * ============================================================================
 * IOTA DAPP INTEGRATION COMPONENT
 * ============================================================================
 * 
 * This is the main integration component for your IOTA dApp.
 * 
 * All the contract logic is in hooks/useContract.ts
 * 
 * To customize your dApp, modify this file.
 * 
 * ============================================================================
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/dapp-kit/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$hooks$2f$useContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/hooks/useContract.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/container.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/flex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/heading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$react$2d$spinners$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/react-spinners/ClipLoader.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const SampleIntegration = ()=>{
    _s();
    const currentAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentAccount"])();
    const { data, actions, state, objectId, isOwner, objectExists, hasValidData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$hooks$2f$useContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContract"])();
    const isConnected = !!currentAccount;
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "500px",
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                        size: "6",
                        style: {
                            marginBottom: "1rem"
                        },
                        children: "IOTA dApp"
                    }, void 0, false, {
                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        children: "Please connect your wallet to interact with the contract."
                    }, void 0, false, {
                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            padding: "1rem",
            background: "var(--gray-a2)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            style: {
                maxWidth: "800px",
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                    size: "6",
                    style: {
                        marginBottom: "2rem"
                    },
                    children: "IOTA Counter dApp"
                }, void 0, false, {
                    fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                !objectId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "3",
                            onClick: actions.createObject,
                            disabled: state.isPending,
                            children: state.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$react$2d$spinners$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        size: 16,
                                        style: {
                                            marginRight: "8px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                        lineNumber: 53,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Creating..."
                                ]
                            }, void 0, true) : "Create Counter"
                        }, void 0, false, {
                            fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "1rem",
                                padding: "1rem",
                                background: "var(--red-a3)",
                                borderRadius: "8px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                style: {
                                    color: "var(--red-11)"
                                },
                                children: [
                                    "Error: ",
                                    state.error?.message || String(state.error)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                lineNumber: 62,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                            lineNumber: 61,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: state.isLoading && !data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        children: "Loading object..."
                    }, void 0, false, {
                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                        lineNumber: 71,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)) : state.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "1rem",
                            background: "var(--red-a3)",
                            borderRadius: "8px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                style: {
                                    color: "var(--red-11)",
                                    display: "block",
                                    marginBottom: "0.5rem"
                                },
                                children: "Error loading object"
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                lineNumber: 74,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                size: "2",
                                style: {
                                    color: "var(--red-11)"
                                },
                                children: state.error.message || "Object not found or invalid"
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                lineNumber: 77,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                size: "1",
                                style: {
                                    color: "var(--gray-a11)",
                                    marginTop: "0.5rem",
                                    display: "block"
                                },
                                children: [
                                    "Object ID: ",
                                    objectId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                lineNumber: 80,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "2",
                                variant: "soft",
                                onClick: actions.clearObject,
                                style: {
                                    marginTop: "1rem"
                                },
                                children: "Clear & Create New"
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                lineNumber: 83,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                        lineNumber: 73,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)) : objectExists && !hasValidData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "1rem",
                            background: "var(--yellow-a3)",
                            borderRadius: "8px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                style: {
                                    color: "var(--yellow-11)"
                                },
                                children: "Object found but data structure is invalid. Please check the contract structure."
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                lineNumber: 94,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                size: "1",
                                style: {
                                    color: "var(--gray-a11)",
                                    marginTop: "0.5rem",
                                    display: "block"
                                },
                                children: [
                                    "Object ID: ",
                                    objectId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                lineNumber: 97,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                        lineNumber: 93,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)) : data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: "1rem",
                                    padding: "1rem",
                                    background: "var(--gray-a3)",
                                    borderRadius: "8px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        size: "2",
                                        style: {
                                            display: "block",
                                            marginBottom: "0.5rem"
                                        },
                                        children: "Counter Value"
                                    }, void 0, false, {
                                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                        lineNumber: 104,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                                        size: "8",
                                        children: data.value
                                    }, void 0, false, {
                                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                        lineNumber: 105,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        size: "1",
                                        style: {
                                            color: "var(--gray-a11)",
                                            marginTop: "0.5rem",
                                            display: "block"
                                        },
                                        children: [
                                            "Object ID: ",
                                            objectId
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                        lineNumber: 106,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                lineNumber: 103,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                                gap: "2",
                                style: {
                                    marginBottom: "1rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: actions.increment,
                                        disabled: state.isLoading || state.isPending,
                                        children: state.isLoading || state.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$react$2d$spinners$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                            lineNumber: 117,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)) : "Increment"
                                    }, void 0, false, {
                                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                        lineNumber: 112,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isOwner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: actions.reset,
                                        disabled: state.isLoading || state.isPending,
                                        children: state.isLoading || state.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$react$2d$spinners$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                            lineNumber: 128,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)) : "Reset"
                                    }, void 0, false, {
                                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                        lineNumber: 123,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                lineNumber: 111,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            state.hash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "1rem",
                                    padding: "1rem",
                                    background: "var(--gray-a3)",
                                    borderRadius: "8px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        size: "1",
                                        style: {
                                            display: "block",
                                            marginBottom: "0.5rem"
                                        },
                                        children: "Transaction Hash"
                                    }, void 0, false, {
                                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                        lineNumber: 138,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        size: "2",
                                        style: {
                                            fontFamily: "monospace",
                                            wordBreak: "break-all"
                                        },
                                        children: state.hash
                                    }, void 0, false, {
                                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                        lineNumber: 139,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    state.isConfirmed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        size: "2",
                                        style: {
                                            color: "green",
                                            marginTop: "0.5rem",
                                            display: "block"
                                        },
                                        children: "Transaction confirmed!"
                                    }, void 0, false, {
                                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                        lineNumber: 141,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                lineNumber: 137,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0)),
                            state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "1rem",
                                    padding: "1rem",
                                    background: "var(--red-a3)",
                                    borderRadius: "8px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    style: {
                                        color: "var(--red-11)"
                                    },
                                    children: [
                                        "Error: ",
                                        state.error?.message || String(state.error)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                    lineNumber: 150,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                lineNumber: 149,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                        lineNumber: 102,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "1rem",
                            background: "var(--yellow-a3)",
                            borderRadius: "8px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                style: {
                                    color: "var(--yellow-11)"
                                },
                                children: "Object not found"
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                lineNumber: 158,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                size: "1",
                                style: {
                                    color: "var(--gray-a11)",
                                    marginTop: "0.5rem",
                                    display: "block"
                                },
                                children: [
                                    "Object ID: ",
                                    objectId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                lineNumber: 159,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "2",
                                variant: "soft",
                                onClick: actions.clearObject,
                                style: {
                                    marginTop: "1rem"
                                },
                                children: "Clear & Create New"
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                lineNumber: 162,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                        lineNumber: 157,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SampleIntegration, "hKH/e/uLpkFYR1aSgUC3yCtB36s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$hooks$2f$useContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContract"]
    ];
});
_c = SampleIntegration;
const __TURBOPACK__default__export__ = SampleIntegration;
var _c;
__turbopack_context__.k.register(_c, "SampleIntegration");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/heroes_guess_dapp/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$components$2f$Wallet$2d$connect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/components/Wallet-connect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$hooks$2f$useContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/hooks/useContract.ts [app-client] (ecmascript)"); // Import the hook
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$components$2f$sample$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/components/sample.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Let's assume we have a list of heroes
const heroes = [
    "Axe",
    "Invoker",
    "Pudge",
    "Juggernaut",
    "Lion"
];
function Home() {
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [heroToGuess, setHeroToGuess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userGuess, setUserGuess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Start the game to play!");
    const { contractData, isLoading, isPending, isConfirming, isConfirmed, error, setValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$hooks$2f$useContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContract"])();
    const startGame = ()=>{
        setIsPlaying(true);
        setScore(0);
        setUserGuess("");
        setNextHero();
        setMessage("Guess the hero!");
    };
    const setNextHero = ()=>{
        const randomIndex = Math.floor(Math.random() * heroes.length);
        setHeroToGuess(heroes[randomIndex]);
    };
    const handleGuess = ()=>{
        if (!userGuess) return;
        if (userGuess.toLowerCase() === heroToGuess.toLowerCase()) {
            setScore(score + 1);
            setMessage(`Correct! It was ${heroToGuess}. Now guess the next one!`);
        } else {
            setMessage(`Wrong! The correct hero was ${heroToGuess}. Try the next one!`);
        }
        setUserGuess("");
        setNextHero();
    };
    const stopGame = async ()=>{
        setIsPlaying(false);
        setMessage(`Game over! Your final score is ${score}. Saving score to the contract...`);
        try {
            // Call the contract to set the value
            await setValue(score);
            setMessage(`Game over! Your final score is ${score}. Score saved!`);
        } catch (e) {
            console.error("Failed to set value on contract", e);
            setMessage("Could not save your score to the contract. See console for details.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "2rem",
            fontFamily: "sans-serif",
            textAlign: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Hero Guessing Game"
            }, void 0, false, {
                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                lineNumber: 62,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$components$2f$Wallet$2d$connect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletConnect"], {}, void 0, false, {
                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                lineNumber: 63,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    margin: "1rem 0"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$components$2f$sample$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                    lineNumber: 67,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                lineNumber: 66,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "2rem",
                    padding: "2rem",
                    border: "1px solid #ccc",
                    borderRadius: "8px"
                },
                children: [
                    !isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontStyle: "italic",
                                    minHeight: "24px"
                                },
                                children: message
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 73,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: startGame,
                                style: {
                                    fontSize: "1.2rem",
                                    padding: "0.8rem 1.5rem",
                                    cursor: "pointer"
                                },
                                children: "Start Game"
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 74,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                        lineNumber: 72,
                        columnNumber: 6
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "Score: ",
                                    score
                                ]
                            }, void 0, true, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 80,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontStyle: "italic",
                                    minHeight: "24px"
                                },
                                children: message
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 81,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "What hero am I thinking of?"
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 82,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: userGuess,
                                onChange: (e)=>setUserGuess(e.target.value),
                                onKeyPress: (e)=>e.key === "Enter" && handleGuess(),
                                style: {
                                    fontSize: "1rem",
                                    padding: "0.5rem"
                                },
                                placeholder: "Enter hero name"
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 83,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleGuess,
                                style: {
                                    fontSize: "1rem",
                                    padding: "0.5rem 1rem",
                                    marginLeft: "0.5rem",
                                    cursor: "pointer"
                                },
                                children: "Guess"
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 91,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: stopGame,
                                style: {
                                    fontSize: "1rem",
                                    padding: "0.5rem 1rem",
                                    marginLeft: "0.5rem",
                                    backgroundColor: "#f44336",
                                    color: "white",
                                    border: "none",
                                    cursor: "pointer"
                                },
                                disabled: isPending || isConfirming,
                                children: isPending || isConfirming ? "Saving..." : "Stop Game"
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 94,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                        lineNumber: 79,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "1rem"
                        },
                        children: [
                            isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Transaction is pending..."
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 102,
                                columnNumber: 20
                            }, this),
                            isConfirming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Transaction is confirming..."
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 103,
                                columnNumber: 23
                            }, this),
                            isConfirmed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Transaction confirmed!"
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 104,
                                columnNumber: 22
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "red"
                                },
                                children: [
                                    "Error: ",
                                    error
                                ]
                            }, void 0, true, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 105,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                        lineNumber: 101,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                lineNumber: 70,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, this);
}
_s(Home, "a/RTxcxe6QHBbDBCsZGZsSydMLw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$hooks$2f$useContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContract"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=heroes_guess_dapp_593049e2._.js.map