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
 * IOTA CONTRACT INTEGRATION HOOK
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
const CONTRACT_MODULE = "contract";
const CONTRACT_METHODS = {
    CREATE: "create",
    INCREMENT: "increment",
    SET_VALUE: "set_value"
};
// Extract fields robustly
function getObjectFields(data) {
    if (!data) return null;
    if (data.content?.dataType !== "moveObject") {
        console.log("Data is not a moveObject:", data.content?.dataType);
        return null;
    }
    const fields = data.content.fields;
    if (!fields) {
        console.log("No fields found in object data");
        return null;
    }
    // Log to help debugging
    // console.log("Object fields structure:", JSON.stringify(fields, null, 2))
    // value may be string (u64) or number
    let value;
    if (typeof fields.value === "string") {
        value = parseInt(fields.value, 10);
        if (isNaN(value)) {
            console.log("Value is not a valid number:", fields.value);
            return null;
        }
    } else if (typeof fields.value === "number") {
        value = fields.value;
    } else if (fields.value && typeof fields.value === "object" && typeof fields.value.fields === "object" && typeof fields.value.fields.value !== "undefined") {
        // handle nested shape if any
        const maybe = fields.value.fields.value;
        value = typeof maybe === "string" ? parseInt(maybe, 10) : Number(maybe);
        if (isNaN(value)) return null;
    } else {
        console.log("Value is not a number or string:", typeof fields.value, fields.value);
        return null;
    }
    if (!fields.owner && fields.owner !== 0) {
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
    // load objectId from location.hash
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useContract.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const h = window.location.hash.slice(1);
                if (h) setObjectId(h);
            }
        }
    }["useContract.useEffect"], []);
    // Query the object only when we have objectId
    const queryEnabled = !!objectId;
    const { data: queryResponse, isPending: isFetching, error: queryError, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIotaClientQuery"])("getObject", // pass params only when enabled to avoid passing undefined id
    queryEnabled ? {
        id: objectId,
        options: {
            showContent: true,
            showOwner: true
        }
    } : undefined, {
        enabled: queryEnabled
    });
    // Normalize the returned object data (robust to shapes)
    const rawObject = queryResponse?.data ?? queryResponse ?? null;
    const fields = rawObject ? getObjectFields(rawObject) : null;
    const contractData = fields ? {
        value: fields.value,
        owner: fields.owner
    } : null;
    const isOwner = !!(fields && address && fields.owner.toLowerCase() === address.toLowerCase());
    const objectExists = !!rawObject;
    const hasValidData = !!fields;
    // create object
    const createObject = async ()=>{
        if (!packageId) {
            setTransactionError(new Error("packageId not configured"));
            return;
        }
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
                        } else {
                            console.warn("No object ID found in transaction effects");
                        }
                    } catch (waitError) {
                        console.error("Error waiting for transaction:", waitError);
                        setTransactionError(waitError instanceof Error ? waitError : new Error(String(waitError)));
                    } finally{
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
    // increment
    const increment = async ()=>{
        if (!objectId || !packageId) {
            setTransactionError(new Error("Missing objectId or packageId"));
            return;
        }
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
                    try {
                        await iotaClient.waitForTransaction({
                            digest
                        });
                        if (refetch) await refetch();
                    } catch (e) {
                        console.error("Wait or refetch failed:", e);
                    } finally{
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
            console.error("Error incrementing:", err);
            setIsLoading(false);
        }
    };
    // reset (set to 0)
    const reset = async ()=>{
        await setValue(0);
    };
    // set value
    const setValue = async (value)=>{
        if (!objectId || !packageId) {
            setTransactionError(new Error("Missing objectId or packageId"));
            return;
        }
        try {
            setIsLoading(true);
            setTransactionError(null);
            const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
            tx.moveCall({
                arguments: [
                    tx.object(objectId),
                    tx.pure.u64(value)
                ],
                target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.SET_VALUE}`
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
                    } catch (e) {
                        console.error("Wait/refetch failed:", e);
                    } finally{
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
            console.error("Error setting value:", err);
            setIsLoading(false);
        }
    };
    const clearObject = ()=>{
        setObjectId(null);
        setTransactionError(null);
        setHash(undefined);
        if ("TURBOPACK compile-time truthy", 1) {
            window.location.hash = "";
        }
    };
    const actions = {
        createObject,
        increment,
        reset,
        setValue,
        clearObject
    };
    const contractState = {
        isLoading: isLoading && !objectId || isFetching,
        isPending,
        isConfirming: false,
        isConfirmed: !!hash && !isLoading && !isPending,
        hash,
        error: queryError || transactionError
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
_s(useContract, "T26m6uCacrtbWuHwoZtGz+0zmaA=", false, function() {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$lib$2f$champions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/lib/champions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/dapp-kit/dist/esm/index.js [app-client] (ecmascript)");
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
    const currentAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentAccount"])();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [heroToGuess, setHeroToGuess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userGuess, setUserGuess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Press 'Start Game' to begin!");
    const [shuffledChampions, setShuffledChampions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { data, actions, state, objectId, objectExists } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$hooks$2f$useContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContract"])();
    const { setValue, createObject, clearObject } = actions;
    const { isPending, isConfirming, isConfirmed, error, isLoading } = state;
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
    // Tự động bắt đầu game khi contract object được tạo xong
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (objectExists && objectId && !isPlaying && shuffledChampions.length > 0) {
                const hasJustCreated = sessionStorage.getItem('pendingGameStart');
                if (hasJustCreated === 'true') {
                    sessionStorage.removeItem('pendingGameStart');
                    setIsPlaying(true);
                    setScore(0);
                    setUserGuess("");
                    setCurrentIndex(0);
                    setHeroToGuess(shuffledChampions[0]);
                    setMessage("Which champion is this?");
                }
            }
        }
    }["Home.useEffect"], [
        objectExists,
        objectId,
        isPlaying,
        shuffledChampions
    ]);
    const startGame = ()=>{
        // Nếu chưa có contract object, tạo mới
        if (!objectExists) {
            setMessage("Creating contract... Please approve the transaction in your wallet.");
            sessionStorage.setItem('pendingGameStart', 'true');
            createObject();
            return;
        }
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
                        lineNumber: 108,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$components$2f$Wallet$2d$connect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletConnect"], {}, void 0, false, {
                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                        lineNumber: 109,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                lineNumber: 107,
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
                                    lineNumber: 116,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "message",
                                    children: message
                                }, void 0, false, {
                                    fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: startGame,
                                    className: "btn btn-start",
                                    disabled: !currentAccount,
                                    children: !currentAccount ? "Connect Wallet First" : "Start Game"
                                }, void 0, false, {
                                    fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                            lineNumber: 115,
                            columnNumber: 6
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
                                            lineNumber: 132,
                                            columnNumber: 11
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                        lineNumber: 131,
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
                                        lineNumber: 141,
                                        columnNumber: 10
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "message",
                                        children: message
                                    }, void 0, false, {
                                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                        lineNumber: 142,
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
                                                lineNumber: 145,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleGuess,
                                                className: "btn btn-guess",
                                                children: "Guess"
                                            }, void 0, false, {
                                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 10
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>stopGame(false),
                                        className: "btn btn-stop",
                                        disabled: isPending || isConfirming,
                                        children: isPending || isConfirming ? "Saving..." : "Stop Game"
                                    }, void 0, false, {
                                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 10
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Loading champion..."
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 163,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                            lineNumber: 127,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                        lineNumber: 113,
                        columnNumber: 5
                    }, this),
                    (isLoading || isPending || isConfirmed || error) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contract-status",
                        children: [
                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Processing transaction..."
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 171,
                                columnNumber: 21
                            }, this),
                            isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Transaction is pending..."
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 172,
                                columnNumber: 21
                            }, this),
                            isConfirming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Transaction is confirming..."
                            }, void 0, false, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 173,
                                columnNumber: 24
                            }, this),
                            isConfirmed && state.hash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Transaction confirmed!",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://explorer.rebased.iota.org/txblock/${state.hash}?network=devnet`,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        style: {
                                            marginLeft: '0.5rem',
                                            color: '#4CAF50'
                                        },
                                        children: "View on Explorer"
                                    }, void 0, false, {
                                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 175,
                                columnNumber: 8
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "error-message",
                                children: [
                                    "Error: ",
                                    error.message || String(error)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                                lineNumber: 187,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                        lineNumber: 170,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/heroes_guess_dapp/app/page.tsx",
                lineNumber: 112,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/heroes_guess_dapp/app/page.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, this);
}
_s(Home, "obwO7t+2jOI/Yqs9XxpOT00eZJ0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentAccount"],
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

//# sourceMappingURL=heroes_guess_dapp_66782b25._.js.map