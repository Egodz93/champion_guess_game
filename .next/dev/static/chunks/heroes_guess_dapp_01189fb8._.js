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
 * IOTA CONTRACT INTEGRATION HOOK (SDK MỚI - TransactionBlock)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/dapp-kit/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/lib/config.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CONTRACT_MODULE = "contract";
const CONTRACT_METHODS = {
    CREATE: "create",
    INCREMENT: "increment",
    SET_VALUE: "set_value"
};
// Extract fields
function getObjectFields(data) {
    if (!data) return null;
    if (data.content?.dataType !== "moveObject") return null;
    const fields = data.content.fields;
    if (!fields) return null;
    let value;
    if (typeof fields.value === "string") {
        value = parseInt(fields.value, 10);
    } else if (typeof fields.value === "number") {
        value = fields.value;
    } else {
        return null;
    }
    if (!fields.owner) return null;
    return {
        value,
        owner: String(fields.owner)
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
    // Load objectId from URL hash
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useContract.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const h = window.location.hash.slice(1);
                if (h) setObjectId(h);
            }
        }
    }["useContract.useEffect"], []);
    // Query object
    const queryEnabled = !!objectId;
    const { data: queryResponse, isPending: isFetching, error: queryError, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIotaClientQuery"])("getObject", queryEnabled ? {
        id: objectId,
        options: {
            showContent: true,
            showOwner: true
        }
    } : undefined, {
        enabled: queryEnabled
    });
    const rawObject = queryResponse?.data ?? queryResponse ?? null;
    const fields = rawObject ? getObjectFields(rawObject) : null;
    const contractData = fields ? {
        value: fields.value,
        owner: fields.owner
    } : null;
    const isOwner = !!(fields && address && fields.owner.toLowerCase() === address.toLowerCase());
    const objectExists = !!rawObject;
    const hasValidData = !!fields;
    // ✅ CREATE OBJECT
    const createObject = async ()=>{
        if (!packageId) return;
        try {
            setIsLoading(true);
            setTransactionError(null);
            setHash(undefined);
            const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionBlock"]();
            tx.moveCall({
                target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.CREATE}`,
                arguments: []
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
                        }
                    } finally{
                        setIsLoading(false);
                    }
                },
                onError: (err)=>{
                    setTransactionError(err);
                    setIsLoading(false);
                }
            });
        } catch (err) {
            setTransactionError(err);
            setIsLoading(false);
        }
    };
    // ✅ INCREMENT
    const increment = async ()=>{
        if (!objectId || !packageId) return;
        try {
            setIsLoading(true);
            setTransactionError(null);
            const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionBlock"]();
            tx.moveCall({
                target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.INCREMENT}`,
                arguments: [
                    tx.object(objectId)
                ]
            });
            signAndExecute({
                transaction: tx
            }, {
                onSuccess: async ({ digest })=>{
                    setHash(digest);
                    try {
                        await iotaClient.waitForTransaction({
                            digest
                        });
                        if (refetch) await refetch();
                    } finally{
                        setIsLoading(false);
                    }
                },
                onError: (err)=>{
                    setTransactionError(err);
                    setIsLoading(false);
                }
            });
        } catch (err) {
            setTransactionError(err);
            setIsLoading(false);
        }
    };
    // ✅ RESET
    const reset = async ()=>{
        await setValue(0);
    };
    // ✅ SET VALUE
    const setValue = async (value)=>{
        if (!objectId || !packageId) return;
        try {
            setIsLoading(true);
            setTransactionError(null);
            const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionBlock"]();
            tx.moveCall({
                target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.SET_VALUE}`,
                arguments: [
                    tx.object(objectId),
                    tx.pure(value)
                ]
            });
            signAndExecute({
                transaction: tx
            }, {
                onSuccess: async ({ digest })=>{
                    setHash(digest);
                    try {
                        await iotaClient.waitForTransaction({
                            digest
                        });
                        if (refetch) await refetch();
                    } finally{
                        setIsLoading(false);
                    }
                },
                onError: (err)=>{
                    setTransactionError(err);
                    setIsLoading(false);
                }
            });
        } catch (err) {
            setTransactionError(err);
            setIsLoading(false);
        }
    };
    // ✅ CLEAR
    const clearObject = ()=>{
        setObjectId(null);
        setTransactionError(null);
        setHash(undefined);
        if ("TURBOPACK compile-time truthy", 1) {
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
            clearObject
        },
        state: {
            isLoading: isLoading && !objectId || isFetching,
            isPending,
            isConfirming: false,
            isConfirmed: !!hash && !isLoading && !isPending,
            hash,
            error: queryError || transactionError
        },
        objectId,
        isOwner,
        objectExists,
        hasValidData
    };
};
_s(useContract, "hLLPDjQsw9br/1WJKo/MM4Pbnp4=", false, function() {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/dapp-kit/dist/esm/index.js [app-client] (ecmascript)");
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
                        lineNumber: 18,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        children: "Please connect your wallet to interact with the contract."
                    }, void 0, false, {
                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
            lineNumber: 16,
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
                    lineNumber: 28,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                !objectId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "3",
                            onClick: actions?.createObject,
                            disabled: state.isPending || state.isLoading,
                            children: state.isPending || state.isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$react$2d$spinners$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        size: 16,
                                        style: {
                                            marginRight: "8px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                        lineNumber: 39,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Creating..."
                                ]
                            }, void 0, true) : "Create Counter"
                        }, void 0, false, {
                            fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                            lineNumber: 32,
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
                                lineNumber: 48,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                            lineNumber: 47,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: state.isLoading && !data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        children: "Loading object..."
                    }, void 0, false, {
                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                        lineNumber: 57,
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
                                lineNumber: 60,
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
                                lineNumber: 63,
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
                                lineNumber: 66,
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
                                lineNumber: 69,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                        lineNumber: 59,
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
                                lineNumber: 80,
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
                                lineNumber: 83,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                        lineNumber: 79,
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
                                        lineNumber: 90,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                                        size: "8",
                                        children: data.value
                                    }, void 0, false, {
                                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                        lineNumber: 91,
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
                                        lineNumber: 92,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                lineNumber: 89,
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
                                            lineNumber: 103,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)) : "Increment"
                                    }, void 0, false, {
                                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                        lineNumber: 98,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isOwner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: actions.reset,
                                        disabled: state.isLoading || state.isPending,
                                        children: state.isLoading || state.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$react$2d$spinners$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                            lineNumber: 114,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)) : "Reset"
                                    }, void 0, false, {
                                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                        lineNumber: 109,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                lineNumber: 97,
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
                                        lineNumber: 124,
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
                                        lineNumber: 125,
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
                                        lineNumber: 127,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                lineNumber: 123,
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
                                    lineNumber: 136,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                                lineNumber: 135,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                        lineNumber: 88,
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
                                lineNumber: 144,
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
                                lineNumber: 145,
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
                                lineNumber: 148,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                        lineNumber: 143,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/heroes_guess_dapp/components/sample.tsx",
        lineNumber: 26,
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
"[project]/heroes_guess_dapp/lib/champions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "champions",
    ()=>champions
]);
// Using a recent version, you might want to fetch the latest version dynamically in a real app
const LATEST_VERSION = "14.9.1";
const getImageUrl = (championId)=>`https://ddragon.leagueoflegends.com/cdn/${LATEST_VERSION}/img/champion/${championId}.png`;
const champions = [
    {
        id: "Aatrox",
        name: "Aatrox"
    },
    {
        id: "Ahri",
        name: "Ahri"
    },
    {
        id: "Akali",
        name: "Akali"
    },
    {
        id: "Yasuo",
        name: "Yasuo"
    },
    {
        id: "Zed",
        name: "Zed"
    },
    {
        id: "Jinx",
        name: "Jinx"
    },
    {
        id: "Lux",
        name: "Lux"
    },
    {
        id: "Garen",
        name: "Garen"
    },
    {
        id: "Darius",
        name: "Darius"
    },
    {
        id: "Fiora",
        name: "Fiora"
    },
    {
        id: "Irelia",
        name: "Irelia"
    },
    {
        id: "LeeSin",
        name: "Lee Sin"
    },
    {
        id: "Teemo",
        name: "Teemo"
    },
    {
        id: "Vayne",
        name: "Vayne"
    },
    {
        id: "Caitlyn",
        name: "Caitlyn"
    },
    {
        id: "Ezreal",
        name: "Ezreal"
    },
    {
        id: "Thresh",
        name: "Thresh"
    },
    {
        id: "Blitzcrank",
        name: "Blitzcrank"
    },
    {
        id: "Katarina",
        name: "Katarina"
    },
    {
        id: "Riven",
        name: "Riven"
    }
].map((c)=>({
        ...c,
        imageUrl: getImageUrl(c.id)
    }));
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
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$hooks$2f$useContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/hooks/useContract.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$components$2f$sample$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/components/sample.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$lib$2f$champions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/lib/champions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const LATEST_LOL_VERSION = "14.9.1";
function Home() {
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [heroToGuess, setHeroToGuess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userGuess, setUserGuess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Press 'Start Game' to begin!");
    const [shuffledChampions, setShuffledChampions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { data, actions, state } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$hooks$2f$useContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContract"])();
    const { setValue } = actions;
    const { isPending, isConfirming, isConfirmed, error } = state;
    // Shuffle champions on initial load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setShuffledChampions([
                ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$lib$2f$champions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["champions"]
            ].sort({
                "Home.useEffect": ()=>Math.random() - 0.5
            }["Home.useEffect"]));
        }
    }["Home.useEffect"], []);
    const startGame = ()=>{
        setIsPlaying(true);
        setScore(0);
        setUserGuess("");
        setCurrentIndex(0);
        setHeroToGuess(shuffledChampions[0]);
        setMessage("Which champion is this?");
    };
    const setNextHero = ()=>{
        const nextIndex = currentIndex + 1;
        if (nextIndex >= shuffledChampions.length) {
            // End of the list, stop the game
            stopGame(true); // pass a flag to indicate it's a win/completion
        } else {
            setCurrentIndex(nextIndex);
            setHeroToGuess(shuffledChampions[nextIndex]);
        }
    };
    const handleGuess = ()=>{
        if (!userGuess || !heroToGuess) return;
        if (userGuess.toLowerCase() === heroToGuess.name.toLowerCase()) {
            setScore(score + 1);
            setMessage(`Correct! It was ${heroToGuess.name}. Next one!`);
        } else {
            setMessage(`Wrong! That was ${heroToGuess.name}. Try this one!`);
        }
        setUserGuess("");
        setNextHero();
    };
    const stopGame = async (completed = false)=>{
        setIsPlaying(false);
        const finalMessage = completed ? `Congratulations! You've guessed all champions! Your final score is ${score}.` : `Game over! Your final score is ${score}.`;
        setMessage(`${finalMessage} Saving score to the contract...`);
        try {
            await setValue(score);
            setMessage(`${finalMessage} Score saved successfully!`);
        } catch (e) {
            console.error("Failed to set value on contract", e);
            setMessage("Could not save your score. See console for details.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Champion Guessing Game"
                    }, void 0, false, {
                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                        lineNumber: 83,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$components$2f$Wallet$2d$connect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletConnect"], {}, void 0, false, {
                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                        lineNumber: 84,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                lineNumber: 82,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "main-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "game-card",
                        children: !isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "game-intro",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Welcome!"
                                }, void 0, false, {
                                    fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "message",
                                    children: message
                                }, void 0, false, {
                                    fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: startGame,
                                    className: "btn btn-start",
                                    children: "Start Game"
                                }, void 0, false, {
                                    fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                            lineNumber: 90,
                            columnNumber: 7
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "game-active",
                            children: heroToGuess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "champion-image-container",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: heroToGuess.imageUrl,
                                            alt: "Guess the champion",
                                            width: 300,
                                            height: 300,
                                            className: "champion-image",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 11
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 10
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "score",
                                        children: [
                                            "Score: ",
                                            score
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 10
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "message",
                                        children: message
                                    }, void 0, false, {
                                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 10
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "input-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: userGuess,
                                                onChange: (e)=>setUserGuess(e.target.value),
                                                onKeyPress: (e)=>e.key === "Enter" && handleGuess(),
                                                className: "guess-input",
                                                placeholder: "Enter champion name..."
                                            }, void 0, false, {
                                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleGuess,
                                                className: "btn btn-guess",
                                                children: "Guess"
                                            }, void 0, false, {
                                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 10
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>stopGame(false),
                                        className: "btn btn-stop",
                                        disabled: isPending || isConfirming,
                                        children: isPending || isConfirming ? "Saving..." : "Stop Game"
                                    }, void 0, false, {
                                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 10
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Loading champion..."
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 134,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                            lineNumber: 98,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                        lineNumber: 88,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contract-status",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    margin: "1rem 0"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$components$2f$sample$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 141,
                                columnNumber: 6
                            }, this),
                            isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Transaction is pending..."
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 144,
                                columnNumber: 20
                            }, this),
                            isConfirming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Transaction is confirming..."
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 145,
                                columnNumber: 23
                            }, this),
                            isConfirmed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Transaction confirmed!"
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 146,
                                columnNumber: 22
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "error-message",
                                children: [
                                    "Error: ",
                                    error
                                ]
                            }, void 0, true, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 147,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                        lineNumber: 140,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                lineNumber: 87,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, this);
}
_s(Home, "CgriuAdcA+ZB/zaTfKcMkFgFirU=", false, function() {
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

//# sourceMappingURL=heroes_guess_dapp_01189fb8._.js.map