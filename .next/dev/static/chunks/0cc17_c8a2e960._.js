(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/data/internal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$Intent",
    ()=>$Intent,
    "Argument",
    ()=>Argument,
    "BCSBytes",
    ()=>BCSBytes,
    "Command",
    ()=>Command,
    "GasData",
    ()=>GasData,
    "IotaAddress",
    ()=>IotaAddress,
    "JsonU64",
    ()=>JsonU64,
    "NormalizedCallArg",
    ()=>NormalizedCallArg,
    "ObjectArg",
    ()=>ObjectArg,
    "ObjectID",
    ()=>ObjectID,
    "ObjectRef",
    ()=>ObjectRef,
    "OpenMoveTypeSignature",
    ()=>OpenMoveTypeSignature,
    "OpenMoveTypeSignatureBody",
    ()=>OpenMoveTypeSignatureBody,
    "StructTag",
    ()=>StructTag,
    "TransactionData",
    ()=>TransactionData,
    "TransactionExpiration",
    ()=>TransactionExpiration,
    "safeEnum",
    ()=>safeEnum
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/valibot/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/utils/iota-types.js [app-client] (ecmascript)");
;
;
function safeEnum(options) {
    const unionOptions = Object.entries(options).map(([key, value])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
            [key]: value
        }));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])(unionOptions), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"])((value)=>({
            ...value,
            $kind: Object.keys(value)[0]
        })));
}
const IotaAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"])((value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(value)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["check"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidIotaAddress"]));
const ObjectID = IotaAddress;
const BCSBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])();
const JsonU64 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])())
]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["check"])((val)=>{
    try {
        BigInt(val);
        return BigInt(val) >= 0 && BigInt(val) <= 18446744073709551615n;
    } catch  {
        return false;
    }
}, "Invalid u64"));
const ObjectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    objectId: IotaAddress,
    version: JsonU64,
    digest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()
});
const Argument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        GasCoin: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true)
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        Input: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("pure"))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        Input: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("object"))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        Result: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])())
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        NestedResult: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tuple"])([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])())
        ])
    })
]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"])((value)=>({
        ...value,
        $kind: Object.keys(value)[0]
    })));
const GasData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    budget: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(JsonU64),
    price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(JsonU64),
    owner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(IotaAddress),
    payment: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(ObjectRef))
});
const StructTag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    module: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    // type_params in rust, should be updated to use camelCase
    typeParams: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])())
});
const OpenMoveTypeSignatureBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("address"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("bool"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("u8"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("u16"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("u32"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("u64"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("u128"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("u256"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        vector: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>OpenMoveTypeSignatureBody)
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        datatype: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
            package: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
            module: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
            typeParameters: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>OpenMoveTypeSignatureBody))
        })
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        typeParameter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])())
    })
]);
const OpenMoveTypeSignature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("&"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("&mut")
    ])),
    body: OpenMoveTypeSignatureBody
});
const ProgrammableMoveCall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    package: ObjectID,
    module: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    function: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    // snake case in rust
    typeArguments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
    arguments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument),
    _argumentTypes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(OpenMoveTypeSignature)))
});
const $Intent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    inputs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
        Argument,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument)
    ])),
    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unknown"])())
});
const Command = safeEnum({
    MoveCall: ProgrammableMoveCall,
    TransferObjects: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        objects: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument),
        address: Argument
    }),
    SplitCoins: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        coin: Argument,
        amounts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument)
    }),
    MergeCoins: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        destination: Argument,
        sources: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument)
    }),
    Publish: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        modules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(BCSBytes),
        dependencies: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(ObjectID)
    }),
    MakeMoveVec: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
        elements: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument)
    }),
    Upgrade: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        modules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(BCSBytes),
        dependencies: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(ObjectID),
        package: ObjectID,
        ticket: Argument
    }),
    $Intent
});
const ObjectArg = safeEnum({
    ImmOrOwnedObject: ObjectRef,
    SharedObject: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        objectId: ObjectID,
        // snake case in rust
        initialSharedVersion: JsonU64,
        mutable: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"])()
    }),
    Receiving: ObjectRef
});
const CallArg = safeEnum({
    Object: ObjectArg,
    Pure: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        bytes: BCSBytes
    }),
    UnresolvedPure: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unknown"])()
    }),
    UnresolvedObject: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        objectId: ObjectID,
        version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(JsonU64)),
        digest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])())),
        initialSharedVersion: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(JsonU64))
    })
});
const NormalizedCallArg = safeEnum({
    Object: ObjectArg,
    Pure: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        bytes: BCSBytes
    })
});
const TransactionExpiration = safeEnum({
    None: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true),
    Epoch: JsonU64
});
const TransactionData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(2),
    sender: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"])(IotaAddress),
    expiration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"])(TransactionExpiration),
    gasData: GasData,
    inputs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(CallArg),
    commands: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Command)
});
;
 //# sourceMappingURL=internal.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/Commands.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Commands",
    ()=>Commands,
    "UpgradePolicy",
    ()=>UpgradePolicy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/bcs/dist/esm/b64.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/valibot/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/utils/iota-types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/data/internal.js [app-client] (ecmascript)");
;
;
;
;
var UpgradePolicy = /* @__PURE__ */ ((UpgradePolicy2)=>{
    UpgradePolicy2[UpgradePolicy2["COMPATIBLE"] = 0] = "COMPATIBLE";
    UpgradePolicy2[UpgradePolicy2["ADDITIVE"] = 128] = "ADDITIVE";
    UpgradePolicy2[UpgradePolicy2["DEP_ONLY"] = 192] = "DEP_ONLY";
    return UpgradePolicy2;
})(UpgradePolicy || {});
const Commands = {
    MoveCall (input) {
        const [pkg, mod = "", fn = ""] = "target" in input ? input.target.split("::") : [
            input.package,
            input.module,
            input.function
        ];
        return {
            $kind: "MoveCall",
            MoveCall: {
                package: pkg,
                module: mod,
                function: fn,
                typeArguments: input.typeArguments ?? [],
                arguments: input.arguments ?? []
            }
        };
    },
    TransferObjects (objects, address) {
        return {
            $kind: "TransferObjects",
            TransferObjects: {
                objects: objects.map((o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], o)),
                address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], address)
            }
        };
    },
    SplitCoins (coin, amounts) {
        return {
            $kind: "SplitCoins",
            SplitCoins: {
                coin: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], coin),
                amounts: amounts.map((o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], o))
            }
        };
    },
    MergeCoins (destination, sources) {
        return {
            $kind: "MergeCoins",
            MergeCoins: {
                destination: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], destination),
                sources: sources.map((o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], o))
            }
        };
    },
    Publish ({ modules, dependencies }) {
        return {
            $kind: "Publish",
            Publish: {
                modules: modules.map((module)=>typeof module === "string" ? module : (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase64"])(new Uint8Array(module))),
                dependencies: dependencies.map((dep)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaObjectId"])(dep))
            }
        };
    },
    Upgrade ({ modules, dependencies, package: packageId, ticket }) {
        return {
            $kind: "Upgrade",
            Upgrade: {
                modules: modules.map((module)=>typeof module === "string" ? module : (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase64"])(new Uint8Array(module))),
                dependencies: dependencies.map((dep)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaObjectId"])(dep)),
                package: packageId,
                ticket: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], ticket)
            }
        };
    },
    MakeMoveVec ({ type, elements }) {
        return {
            $kind: "MakeMoveVec",
            MakeMoveVec: {
                type: type ?? null,
                elements: elements.map((o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], o))
            }
        };
    },
    Intent ({ name, inputs = {}, data = {} }) {
        return {
            $kind: "$Intent",
            $Intent: {
                name,
                inputs: Object.fromEntries(Object.entries(inputs).map(([key, value])=>[
                        key,
                        Array.isArray(value) ? value.map((o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], o)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], value)
                    ])),
                data
            }
        };
    }
};
;
 //# sourceMappingURL=Commands.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/data/v1.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NormalizedCallArg",
    ()=>NormalizedCallArg,
    "ObjectRef",
    ()=>ObjectRef,
    "SerializedTransactionDataV1",
    ()=>SerializedTransactionDataV1,
    "StructTag",
    ()=>StructTag,
    "TransactionArgument",
    ()=>TransactionArgument,
    "TypeTag",
    ()=>TypeTag,
    "serializeV1TransactionData",
    ()=>serializeV1TransactionData,
    "transactionDataFromV1",
    ()=>transactionDataFromV1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/bcs/dist/esm/b64.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/valibot/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$type$2d$tag$2d$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/bcs/type-tag-serializer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/data/internal.js [app-client] (ecmascript)");
;
;
;
;
const ObjectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    digest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    objectId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigint"])()
    ])
});
const ObjectArg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeEnum"])({
    ImmOrOwned: ObjectRef,
    Shared: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        objectId: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectID"],
        initialSharedVersion: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonU64"],
        mutable: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"])()
    }),
    Receiving: ObjectRef
});
const NormalizedCallArg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeEnum"])({
    Object: ObjectArg,
    Pure: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()))
});
const TransactionInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("Input"),
        index: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unknown"])(),
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("object"))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("Input"),
        index: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unknown"])(),
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("pure")
    })
]);
const TransactionExpiration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        Epoch: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])())
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        None: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    })
]);
const StringEncodedBigint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigint"])()
]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["check"])((val)=>{
    if (![
        "string",
        "number",
        "bigint"
    ].includes(typeof val)) return false;
    try {
        BigInt(val);
        return true;
    } catch  {
        return false;
    }
}));
const TypeTag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        bool: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        u8: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        u64: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        u128: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        signer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        vector: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>TypeTag)
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        struct: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>StructTag)
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        u16: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        u32: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        u256: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    })
]);
const StructTag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    module: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    typeParams: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(TypeTag)
});
const GasConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    budget: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])(StringEncodedBigint),
    price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])(StringEncodedBigint),
    payment: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(ObjectRef)),
    owner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])())
});
const TransactionArgumentTypes = [
    TransactionInput,
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("GasCoin")
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("Result"),
        index: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])())
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("NestedResult"),
        index: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
        resultIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])())
    })
];
const TransactionArgument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
    ...TransactionArgumentTypes
]);
const MoveCallTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("MoveCall"),
    target: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["check"])((target)=>target.split("::").length === 3)),
    typeArguments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
    arguments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(TransactionArgument)
});
const TransferObjectsTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("TransferObjects"),
    objects: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(TransactionArgument),
    address: TransactionArgument
});
const SplitCoinsTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("SplitCoins"),
    coin: TransactionArgument,
    amounts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(TransactionArgument)
});
const MergeCoinsTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("MergeCoins"),
    destination: TransactionArgument,
    sources: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(TransactionArgument)
});
const MakeMoveVecTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("MakeMoveVec"),
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
            Some: TypeTag
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
            None: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
        })
    ]),
    objects: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(TransactionArgument)
});
const PublishTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("Publish"),
    modules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()))),
    dependencies: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])())
});
const UpgradeTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("Upgrade"),
    modules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()))),
    dependencies: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
    packageId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    ticket: TransactionArgument
});
const TransactionTypes = [
    MoveCallTransaction,
    TransferObjectsTransaction,
    SplitCoinsTransaction,
    MergeCoinsTransaction,
    PublishTransaction,
    UpgradeTransaction,
    MakeMoveVecTransaction
];
const TransactionType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
    ...TransactionTypes
]);
const SerializedTransactionDataV1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(1),
    sender: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
    expiration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"])(TransactionExpiration),
    gasConfig: GasConfig,
    inputs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(TransactionInput),
    transactions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(TransactionType)
});
function serializeV1TransactionData(transactionData) {
    const inputs = transactionData.inputs.map((input, index)=>{
        if (input.Object) {
            return {
                kind: "Input",
                index,
                value: {
                    Object: input.Object.ImmOrOwnedObject ? {
                        ImmOrOwned: input.Object.ImmOrOwnedObject
                    } : input.Object.Receiving ? {
                        Receiving: {
                            digest: input.Object.Receiving.digest,
                            version: input.Object.Receiving.version,
                            objectId: input.Object.Receiving.objectId
                        }
                    } : {
                        Shared: {
                            mutable: input.Object.SharedObject.mutable,
                            initialSharedVersion: input.Object.SharedObject.initialSharedVersion,
                            objectId: input.Object.SharedObject.objectId
                        }
                    }
                },
                type: "object"
            };
        }
        if (input.Pure) {
            return {
                kind: "Input",
                index,
                value: {
                    Pure: Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBase64"])(input.Pure.bytes))
                },
                type: "pure"
            };
        }
        if (input.UnresolvedPure) {
            return {
                kind: "Input",
                type: "pure",
                index,
                value: input.UnresolvedPure.value
            };
        }
        if (input.UnresolvedObject) {
            return {
                kind: "Input",
                type: "object",
                index,
                value: input.UnresolvedObject.objectId
            };
        }
        throw new Error("Invalid input");
    });
    return {
        version: 1,
        sender: transactionData.sender ?? void 0,
        expiration: transactionData.expiration?.$kind === "Epoch" ? {
            Epoch: Number(transactionData.expiration.Epoch)
        } : transactionData.expiration ? {
            None: true
        } : null,
        gasConfig: {
            owner: transactionData.gasData.owner ?? void 0,
            budget: transactionData.gasData.budget ?? void 0,
            price: transactionData.gasData.price ?? void 0,
            payment: transactionData.gasData.payment ?? void 0
        },
        inputs,
        transactions: transactionData.commands.map((command)=>{
            if (command.MakeMoveVec) {
                return {
                    kind: "MakeMoveVec",
                    type: command.MakeMoveVec.type === null ? {
                        None: true
                    } : {
                        Some: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$type$2d$tag$2d$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeTagSerializer"].parseFromStr(command.MakeMoveVec.type)
                    },
                    objects: command.MakeMoveVec.elements.map((arg)=>convertTransactionArgument(arg, inputs))
                };
            }
            if (command.MergeCoins) {
                return {
                    kind: "MergeCoins",
                    destination: convertTransactionArgument(command.MergeCoins.destination, inputs),
                    sources: command.MergeCoins.sources.map((arg)=>convertTransactionArgument(arg, inputs))
                };
            }
            if (command.MoveCall) {
                return {
                    kind: "MoveCall",
                    target: `${command.MoveCall.package}::${command.MoveCall.module}::${command.MoveCall.function}`,
                    typeArguments: command.MoveCall.typeArguments,
                    arguments: command.MoveCall.arguments.map((arg)=>convertTransactionArgument(arg, inputs))
                };
            }
            if (command.Publish) {
                return {
                    kind: "Publish",
                    modules: command.Publish.modules.map((mod)=>Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBase64"])(mod))),
                    dependencies: command.Publish.dependencies
                };
            }
            if (command.SplitCoins) {
                return {
                    kind: "SplitCoins",
                    coin: convertTransactionArgument(command.SplitCoins.coin, inputs),
                    amounts: command.SplitCoins.amounts.map((arg)=>convertTransactionArgument(arg, inputs))
                };
            }
            if (command.TransferObjects) {
                return {
                    kind: "TransferObjects",
                    objects: command.TransferObjects.objects.map((arg)=>convertTransactionArgument(arg, inputs)),
                    address: convertTransactionArgument(command.TransferObjects.address, inputs)
                };
            }
            if (command.Upgrade) {
                return {
                    kind: "Upgrade",
                    modules: command.Upgrade.modules.map((mod)=>Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBase64"])(mod))),
                    dependencies: command.Upgrade.dependencies,
                    packageId: command.Upgrade.package,
                    ticket: convertTransactionArgument(command.Upgrade.ticket, inputs)
                };
            }
            throw new Error(`Unknown transaction ${Object.keys(command)}`);
        })
    };
}
function convertTransactionArgument(arg, inputs) {
    if (arg.$kind === "GasCoin") {
        return {
            kind: "GasCoin"
        };
    }
    if (arg.$kind === "Result") {
        return {
            kind: "Result",
            index: arg.Result
        };
    }
    if (arg.$kind === "NestedResult") {
        return {
            kind: "NestedResult",
            index: arg.NestedResult[0],
            resultIndex: arg.NestedResult[1]
        };
    }
    if (arg.$kind === "Input") {
        return inputs[arg.Input];
    }
    throw new Error(`Invalid argument ${Object.keys(arg)}`);
}
function transactionDataFromV1(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionData"], {
        version: 2,
        sender: data.sender ?? null,
        expiration: data.expiration ? "Epoch" in data.expiration ? {
            Epoch: data.expiration.Epoch
        } : {
            None: true
        } : null,
        gasData: {
            owner: data.gasConfig.owner ?? null,
            budget: data.gasConfig.budget?.toString() ?? null,
            price: data.gasConfig.price?.toString() ?? null,
            payment: data.gasConfig.payment?.map((ref)=>({
                    digest: ref.digest,
                    objectId: ref.objectId,
                    version: ref.version.toString()
                })) ?? null
        },
        inputs: data.inputs.map((input)=>{
            if (input.kind === "Input") {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["is"])(NormalizedCallArg, input.value)) {
                    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(NormalizedCallArg, input.value);
                    if (value.Object) {
                        if (value.Object.ImmOrOwned) {
                            return {
                                Object: {
                                    ImmOrOwnedObject: {
                                        objectId: value.Object.ImmOrOwned.objectId,
                                        version: String(value.Object.ImmOrOwned.version),
                                        digest: value.Object.ImmOrOwned.digest
                                    }
                                }
                            };
                        }
                        if (value.Object.Shared) {
                            return {
                                Object: {
                                    SharedObject: {
                                        mutable: value.Object.Shared.mutable ?? null,
                                        initialSharedVersion: value.Object.Shared.initialSharedVersion,
                                        objectId: value.Object.Shared.objectId
                                    }
                                }
                            };
                        }
                        if (value.Object.Receiving) {
                            return {
                                Object: {
                                    Receiving: {
                                        digest: value.Object.Receiving.digest,
                                        version: String(value.Object.Receiving.version),
                                        objectId: value.Object.Receiving.objectId
                                    }
                                }
                            };
                        }
                        throw new Error("Invalid object input");
                    }
                    return {
                        Pure: {
                            bytes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase64"])(new Uint8Array(value.Pure))
                        }
                    };
                }
                if (input.type === "object") {
                    return {
                        UnresolvedObject: {
                            objectId: input.value
                        }
                    };
                }
                return {
                    UnresolvedPure: {
                        value: input.value
                    }
                };
            }
            throw new Error("Invalid input");
        }),
        commands: data.transactions.map((transaction)=>{
            switch(transaction.kind){
                case "MakeMoveVec":
                    return {
                        MakeMoveVec: {
                            type: "Some" in transaction.type ? __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$type$2d$tag$2d$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeTagSerializer"].tagToString(transaction.type.Some) : null,
                            elements: transaction.objects.map((arg)=>parseV1TransactionArgument(arg))
                        }
                    };
                case "MergeCoins":
                    {
                        return {
                            MergeCoins: {
                                destination: parseV1TransactionArgument(transaction.destination),
                                sources: transaction.sources.map((arg)=>parseV1TransactionArgument(arg))
                            }
                        };
                    }
                case "MoveCall":
                    {
                        const [pkg, mod, fn] = transaction.target.split("::");
                        return {
                            MoveCall: {
                                package: pkg,
                                module: mod,
                                function: fn,
                                typeArguments: transaction.typeArguments,
                                arguments: transaction.arguments.map((arg)=>parseV1TransactionArgument(arg))
                            }
                        };
                    }
                case "Publish":
                    {
                        return {
                            Publish: {
                                modules: transaction.modules.map((mod)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase64"])(Uint8Array.from(mod))),
                                dependencies: transaction.dependencies
                            }
                        };
                    }
                case "SplitCoins":
                    {
                        return {
                            SplitCoins: {
                                coin: parseV1TransactionArgument(transaction.coin),
                                amounts: transaction.amounts.map((arg)=>parseV1TransactionArgument(arg))
                            }
                        };
                    }
                case "TransferObjects":
                    {
                        return {
                            TransferObjects: {
                                objects: transaction.objects.map((arg)=>parseV1TransactionArgument(arg)),
                                address: parseV1TransactionArgument(transaction.address)
                            }
                        };
                    }
                case "Upgrade":
                    {
                        return {
                            Upgrade: {
                                modules: transaction.modules.map((mod)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase64"])(Uint8Array.from(mod))),
                                dependencies: transaction.dependencies,
                                package: transaction.packageId,
                                ticket: parseV1TransactionArgument(transaction.ticket)
                            }
                        };
                    }
            }
            throw new Error(`Unknown transaction ${Object.keys(transaction)}`);
        })
    });
}
function parseV1TransactionArgument(arg) {
    switch(arg.kind){
        case "GasCoin":
            {
                return {
                    GasCoin: true
                };
            }
        case "Result":
            return {
                Result: arg.index
            };
        case "NestedResult":
            {
                return {
                    NestedResult: [
                        arg.index,
                        arg.resultIndex
                    ]
                };
            }
        case "Input":
            {
                return {
                    Input: arg.index
                };
            }
    }
}
;
 //# sourceMappingURL=v1.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/data/v2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SerializedTransactionDataV2",
    ()=>SerializedTransactionDataV2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/valibot/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/data/internal.js [app-client] (ecmascript)");
;
;
function enumUnion(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])(Object.entries(options).map(([key, value])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
            [key]: value
        })));
}
const Argument = enumUnion({
    GasCoin: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true),
    Input: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
    Result: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
    NestedResult: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tuple"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])())
    ])
});
const GasData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    budget: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonU64"]),
    price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonU64"]),
    owner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IotaAddress"]),
    payment: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectRef"]))
});
const ProgrammableMoveCall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    package: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectID"],
    module: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    function: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    // snake case in rust
    typeArguments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
    arguments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument)
});
const $Intent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    inputs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
        Argument,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument)
    ])),
    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unknown"])())
});
const Command = enumUnion({
    MoveCall: ProgrammableMoveCall,
    TransferObjects: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        objects: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument),
        address: Argument
    }),
    SplitCoins: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        coin: Argument,
        amounts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument)
    }),
    MergeCoins: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        destination: Argument,
        sources: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument)
    }),
    Publish: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        modules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BCSBytes"]),
        dependencies: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectID"])
    }),
    MakeMoveVec: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
        elements: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument)
    }),
    Upgrade: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        modules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BCSBytes"]),
        dependencies: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectID"]),
        package: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectID"],
        ticket: Argument
    }),
    $Intent
});
const ObjectArg = enumUnion({
    ImmOrOwnedObject: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectRef"],
    SharedObject: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        objectId: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectID"],
        // snake case in rust
        initialSharedVersion: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonU64"],
        mutable: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"])()
    }),
    Receiving: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectRef"]
});
const CallArg = enumUnion({
    Object: ObjectArg,
    Pure: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        bytes: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BCSBytes"]
    }),
    UnresolvedPure: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unknown"])()
    }),
    UnresolvedObject: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        objectId: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectID"],
        version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonU64"])),
        digest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])())),
        initialSharedVersion: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonU64"]))
    })
});
const TransactionExpiration = enumUnion({
    None: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true),
    Epoch: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonU64"]
});
const SerializedTransactionDataV2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(2),
    sender: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IotaAddress"]),
    expiration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"])(TransactionExpiration),
    gasData: GasData,
    inputs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(CallArg),
    commands: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Command)
});
;
 //# sourceMappingURL=v2.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/Inputs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Inputs",
    ()=>Inputs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/bcs/dist/esm/b64.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/utils/iota-types.js [app-client] (ecmascript)");
;
;
function Pure(data) {
    return {
        $kind: "Pure",
        Pure: {
            bytes: data instanceof Uint8Array ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase64"])(data) : data.toBase64()
        }
    };
}
const Inputs = {
    Pure,
    ObjectRef ({ objectId, digest, version }) {
        return {
            $kind: "Object",
            Object: {
                $kind: "ImmOrOwnedObject",
                ImmOrOwnedObject: {
                    digest,
                    version,
                    objectId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(objectId)
                }
            }
        };
    },
    SharedObjectRef ({ objectId, mutable, initialSharedVersion }) {
        return {
            $kind: "Object",
            Object: {
                $kind: "SharedObject",
                SharedObject: {
                    mutable,
                    initialSharedVersion,
                    objectId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(objectId)
                }
            }
        };
    },
    ReceivingRef ({ objectId, digest, version }) {
        return {
            $kind: "Object",
            Object: {
                $kind: "Receiving",
                Receiving: {
                    digest,
                    version,
                    objectId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(objectId)
                }
            }
        };
    }
};
;
 //# sourceMappingURL=Inputs.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/utils/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IOTA_CLOCK_OBJECT_ID",
    ()=>IOTA_CLOCK_OBJECT_ID,
    "IOTA_DECIMALS",
    ()=>IOTA_DECIMALS,
    "IOTA_FRAMEWORK_ADDRESS",
    ()=>IOTA_FRAMEWORK_ADDRESS,
    "IOTA_SYSTEM_ADDRESS",
    ()=>IOTA_SYSTEM_ADDRESS,
    "IOTA_SYSTEM_MODULE_NAME",
    ()=>IOTA_SYSTEM_MODULE_NAME,
    "IOTA_SYSTEM_STATE_OBJECT_ID",
    ()=>IOTA_SYSTEM_STATE_OBJECT_ID,
    "IOTA_TYPE_ARG",
    ()=>IOTA_TYPE_ARG,
    "MOVE_STDLIB_ADDRESS",
    ()=>MOVE_STDLIB_ADDRESS,
    "NANOS_PER_IOTA",
    ()=>NANOS_PER_IOTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/utils/iota-types.js [app-client] (ecmascript)");
;
const IOTA_DECIMALS = 9;
const NANOS_PER_IOTA = BigInt(1e9);
const MOVE_STDLIB_ADDRESS = "0x1";
const IOTA_FRAMEWORK_ADDRESS = "0x2";
const IOTA_SYSTEM_ADDRESS = "0x3";
const IOTA_CLOCK_OBJECT_ID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaObjectId"])("0x6");
const IOTA_SYSTEM_MODULE_NAME = "iota_system";
const IOTA_TYPE_ARG = `${IOTA_FRAMEWORK_ADDRESS}::iota::IOTA`;
const IOTA_SYSTEM_STATE_OBJECT_ID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaObjectId"])("0x5");
;
 //# sourceMappingURL=constants.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/serializer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPureBcsSchema",
    ()=>getPureBcsSchema,
    "isTxContext",
    ()=>isTxContext,
    "normalizedTypeToMoveTypeSignature",
    ()=>normalizedTypeToMoveTypeSignature,
    "pureBcsSchemaFromOpenMoveTypeSignatureBody",
    ()=>pureBcsSchemaFromOpenMoveTypeSignatureBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/bcs/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/utils/iota-types.js [app-client] (ecmascript)");
;
;
;
const OBJECT_MODULE_NAME = "object";
const ID_STRUCT_NAME = "ID";
const STD_ASCII_MODULE_NAME = "ascii";
const STD_ASCII_STRUCT_NAME = "String";
const STD_UTF8_MODULE_NAME = "string";
const STD_UTF8_STRUCT_NAME = "String";
const STD_OPTION_MODULE_NAME = "option";
const STD_OPTION_STRUCT_NAME = "Option";
function isTxContext(param) {
    const struct = typeof param.body === "object" && "datatype" in param.body ? param.body.datatype : null;
    return !!struct && (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(struct.package) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])("0x2") && struct.module === "tx_context" && struct.type === "TxContext";
}
function getPureBcsSchema(typeSignature) {
    if (typeof typeSignature === "string") {
        switch(typeSignature){
            case "address":
                return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].Address;
            case "bool":
                return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].Bool;
            case "u8":
                return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U8;
            case "u16":
                return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U16;
            case "u32":
                return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U32;
            case "u64":
                return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U64;
            case "u128":
                return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U128;
            case "u256":
                return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U256;
            default:
                throw new Error(`Unknown type signature ${typeSignature}`);
        }
    }
    if ("vector" in typeSignature) {
        if (typeSignature.vector === "u8") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].vector(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U8).transform({
                input: (val)=>typeof val === "string" ? new TextEncoder().encode(val) : val,
                output: (val)=>val
            });
        }
        const type = getPureBcsSchema(typeSignature.vector);
        return type ? __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].vector(type) : null;
    }
    if ("datatype" in typeSignature) {
        const pkg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(typeSignature.datatype.package);
        if (pkg === (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOVE_STDLIB_ADDRESS"])) {
            if (typeSignature.datatype.module === STD_ASCII_MODULE_NAME && typeSignature.datatype.type === STD_ASCII_STRUCT_NAME) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].String;
            }
            if (typeSignature.datatype.module === STD_UTF8_MODULE_NAME && typeSignature.datatype.type === STD_UTF8_STRUCT_NAME) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].String;
            }
            if (typeSignature.datatype.module === STD_OPTION_MODULE_NAME && typeSignature.datatype.type === STD_OPTION_STRUCT_NAME) {
                const type = getPureBcsSchema(typeSignature.datatype.typeParameters[0]);
                return type ? __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].vector(type) : null;
            }
        }
        if (pkg === (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IOTA_FRAMEWORK_ADDRESS"]) && typeSignature.datatype.module === OBJECT_MODULE_NAME && typeSignature.datatype.type === ID_STRUCT_NAME) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].Address;
        }
    }
    return null;
}
function normalizedTypeToMoveTypeSignature(type) {
    if (typeof type === "object" && "Reference" in type) {
        return {
            ref: "&",
            body: normalizedTypeToMoveTypeSignatureBody(type.Reference)
        };
    }
    if (typeof type === "object" && "MutableReference" in type) {
        return {
            ref: "&mut",
            body: normalizedTypeToMoveTypeSignatureBody(type.MutableReference)
        };
    }
    return {
        ref: null,
        body: normalizedTypeToMoveTypeSignatureBody(type)
    };
}
function normalizedTypeToMoveTypeSignatureBody(type) {
    if (typeof type === "string") {
        switch(type){
            case "Address":
                return "address";
            case "Bool":
                return "bool";
            case "U8":
                return "u8";
            case "U16":
                return "u16";
            case "U32":
                return "u32";
            case "U64":
                return "u64";
            case "U128":
                return "u128";
            case "U256":
                return "u256";
            default:
                throw new Error(`Unexpected type ${type}`);
        }
    }
    if ("Vector" in type) {
        return {
            vector: normalizedTypeToMoveTypeSignatureBody(type.Vector)
        };
    }
    if ("Struct" in type) {
        return {
            datatype: {
                package: type.Struct.address,
                module: type.Struct.module,
                type: type.Struct.name,
                typeParameters: type.Struct.typeArguments.map(normalizedTypeToMoveTypeSignatureBody)
            }
        };
    }
    if ("TypeParameter" in type) {
        return {
            typeParameter: type.TypeParameter
        };
    }
    throw new Error(`Unexpected type ${JSON.stringify(type)}`);
}
function pureBcsSchemaFromOpenMoveTypeSignatureBody(typeSignature) {
    if (typeof typeSignature === "string") {
        switch(typeSignature){
            case "address":
                return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].Address;
            case "bool":
                return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].Bool;
            case "u8":
                return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U8;
            case "u16":
                return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U16;
            case "u32":
                return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U32;
            case "u64":
                return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U64;
            case "u128":
                return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U128;
            case "u256":
                return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U256;
            default:
                throw new Error(`Unknown type signature ${typeSignature}`);
        }
    }
    if ("vector" in typeSignature) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].vector(pureBcsSchemaFromOpenMoveTypeSignatureBody(typeSignature.vector));
    }
    throw new Error(`Expected pure typeSignature, but got ${JSON.stringify(typeSignature)}`);
}
;
 //# sourceMappingURL=serializer.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/json-rpc-resolver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getClient",
    ()=>getClient,
    "resolveTransactionData",
    ()=>resolveTransactionData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/valibot/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/bcs/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/utils/iota-types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/data/internal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/Inputs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/serializer.js [app-client] (ecmascript)");
;
;
;
;
;
;
const MAX_OBJECTS_PER_FETCH = 50;
const GAS_SAFE_OVERHEAD = 1000n;
const MAX_GAS = 5e10;
async function resolveTransactionData(transactionData, options, next) {
    await normalizeInputs(transactionData, options);
    await resolveObjectReferences(transactionData, options);
    if (!options.onlyTransactionKind) {
        await setGasPrice(transactionData, options);
        await setGasBudget(transactionData, options);
        await setGasPayment(transactionData, options);
    }
    await validate(transactionData);
    return await next();
}
async function setGasPrice(transactionData, options) {
    if (!transactionData.gasConfig.price) {
        transactionData.gasConfig.price = String(await getClient(options).getReferenceGasPrice());
    }
}
async function setGasBudget(transactionData, options) {
    if (transactionData.gasConfig.budget) {
        return;
    }
    const dryRunResult = await getClient(options).dryRunTransactionBlock({
        transactionBlock: transactionData.build({
            overrides: {
                gasData: {
                    budget: String(MAX_GAS),
                    payment: []
                }
            }
        })
    });
    if (dryRunResult.effects.status.status !== "success") {
        throw new Error(`Dry run failed, could not automatically determine a budget: ${dryRunResult.effects.status.error}`, {
            cause: dryRunResult
        });
    }
    const safeOverhead = GAS_SAFE_OVERHEAD * BigInt(transactionData.gasConfig.price || 1n);
    const baseComputationCostWithOverhead = BigInt(dryRunResult.effects.gasUsed.computationCost) + safeOverhead;
    const gasBudget = baseComputationCostWithOverhead + BigInt(dryRunResult.effects.gasUsed.storageCost) - BigInt(dryRunResult.effects.gasUsed.storageRebate);
    transactionData.gasConfig.budget = String(gasBudget > baseComputationCostWithOverhead ? gasBudget : baseComputationCostWithOverhead);
}
async function setGasPayment(transactionData, options) {
    if (!transactionData.gasConfig.payment) {
        const coins = await getClient(options).getCoins({
            owner: transactionData.gasConfig.owner || transactionData.sender,
            coinType: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IOTA_TYPE_ARG"]
        });
        const paymentCoins = coins.data.filter((coin)=>{
            const matchingInput = transactionData.inputs.find((input)=>{
                if (input.Object?.ImmOrOwnedObject) {
                    return coin.coinObjectId === input.Object.ImmOrOwnedObject.objectId;
                }
                return false;
            });
            return !matchingInput;
        }).map((coin)=>({
                objectId: coin.coinObjectId,
                digest: coin.digest,
                version: coin.version
            }));
        if (!paymentCoins.length) {
            throw new Error("No valid gas coins found for the transaction.");
        }
        transactionData.gasConfig.payment = paymentCoins.map((payment)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectRef"], payment));
    }
}
async function resolveObjectReferences(transactionData, options) {
    const objectsToResolve = transactionData.inputs.filter((input)=>{
        return input.UnresolvedObject && !(input.UnresolvedObject.version || input.UnresolvedObject?.initialSharedVersion);
    });
    const dedupedIds = [
        ...new Set(objectsToResolve.map((input)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaObjectId"])(input.UnresolvedObject.objectId)))
    ];
    const objectChunks = dedupedIds.length ? chunk(dedupedIds, MAX_OBJECTS_PER_FETCH) : [];
    const resolvedObjects = /* @__PURE__ */ new Map();
    const erroredObjects = /* @__PURE__ */ new Map();
    await Promise.all(objectChunks.map(async (chunk2)=>{
        const chunkObjects = await getClient(options).multiGetObjects({
            ids: chunk2,
            options: {
                showOwner: true
            }
        });
        for (const object of chunkObjects){
            const objectId = object.data?.objectId;
            if (objectId) {
                if (object.error || !object.data) {
                    erroredObjects.set(objectId, object.error);
                    return;
                }
                const owner = object.data.owner;
                const initialSharedVersion = owner && typeof owner === "object" && "Shared" in owner ? owner.Shared.initial_shared_version : null;
                resolvedObjects.set(objectId, {
                    objectId,
                    digest: object.data.digest,
                    version: object.data.version,
                    initialSharedVersion
                });
            }
        }
    }));
    if (erroredObjects.size > 0) {
        throw new Error(`The following input objects are invalid: ${Array.from(erroredObjects).join(", ")}`);
    }
    for (const [index, input] of transactionData.inputs.entries()){
        if (!input.UnresolvedObject) {
            continue;
        }
        let updated;
        const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(input.UnresolvedObject.objectId);
        const object = resolvedObjects.get(id);
        if (input.UnresolvedObject.initialSharedVersion ?? object?.initialSharedVersion) {
            updated = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inputs"].SharedObjectRef({
                objectId: id,
                initialSharedVersion: input.UnresolvedObject.initialSharedVersion || object?.initialSharedVersion,
                mutable: isUsedAsMutable(transactionData, index)
            });
        } else if (isUsedAsReceiving(transactionData, index)) {
            updated = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inputs"].ReceivingRef({
                objectId: id,
                digest: input.UnresolvedObject.digest ?? object?.digest,
                version: input.UnresolvedObject.version ?? object?.version
            });
        }
        transactionData.inputs[transactionData.inputs.indexOf(input)] = updated ?? __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inputs"].ObjectRef({
            objectId: id,
            digest: input.UnresolvedObject.digest ?? object?.digest,
            version: input.UnresolvedObject.version ?? object?.version
        });
    }
}
async function normalizeInputs(transactionData, options) {
    const { inputs, commands } = transactionData;
    const moveCallsToResolve = [];
    const moveFunctionsToResolve = /* @__PURE__ */ new Set();
    commands.forEach((command)=>{
        if (command.MoveCall) {
            if (command.MoveCall._argumentTypes) {
                return;
            }
            const inputs2 = command.MoveCall.arguments.map((arg)=>{
                if (arg.$kind === "Input") {
                    return transactionData.inputs[arg.Input];
                }
                return null;
            });
            const needsResolution = inputs2.some((input)=>input?.UnresolvedPure || input?.UnresolvedObject);
            if (needsResolution) {
                const functionName = `${command.MoveCall.package}::${command.MoveCall.module}::${command.MoveCall.function}`;
                moveFunctionsToResolve.add(functionName);
                moveCallsToResolve.push(command.MoveCall);
            }
        }
        switch(command.$kind){
            case "SplitCoins":
                command.SplitCoins.amounts.forEach((amount)=>{
                    normalizeRawArgument(amount, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U64, transactionData);
                });
                break;
            case "TransferObjects":
                normalizeRawArgument(command.TransferObjects.address, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].Address, transactionData);
                break;
        }
    });
    const moveFunctionParameters = /* @__PURE__ */ new Map();
    if (moveFunctionsToResolve.size > 0) {
        const client = getClient(options);
        await Promise.all([
            ...moveFunctionsToResolve
        ].map(async (functionName)=>{
            const [packageId, moduleId, functionId] = functionName.split("::");
            const def = await client.getNormalizedMoveFunction({
                package: packageId,
                module: moduleId,
                function: functionId
            });
            moveFunctionParameters.set(functionName, def.parameters.map((param)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizedTypeToMoveTypeSignature"])(param)));
        }));
    }
    if (moveCallsToResolve.length) {
        await Promise.all(moveCallsToResolve.map(async (moveCall)=>{
            const parameters = moveFunctionParameters.get(`${moveCall.package}::${moveCall.module}::${moveCall.function}`);
            if (!parameters) {
                return;
            }
            const hasTxContext = parameters.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTxContext"])(parameters.at(-1));
            const params = hasTxContext ? parameters.slice(0, parameters.length - 1) : parameters;
            moveCall._argumentTypes = params;
        }));
    }
    commands.forEach((command)=>{
        if (!command.MoveCall) {
            return;
        }
        const moveCall = command.MoveCall;
        const fnName = `${moveCall.package}::${moveCall.module}::${moveCall.function}`;
        const params = moveCall._argumentTypes;
        if (!params) {
            return;
        }
        if (params.length !== command.MoveCall.arguments.length) {
            throw new Error(`Incorrect number of arguments for ${fnName}`);
        }
        params.forEach((param, i)=>{
            const arg = moveCall.arguments[i];
            if (arg.$kind !== "Input") return;
            const input = inputs[arg.Input];
            if (!input.UnresolvedPure && !input.UnresolvedObject) {
                return;
            }
            const inputValue = input.UnresolvedPure?.value ?? input.UnresolvedObject?.objectId;
            const inputIndex = inputs.indexOf(input);
            const schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPureBcsSchema"])(param.body);
            if (schema) {
                arg.type = "pure";
                inputs[inputIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inputs"].Pure(schema.serialize(inputValue));
                return;
            }
            if (typeof inputValue !== "string") {
                throw new Error(`Expect the argument to be an object id string, got ${JSON.stringify(inputValue, null, 2)}`);
            }
            arg.type = "object";
            const unresolvedObject = input.UnresolvedPure ? {
                $kind: "UnresolvedObject",
                UnresolvedObject: {
                    objectId: inputValue
                }
            } : input;
            inputs[inputIndex] = unresolvedObject;
        });
    });
}
function validate(transactionData) {
    transactionData.inputs.forEach((input, index)=>{
        if (input.$kind !== "Object" && input.$kind !== "Pure") {
            throw new Error(`Input at index ${index} has not been resolved.  Expected a Pure or Object input, but found ${JSON.stringify(input)}`);
        }
    });
}
function normalizeRawArgument(arg, schema, transactionData) {
    if (arg.$kind !== "Input") {
        return;
    }
    const input = transactionData.inputs[arg.Input];
    if (input.$kind !== "UnresolvedPure") {
        return;
    }
    transactionData.inputs[arg.Input] = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inputs"].Pure(schema.serialize(input.UnresolvedPure.value));
}
function isUsedAsMutable(transactionData, index) {
    let usedAsMutable = false;
    transactionData.getInputUses(index, (arg, tx)=>{
        if (tx.MoveCall && tx.MoveCall._argumentTypes) {
            const argIndex = tx.MoveCall.arguments.indexOf(arg);
            usedAsMutable = tx.MoveCall._argumentTypes[argIndex].ref !== "&" || usedAsMutable;
        }
        if (tx.$kind === "MakeMoveVec" || tx.$kind === "MergeCoins" || tx.$kind === "SplitCoins") {
            usedAsMutable = true;
        }
    });
    return usedAsMutable;
}
function isUsedAsReceiving(transactionData, index) {
    let usedAsReceiving = false;
    transactionData.getInputUses(index, (arg, tx)=>{
        if (tx.MoveCall && tx.MoveCall._argumentTypes) {
            const argIndex = tx.MoveCall.arguments.indexOf(arg);
            usedAsReceiving = isReceivingType(tx.MoveCall._argumentTypes[argIndex]) || usedAsReceiving;
        }
    });
    return usedAsReceiving;
}
function isReceivingType(type) {
    if (typeof type.body !== "object" || !("datatype" in type.body)) {
        return false;
    }
    return type.body.datatype.package === "0x2" && type.body.datatype.module === "transfer" && type.body.datatype.type === "Receiving";
}
function getClient(options) {
    if (!options.client) {
        throw new Error(`No iota client passed to Transaction#build, but transaction data was not sufficient to build offline.`);
    }
    return options.client;
}
function chunk(arr, size) {
    return Array.from({
        length: Math.ceil(arr.length / size)
    }, (_, i)=>arr.slice(i * size, i * size + size));
}
;
 //# sourceMappingURL=json-rpc-resolver.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/object.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createObjectMethods",
    ()=>createObjectMethods
]);
function createObjectMethods(makeObject) {
    function object(value) {
        return makeObject(value);
    }
    object.system = ()=>object("0x5");
    object.clock = ()=>object("0x6");
    object.random = ()=>object("0x8");
    object.denyList = ()=>object("0x403");
    object.option = ({ type, value })=>(tx)=>tx.moveCall({
                typeArguments: [
                    type
                ],
                target: `0x1::option::${value === null ? "none" : "some"}`,
                arguments: value === null ? [] : [
                    tx.object(value)
                ]
            });
    return object;
}
;
 //# sourceMappingURL=object.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/pure.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPure",
    ()=>createPure
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$bcs$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/bcs/dist/esm/bcs-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/bcs/index.js [app-client] (ecmascript) <locals>");
;
;
function createPure(makePure) {
    function pure(typeOrSerializedValue, value) {
        if (typeof typeOrSerializedValue === "string") {
            return makePure(schemaFromName(typeOrSerializedValue).serialize(value));
        }
        if (typeOrSerializedValue instanceof Uint8Array || (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$bcs$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSerializedBcs"])(typeOrSerializedValue)) {
            return makePure(typeOrSerializedValue);
        }
        throw new Error("tx.pure must be called either a bcs type name, or a serialized bcs value");
    }
    pure.u8 = (value)=>makePure(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U8.serialize(value));
    pure.u16 = (value)=>makePure(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U16.serialize(value));
    pure.u32 = (value)=>makePure(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U32.serialize(value));
    pure.u64 = (value)=>makePure(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U64.serialize(value));
    pure.u128 = (value)=>makePure(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U128.serialize(value));
    pure.u256 = (value)=>makePure(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U256.serialize(value));
    pure.bool = (value)=>makePure(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].Bool.serialize(value));
    pure.string = (value)=>makePure(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].String.serialize(value));
    pure.address = (value)=>makePure(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].Address.serialize(value));
    pure.id = pure.address;
    pure.vector = (type, value)=>{
        return makePure(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].vector(schemaFromName(type)).serialize(value));
    };
    pure.option = (type, value)=>{
        return makePure(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].option(schemaFromName(type)).serialize(value));
    };
    return pure;
}
function schemaFromName(name) {
    switch(name){
        case "u8":
            return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].u8();
        case "u16":
            return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].u16();
        case "u32":
            return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].u32();
        case "u64":
            return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].u64();
        case "u128":
            return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].u128();
        case "u256":
            return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].u256();
        case "bool":
            return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].bool();
        case "string":
            return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].string();
        case "id":
        case "address":
            return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].Address;
    }
    const generic = name.match(/^(vector|option)<(.+)>$/);
    if (generic) {
        const [kind, inner] = generic.slice(1);
        if (kind === "vector") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].vector(schemaFromName(inner));
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].option(schemaFromName(inner));
        }
    }
    throw new Error(`Invalid Pure type name: ${name}`);
}
;
 //# sourceMappingURL=pure.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/hash.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hashTypedData",
    ()=>hashTypedData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$blake2b$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@noble/hashes/esm/blake2b.js [app-client] (ecmascript)");
;
function hashTypedData(typeTag, data) {
    const typeTagBytes = Array.from(`${typeTag}::`).map((e)=>e.charCodeAt(0));
    const dataWithTag = new Uint8Array(typeTagBytes.length + data.length);
    dataWithTag.set(typeTagBytes);
    dataWithTag.set(data, typeTagBytes.length);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$blake2b$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blake2b"])(dataWithTag, {
        dkLen: 32
    });
}
;
 //# sourceMappingURL=hash.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/TransactionData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionDataBuilder",
    ()=>TransactionDataBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b58$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/bcs/dist/esm/b58.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/valibot/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/bcs/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/utils/iota-types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/data/internal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$v1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/data/v1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/hash.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function prepareIotaAddress(address) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(address).replace("0x", "");
}
class TransactionDataBuilder {
    constructor(clone){
        this.version = 2;
        this.sender = clone?.sender ?? null;
        this.expiration = clone?.expiration ?? null;
        this.inputs = clone?.inputs ?? [];
        this.commands = clone?.commands ?? [];
        this.gasData = clone?.gasData ?? {
            budget: null,
            price: null,
            owner: null,
            payment: null
        };
    }
    static fromKindBytes(bytes) {
        const kind = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].TransactionKind.parse(bytes);
        const programmableTx = kind.ProgrammableTransaction;
        if (!programmableTx) {
            throw new Error("Unable to deserialize from bytes.");
        }
        return TransactionDataBuilder.restore({
            version: 2,
            sender: null,
            expiration: null,
            gasData: {
                budget: null,
                owner: null,
                payment: null,
                price: null
            },
            inputs: programmableTx.inputs,
            commands: programmableTx.commands
        });
    }
    static fromBytes(bytes) {
        const rawData = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].TransactionData.parse(bytes);
        const data = rawData?.V1;
        const programmableTx = data.kind.ProgrammableTransaction;
        if (!data || !programmableTx) {
            throw new Error("Unable to deserialize from bytes.");
        }
        return TransactionDataBuilder.restore({
            version: 2,
            sender: data.sender,
            expiration: data.expiration,
            gasData: data.gasData,
            inputs: programmableTx.inputs,
            commands: programmableTx.commands
        });
    }
    static restore(data) {
        if (data.version === 2) {
            return new TransactionDataBuilder((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionData"], data));
        } else {
            return new TransactionDataBuilder((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionData"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$v1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDataFromV1"])(data)));
        }
    }
    /**
   * Generate transaction digest.
   *
   * @param bytes BCS serialized transaction data
   * @returns transaction digest.
   */ static getDigestFromBytes(bytes) {
        const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashTypedData"])("TransactionData", bytes);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b58$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase58"])(hash);
    }
    // @deprecated use gasData instead
    get gasConfig() {
        return this.gasData;
    }
    // @deprecated use gasData instead
    set gasConfig(value) {
        this.gasData = value;
    }
    build({ maxSizeBytes = Infinity, overrides, onlyTransactionKind } = {}) {
        const inputs = this.inputs;
        const commands = this.commands;
        const kind = {
            ProgrammableTransaction: {
                inputs,
                commands
            }
        };
        if (onlyTransactionKind) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].TransactionKind.serialize(kind, {
                maxSize: maxSizeBytes
            }).toBytes();
        }
        const expiration = overrides?.expiration ?? this.expiration;
        const sender = overrides?.sender ?? this.sender;
        const gasData = {
            ...this.gasData,
            ...overrides?.gasConfig,
            ...overrides?.gasData
        };
        if (!sender) {
            throw new Error("Missing transaction sender");
        }
        if (!gasData.budget) {
            throw new Error("Missing gas budget");
        }
        if (!gasData.payment) {
            throw new Error("Missing gas payment");
        }
        if (!gasData.price) {
            throw new Error("Missing gas price");
        }
        const transactionData = {
            sender: prepareIotaAddress(sender),
            expiration: expiration ? expiration : {
                None: true
            },
            gasData: {
                payment: gasData.payment,
                owner: prepareIotaAddress(this.gasData.owner ?? sender),
                price: BigInt(gasData.price),
                budget: BigInt(gasData.budget)
            },
            kind: {
                ProgrammableTransaction: {
                    inputs,
                    commands
                }
            }
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].TransactionData.serialize({
            V1: transactionData
        }, {
            maxSize: maxSizeBytes
        }).toBytes();
    }
    addInput(type, arg) {
        const index = this.inputs.length;
        this.inputs.push(arg);
        return {
            Input: index,
            type,
            $kind: "Input"
        };
    }
    getInputUses(index, fn) {
        this.mapArguments((arg, command)=>{
            if (arg.$kind === "Input" && arg.Input === index) {
                fn(arg, command);
            }
            return arg;
        });
    }
    mapArguments(fn) {
        for (const command of this.commands){
            switch(command.$kind){
                case "MoveCall":
                    command.MoveCall.arguments = command.MoveCall.arguments.map((arg)=>fn(arg, command));
                    break;
                case "TransferObjects":
                    command.TransferObjects.objects = command.TransferObjects.objects.map((arg)=>fn(arg, command));
                    command.TransferObjects.address = fn(command.TransferObjects.address, command);
                    break;
                case "SplitCoins":
                    command.SplitCoins.coin = fn(command.SplitCoins.coin, command);
                    command.SplitCoins.amounts = command.SplitCoins.amounts.map((arg)=>fn(arg, command));
                    break;
                case "MergeCoins":
                    command.MergeCoins.destination = fn(command.MergeCoins.destination, command);
                    command.MergeCoins.sources = command.MergeCoins.sources.map((arg)=>fn(arg, command));
                    break;
                case "MakeMoveVec":
                    command.MakeMoveVec.elements = command.MakeMoveVec.elements.map((arg)=>fn(arg, command));
                    break;
                case "Upgrade":
                    command.Upgrade.ticket = fn(command.Upgrade.ticket, command);
                    break;
                case "$Intent":
                    const inputs = command.$Intent.inputs;
                    command.$Intent.inputs = {};
                    for (const [key, value] of Object.entries(inputs)){
                        command.$Intent.inputs[key] = Array.isArray(value) ? value.map((arg)=>fn(arg, command)) : fn(value, command);
                    }
                    break;
                case "Publish":
                    break;
                default:
                    throw new Error(`Unexpected transaction kind: ${command.$kind}`);
            }
        }
    }
    replaceCommand(index, replacement) {
        if (!Array.isArray(replacement)) {
            this.commands[index] = replacement;
            return;
        }
        const sizeDiff = replacement.length - 1;
        this.commands.splice(index, 1, ...replacement);
        if (sizeDiff !== 0) {
            this.mapArguments((arg)=>{
                switch(arg.$kind){
                    case "Result":
                        if (arg.Result > index) {
                            arg.Result += sizeDiff;
                        }
                        break;
                    case "NestedResult":
                        if (arg.NestedResult[0] > index) {
                            arg.NestedResult[0] += sizeDiff;
                        }
                        break;
                }
                return arg;
            });
        }
    }
    getDigest() {
        const bytes = this.build({
            onlyTransactionKind: false
        });
        return TransactionDataBuilder.getDigestFromBytes(bytes);
    }
    snapshot() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionData"], this);
    }
}
;
 //# sourceMappingURL=TransactionData.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractMutableReference",
    ()=>extractMutableReference,
    "extractReference",
    ()=>extractReference,
    "extractStructTag",
    ()=>extractStructTag,
    "getIdFromCallArg",
    ()=>getIdFromCallArg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/utils/iota-types.js [app-client] (ecmascript)");
;
function extractMutableReference(normalizedType) {
    return typeof normalizedType === "object" && "MutableReference" in normalizedType ? normalizedType.MutableReference : void 0;
}
function extractReference(normalizedType) {
    return typeof normalizedType === "object" && "Reference" in normalizedType ? normalizedType.Reference : void 0;
}
function extractStructTag(normalizedType) {
    if (typeof normalizedType === "object" && "Struct" in normalizedType) {
        return normalizedType;
    }
    const ref = extractReference(normalizedType);
    const mutRef = extractMutableReference(normalizedType);
    if (typeof ref === "object" && "Struct" in ref) {
        return ref;
    }
    if (typeof mutRef === "object" && "Struct" in mutRef) {
        return mutRef;
    }
    return void 0;
}
function getIdFromCallArg(arg) {
    if (typeof arg === "string") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(arg);
    }
    if (arg.Object) {
        if (arg.Object.ImmOrOwnedObject) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(arg.Object.ImmOrOwnedObject.objectId);
        }
        if (arg.Object.Receiving) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(arg.Object.Receiving.objectId);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(arg.Object.SharedObject.objectId);
    }
    if (arg.UnresolvedObject) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(arg.UnresolvedObject.objectId);
    }
    return void 0;
}
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/Transaction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transaction",
    ()=>Transaction,
    "isTransaction",
    ()=>isTransaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/bcs/dist/esm/b64.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$bcs$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/bcs/dist/esm/bcs-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/valibot/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/utils/iota-types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/Commands.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/data/internal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$v1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/data/v1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$v2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/data/v2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/Inputs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$json$2d$rpc$2d$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/json-rpc-resolver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$pure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/pure.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$TransactionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/TransactionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@iota/iota-sdk/dist/esm/transactions/utils.js [app-client] (ecmascript)");
var __typeError = (msg)=>{
    throw TypeError(msg);
};
var __accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter)=>(__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method)=>(__accessCheck(obj, member, "access private method"), method);
var _serializationPlugins, _buildPlugins, _intentResolvers, _data, _Transaction_instances, normalizeTransactionArgument_fn, resolveArgument_fn, prepareBuild_fn, runPlugins_fn;
;
;
;
;
;
;
;
;
;
;
;
;
;
function createTransactionResult(index) {
    const baseResult = {
        $kind: "Result",
        Result: index
    };
    const nestedResults = [];
    const nestedResultFor = (resultIndex)=>nestedResults[resultIndex] ?? (nestedResults[resultIndex] = {
            $kind: "NestedResult",
            NestedResult: [
                index,
                resultIndex
            ]
        });
    return new Proxy(baseResult, {
        set () {
            throw new Error("The transaction result is a proxy, and does not support setting properties directly");
        },
        // TODO: Instead of making this return a concrete argument, we should ideally
        // make it reference-based (so that this gets resolved at build-time), which
        // allows re-ordering transactions.
        get (target, property) {
            if (property in target) {
                return Reflect.get(target, property);
            }
            if (property === Symbol.iterator) {
                return function*() {
                    let i = 0;
                    while(true){
                        yield nestedResultFor(i);
                        i++;
                    }
                };
            }
            if (typeof property === "symbol") return;
            const resultIndex = parseInt(property, 10);
            if (Number.isNaN(resultIndex) || resultIndex < 0) return;
            return nestedResultFor(resultIndex);
        }
    });
}
const TRANSACTION_BRAND = Symbol.for("@iota/transaction");
function isTransaction(obj) {
    return !!obj && typeof obj === "object" && obj[TRANSACTION_BRAND] === true;
}
const modulePluginRegistry = {
    buildPlugins: /* @__PURE__ */ new Map(),
    serializationPlugins: /* @__PURE__ */ new Map()
};
const TRANSACTION_REGISTRY_KEY = Symbol.for("@iota/transaction/registry");
function getGlobalPluginRegistry() {
    try {
        const target = globalThis;
        if (!target[TRANSACTION_REGISTRY_KEY]) {
            target[TRANSACTION_REGISTRY_KEY] = modulePluginRegistry;
        }
        return target[TRANSACTION_REGISTRY_KEY];
    } catch (e) {
        return modulePluginRegistry;
    }
}
const _Transaction = class _Transaction {
    constructor(){
        __privateAdd(this, _Transaction_instances);
        __privateAdd(this, _serializationPlugins);
        __privateAdd(this, _buildPlugins);
        __privateAdd(this, _intentResolvers, /* @__PURE__ */ new Map());
        __privateAdd(this, _data);
        /**
     * Add a new object input to the transaction.
     */ this.object = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createObjectMethods"])((value)=>{
            if (typeof value === "function") {
                return this.object(value(this));
            }
            if (typeof value === "object" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["is"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], value)) {
                return value;
            }
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIdFromCallArg"])(value);
            const inserted = __privateGet(this, _data).inputs.find((i)=>id === (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIdFromCallArg"])(i));
            if (inserted?.Object?.SharedObject && typeof value === "object" && value.Object?.SharedObject) {
                inserted.Object.SharedObject.mutable = inserted.Object.SharedObject.mutable || value.Object.SharedObject.mutable;
            }
            return inserted ? {
                $kind: "Input",
                Input: __privateGet(this, _data).inputs.indexOf(inserted),
                type: "object"
            } : __privateGet(this, _data).addInput("object", typeof value === "string" ? {
                $kind: "UnresolvedObject",
                UnresolvedObject: {
                    objectId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(value)
                }
            } : value);
        });
        const globalPlugins = getGlobalPluginRegistry();
        __privateSet(this, _data, new __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$TransactionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionDataBuilder"]());
        __privateSet(this, _buildPlugins, [
            ...globalPlugins.buildPlugins.values()
        ]);
        __privateSet(this, _serializationPlugins, [
            ...globalPlugins.serializationPlugins.values()
        ]);
    }
    /**
   * Converts from a serialize transaction kind (built with `build({ onlyTransactionKind: true })`) to a `Transaction` class.
   * Supports either a byte array, or base64-encoded bytes.
   */ static fromKind(serialized) {
        const tx = new _Transaction();
        __privateSet(tx, _data, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$TransactionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionDataBuilder"].fromKindBytes(typeof serialized === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBase64"])(serialized) : serialized));
        return tx;
    }
    /**
   * Converts from a serialized transaction format to a `Transaction` class.
   * There are two supported serialized formats:
   * - A string returned from `Transaction#serialize`. The serialized format must be compatible, or it will throw an error.
   * - A byte array (or base64-encoded bytes) containing BCS transaction data.
   */ static from(transaction) {
        const newTransaction = new _Transaction();
        if (isTransaction(transaction)) {
            __privateSet(newTransaction, _data, new __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$TransactionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionDataBuilder"](transaction.getData()));
        } else if (typeof transaction !== "string" || !transaction.startsWith("{")) {
            __privateSet(newTransaction, _data, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$TransactionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionDataBuilder"].fromBytes(typeof transaction === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBase64"])(transaction) : transaction));
        } else {
            __privateSet(newTransaction, _data, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$TransactionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionDataBuilder"].restore(JSON.parse(transaction)));
        }
        return newTransaction;
    }
    static registerGlobalSerializationPlugin(stepOrStep, step) {
        getGlobalPluginRegistry().serializationPlugins.set(stepOrStep, step ?? stepOrStep);
    }
    static unregisterGlobalSerializationPlugin(name) {
        getGlobalPluginRegistry().serializationPlugins.delete(name);
    }
    static registerGlobalBuildPlugin(stepOrStep, step) {
        getGlobalPluginRegistry().buildPlugins.set(stepOrStep, step ?? stepOrStep);
    }
    static unregisterGlobalBuildPlugin(name) {
        getGlobalPluginRegistry().buildPlugins.delete(name);
    }
    addSerializationPlugin(step) {
        __privateGet(this, _serializationPlugins).push(step);
    }
    addBuildPlugin(step) {
        __privateGet(this, _buildPlugins).push(step);
    }
    addIntentResolver(intent, resolver) {
        if (__privateGet(this, _intentResolvers).has(intent) && __privateGet(this, _intentResolvers).get(intent) !== resolver) {
            throw new Error(`Intent resolver for ${intent} already exists`);
        }
        __privateGet(this, _intentResolvers).set(intent, resolver);
    }
    setSender(sender) {
        __privateGet(this, _data).sender = sender;
    }
    /**
   * Sets the sender only if it has not already been set.
   * This is useful for sponsored transaction flows where the sender may not be the same as the signer address.
   */ setSenderIfNotSet(sender) {
        if (!__privateGet(this, _data).sender) {
            __privateGet(this, _data).sender = sender;
        }
    }
    setExpiration(expiration) {
        __privateGet(this, _data).expiration = expiration ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionExpiration"], expiration) : null;
    }
    setGasPrice(price) {
        __privateGet(this, _data).gasConfig.price = String(price);
    }
    setGasBudget(budget) {
        __privateGet(this, _data).gasConfig.budget = String(budget);
    }
    setGasBudgetIfNotSet(budget) {
        if (__privateGet(this, _data).gasData.budget == null) {
            __privateGet(this, _data).gasConfig.budget = String(budget);
        }
    }
    setGasOwner(owner) {
        __privateGet(this, _data).gasConfig.owner = owner;
    }
    setGasPayment(payments) {
        __privateGet(this, _data).gasConfig.payment = payments.map((payment)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectRef"], payment));
    }
    /** @deprecated Use `getData()` instead. */ get blockData() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$v1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeV1TransactionData"])(__privateGet(this, _data).snapshot());
    }
    /** Get a snapshot of the transaction data, in JSON form: */ getData() {
        return __privateGet(this, _data).snapshot();
    }
    // Used to brand transaction classes so that they can be identified, even between multiple copies
    // of the builder.
    get [TRANSACTION_BRAND]() {
        return true;
    }
    // Temporary workaround for the wallet interface accidentally serializing transactions via postMessage
    get pure() {
        Object.defineProperty(this, "pure", {
            enumerable: false,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$pure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPure"])((value)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$bcs$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSerializedBcs"])(value)) {
                    return __privateGet(this, _data).addInput("pure", {
                        $kind: "Pure",
                        Pure: {
                            bytes: value.toBase64()
                        }
                    });
                }
                return __privateGet(this, _data).addInput("pure", (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["is"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalizedCallArg"], value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalizedCallArg"], value) : value instanceof Uint8Array ? __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inputs"].Pure(value) : {
                    $kind: "UnresolvedPure",
                    UnresolvedPure: {
                        value
                    }
                });
            })
        });
        return this.pure;
    }
    /** Returns an argument for the gas coin, to be used in a transaction. */ get gas() {
        return {
            $kind: "GasCoin",
            GasCoin: true
        };
    }
    /**
   * Add a new object input to the transaction using the fully-resolved object reference.
   * If you only have an object ID, use `builder.object(id)` instead.
   */ objectRef(...args) {
        return this.object(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inputs"].ObjectRef(...args));
    }
    /**
   * Add a new receiving input to the transaction using the fully-resolved object reference.
   * If you only have an object ID, use `builder.object(id)` instead.
   */ receivingRef(...args) {
        return this.object(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inputs"].ReceivingRef(...args));
    }
    /**
   * Add a new shared object input to the transaction using the fully-resolved shared object reference.
   * If you only have an object ID, use `builder.object(id)` instead.
   */ sharedObjectRef(...args) {
        return this.object(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inputs"].SharedObjectRef(...args));
    }
    /** Add a transaction to the transaction */ add(command) {
        if (typeof command === "function") {
            return command(this);
        }
        const index = __privateGet(this, _data).commands.push(command);
        return createTransactionResult(index - 1);
    }
    // Method shorthands:
    splitCoins(coin, amounts) {
        return this.add(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Commands"].SplitCoins(typeof coin === "string" ? this.object(coin) : __privateMethod(this, _Transaction_instances, resolveArgument_fn).call(this, coin), amounts.map((amount)=>typeof amount === "number" || typeof amount === "bigint" || typeof amount === "string" ? this.pure.u64(amount) : __privateMethod(this, _Transaction_instances, normalizeTransactionArgument_fn).call(this, amount))));
    }
    mergeCoins(destination, sources) {
        return this.add(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Commands"].MergeCoins(this.object(destination), sources.map((src)=>this.object(src))));
    }
    publish({ modules, dependencies }) {
        return this.add(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Commands"].Publish({
            modules,
            dependencies
        }));
    }
    upgrade({ modules, dependencies, package: packageId, ticket }) {
        return this.add(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Commands"].Upgrade({
            modules,
            dependencies,
            package: packageId,
            ticket: this.object(ticket)
        }));
    }
    moveCall({ // eslint-disable-next-line @typescript-eslint/no-explicit-any
    arguments: args, ...input }) {
        return this.add(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Commands"].MoveCall({
            ...input,
            arguments: args?.map((arg)=>__privateMethod(this, _Transaction_instances, normalizeTransactionArgument_fn).call(this, arg))
        }));
    }
    transferObjects(objects, address) {
        return this.add(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Commands"].TransferObjects(objects.map((obj)=>this.object(obj)), typeof address === "string" ? this.pure.address(address) : __privateMethod(this, _Transaction_instances, normalizeTransactionArgument_fn).call(this, address)));
    }
    makeMoveVec({ type, elements }) {
        return this.add(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Commands"].MakeMoveVec({
            type,
            elements: elements.map((obj)=>this.object(obj))
        }));
    }
    /**
   * @deprecated Use toJSON instead.
   * For synchronous serialization, you can use `getData()`
   * */ serialize() {
        return JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$v1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeV1TransactionData"])(__privateGet(this, _data).snapshot()));
    }
    async toJSON(options = {}) {
        await this.prepareForSerialization(options);
        return JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$v2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializedTransactionDataV2"], __privateGet(this, _data).snapshot()), (_key, value)=>typeof value === "bigint" ? value.toString() : value, 2);
    }
    /** Build the transaction to BCS bytes, and sign it with the provided keypair. */ async sign(options) {
        const { signer, ...buildOptions } = options;
        const bytes = await this.build(buildOptions);
        return signer.signTransaction(bytes);
    }
    /** Build the transaction to BCS bytes. */ async build(options = {}) {
        await this.prepareForSerialization(options);
        await __privateMethod(this, _Transaction_instances, prepareBuild_fn).call(this, options);
        return __privateGet(this, _data).build({
            maxSizeBytes: options.maxSizeBytes,
            onlyTransactionKind: options.onlyTransactionKind
        });
    }
    /** Derive transaction digest */ async getDigest(options = {}) {
        await __privateMethod(this, _Transaction_instances, prepareBuild_fn).call(this, options);
        return __privateGet(this, _data).getDigest();
    }
    async prepareForSerialization(options) {
        const intents = /* @__PURE__ */ new Set();
        for (const command of __privateGet(this, _data).commands){
            if (command.$Intent) {
                intents.add(command.$Intent.name);
            }
        }
        const steps = [
            ...__privateGet(this, _serializationPlugins)
        ];
        for (const intent of intents){
            if (options.supportedIntents?.includes(intent)) {
                continue;
            }
            if (!__privateGet(this, _intentResolvers).has(intent)) {
                throw new Error(`Missing intent resolver for ${intent}`);
            }
            steps.push(__privateGet(this, _intentResolvers).get(intent));
        }
        await __privateMethod(this, _Transaction_instances, runPlugins_fn).call(this, steps, options);
    }
};
_serializationPlugins = new WeakMap();
_buildPlugins = new WeakMap();
_intentResolvers = new WeakMap();
_data = new WeakMap();
_Transaction_instances = new WeakSet();
normalizeTransactionArgument_fn = function(arg) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$bcs$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSerializedBcs"])(arg)) {
        return this.pure(arg);
    }
    return __privateMethod(this, _Transaction_instances, resolveArgument_fn).call(this, arg);
};
resolveArgument_fn = function(arg) {
    if (typeof arg === "function") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], arg(this));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], arg);
};
prepareBuild_fn = async function(options) {
    if (!options.onlyTransactionKind && !__privateGet(this, _data).sender) {
        throw new Error("Missing transaction sender");
    }
    await __privateMethod(this, _Transaction_instances, runPlugins_fn).call(this, [
        ...__privateGet(this, _buildPlugins),
        __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$json$2d$rpc$2d$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveTransactionData"]
    ], options);
};
runPlugins_fn = async function(plugins, options) {
    const createNext = (i)=>{
        if (i >= plugins.length) {
            return ()=>{};
        }
        const plugin = plugins[i];
        return async ()=>{
            const next = createNext(i + 1);
            let calledNext = false;
            let nextResolved = false;
            await plugin(__privateGet(this, _data), options, async ()=>{
                if (calledNext) {
                    throw new Error(`next() was call multiple times in TransactionPlugin ${i}`);
                }
                calledNext = true;
                await next();
                nextResolved = true;
            });
            if (!calledNext) {
                throw new Error(`next() was not called in TransactionPlugin ${i}`);
            }
            if (!nextResolved) {
                throw new Error(`next() was not awaited in TransactionPlugin ${i}`);
            }
        };
    };
    await createNext(0)();
};
let Transaction = _Transaction;
;
 //# sourceMappingURL=Transaction.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/high-contrast.prop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "highContrastPropDef",
    ()=>o
]);
const o = {
    highContrast: {
        type: "boolean",
        className: "rt-high-contrast",
        default: void 0
    }
};
;
 //# sourceMappingURL=high-contrast.prop.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/_internal/base-button.props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "baseButtonPropDefs",
    ()=>i
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$as$2d$child$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/as-child.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$color$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/color.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$high$2d$contrast$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/high-contrast.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$radius$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/radius.prop.js [app-client] (ecmascript)");
;
;
;
;
const t = [
    "1",
    "2",
    "3",
    "4"
], a = [
    "classic",
    "solid",
    "soft",
    "surface",
    "outline",
    "ghost"
], i = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$as$2d$child$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asChildPropDef"],
    size: {
        type: "enum",
        className: "rt-r-size",
        values: t,
        default: "2",
        responsive: !0
    },
    variant: {
        type: "enum",
        className: "rt-variant",
        values: a,
        default: "solid"
    },
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$color$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accentColorPropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$high$2d$contrast$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["highContrastPropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$radius$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radiusPropDef"],
    loading: {
        type: "boolean",
        className: "rt-loading",
        default: !1
    }
};
;
 //# sourceMappingURL=base-button.props.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/prop-def.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "breakpoints",
    ()=>e
]);
const e = [
    "initial",
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
];
;
 //# sourceMappingURL=prop-def.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/has-own-property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasOwnProperty",
    ()=>e
]);
function e(n, r) {
    return Object.prototype.hasOwnProperty.call(n, r);
}
;
 //# sourceMappingURL=has-own-property.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/is-responsive-object.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isResponsiveObject",
    ()=>i
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$prop$2d$def$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/prop-def.js [app-client] (ecmascript)");
;
function i(e) {
    return typeof e == "object" && Object.keys(e).some((s)=>__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$prop$2d$def$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breakpoints"].includes(s));
}
;
 //# sourceMappingURL=is-responsive-object.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/get-responsive-styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getResponsiveClassNames",
    ()=>g,
    "getResponsiveCustomProperties",
    ()=>m,
    "getResponsiveStyles",
    ()=>R
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$prop$2d$def$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/prop-def.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$has$2d$own$2d$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/has-own-property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$is$2d$responsive$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/is-responsive-object.js [app-client] (ecmascript)");
;
;
;
function R({ className: r, customProperties: n, ...t }) {
    const p = g({
        allowArbitraryValues: !0,
        className: r,
        ...t
    }), e = m({
        customProperties: n,
        ...t
    });
    return [
        p,
        e
    ];
}
function g({ allowArbitraryValues: r, value: n, className: t, propValues: p, parseValue: e = (s)=>s }) {
    const s = [];
    if (n) {
        if (typeof n == "string" && p.includes(n)) return l(t, n, e);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$is$2d$responsive$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isResponsiveObject"])(n)) {
            const i = n;
            for(const o in i){
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$has$2d$own$2d$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwnProperty"])(i, o) || !__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$prop$2d$def$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breakpoints"].includes(o)) continue;
                const u = i[o];
                if (u !== void 0) {
                    if (p.includes(u)) {
                        const f = l(t, u, e), v = o === "initial" ? f : `${o}:${f}`;
                        s.push(v);
                    } else if (r) {
                        const f = o === "initial" ? t : `${o}:${t}`;
                        s.push(f);
                    }
                }
            }
            return s.join(" ");
        }
        if (r) return t;
    }
}
function l(r, n, t) {
    const p = r ? "-" : "", e = t(n), s = e?.startsWith("-"), i = s ? "-" : "", o = s ? e?.substring(1) : e;
    return `${i}${r}${p}${o}`;
}
function m({ customProperties: r, value: n, propValues: t, parseValue: p = (e)=>e }) {
    let e = {};
    if (!(!n || typeof n == "string" && t.includes(n))) {
        if (typeof n == "string" && (e = Object.fromEntries(r.map((s)=>[
                s,
                n
            ]))), (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$is$2d$responsive$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isResponsiveObject"])(n)) {
            const s = n;
            for(const i in s){
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$has$2d$own$2d$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwnProperty"])(s, i) || !__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$prop$2d$def$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breakpoints"].includes(i)) continue;
                const o = s[i];
                if (!t.includes(o)) for (const u of r)e = {
                    [i === "initial" ? u : `${u}-${i}`]: o,
                    ...e
                };
            }
        }
        for(const s in e){
            const i = e[s];
            i !== void 0 && (e[s] = p(i));
        }
        return e;
    }
}
;
 //# sourceMappingURL=get-responsive-styles.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/merge-styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeStyles",
    ()=>l
]);
function l(...t) {
    let e = {};
    for (const n of t)n && (e = {
        ...e,
        ...n
    });
    return Object.keys(e).length ? e : void 0;
}
;
 //# sourceMappingURL=merge-styles.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/extract-props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractProps",
    ()=>v
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$get$2d$responsive$2d$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/get-responsive-styles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$is$2d$responsive$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/is-responsive-object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$merge$2d$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/merge-styles.js [app-client] (ecmascript)");
;
;
;
;
function N(...r) {
    return Object.assign({}, ...r);
}
function v(r, ...m) {
    let t, l;
    const a = {
        ...r
    }, f = N(...m);
    for(const n in f){
        let s = a[n];
        const e = f[n];
        if (e.default !== void 0 && s === void 0 && (s = e.default), e.type === "enum" && ![
            e.default,
            ...e.values
        ].includes(s) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$is$2d$responsive$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isResponsiveObject"])(s) && (s = e.default), a[n] = s, "className" in e && e.className) {
            delete a[n];
            const u = "responsive" in e;
            if (!s || (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$is$2d$responsive$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isResponsiveObject"])(s) && !u) continue;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$is$2d$responsive$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isResponsiveObject"])(s) && (e.default !== void 0 && s.initial === void 0 && (s.initial = e.default), e.type === "enum" && ([
                e.default,
                ...e.values
            ].includes(s.initial) || (s.initial = e.default))), e.type === "enum") {
                const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$get$2d$responsive$2d$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResponsiveClassNames"])({
                    allowArbitraryValues: !1,
                    value: s,
                    className: e.className,
                    propValues: e.values,
                    parseValue: e.parseValue
                });
                t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, i);
                continue;
            }
            if (e.type === "string" || e.type === "enum | string") {
                const i = e.type === "string" ? [] : e.values, [d, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$get$2d$responsive$2d$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResponsiveStyles"])({
                    className: e.className,
                    customProperties: e.customProperties,
                    propValues: i,
                    parseValue: e.parseValue,
                    value: s
                });
                l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$merge$2d$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeStyles"])(l, y), t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, d);
                continue;
            }
            if (e.type === "boolean" && s) {
                t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, e.className);
                continue;
            }
        }
    }
    return a.className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, r.className), a.style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$merge$2d$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeStyles"])(l, r.style), a;
}
;
 //# sourceMappingURL=extract-props.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/padding.props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "paddingPropDefs",
    ()=>p
]);
const e = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
], p = {
    p: {
        type: "enum | string",
        className: "rt-r-p",
        customProperties: [
            "--p"
        ],
        values: e,
        responsive: !0
    },
    px: {
        type: "enum | string",
        className: "rt-r-px",
        customProperties: [
            "--pl",
            "--pr"
        ],
        values: e,
        responsive: !0
    },
    py: {
        type: "enum | string",
        className: "rt-r-py",
        customProperties: [
            "--pt",
            "--pb"
        ],
        values: e,
        responsive: !0
    },
    pt: {
        type: "enum | string",
        className: "rt-r-pt",
        customProperties: [
            "--pt"
        ],
        values: e,
        responsive: !0
    },
    pr: {
        type: "enum | string",
        className: "rt-r-pr",
        customProperties: [
            "--pr"
        ],
        values: e,
        responsive: !0
    },
    pb: {
        type: "enum | string",
        className: "rt-r-pb",
        customProperties: [
            "--pb"
        ],
        values: e,
        responsive: !0
    },
    pl: {
        type: "enum | string",
        className: "rt-r-pl",
        customProperties: [
            "--pl"
        ],
        values: e,
        responsive: !0
    }
};
;
 //# sourceMappingURL=padding.props.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/height.props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "heightPropDefs",
    ()=>e
]);
const e = {
    height: {
        type: "string",
        className: "rt-r-h",
        customProperties: [
            "--height"
        ],
        responsive: !0
    },
    minHeight: {
        type: "string",
        className: "rt-r-min-h",
        customProperties: [
            "--min-height"
        ],
        responsive: !0
    },
    maxHeight: {
        type: "string",
        className: "rt-r-max-h",
        customProperties: [
            "--max-height"
        ],
        responsive: !0
    }
};
;
 //# sourceMappingURL=height.props.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/width.props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "widthPropDefs",
    ()=>t
]);
const t = {
    width: {
        type: "string",
        className: "rt-r-w",
        customProperties: [
            "--width"
        ],
        responsive: !0
    },
    minWidth: {
        type: "string",
        className: "rt-r-min-w",
        customProperties: [
            "--min-width"
        ],
        responsive: !0
    },
    maxWidth: {
        type: "string",
        className: "rt-r-max-w",
        customProperties: [
            "--max-width"
        ],
        responsive: !0
    }
};
;
 //# sourceMappingURL=width.props.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/layout.props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "layoutPropDefs",
    ()=>u
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$padding$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/padding.props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$height$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/height.props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$width$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/width.props.js [app-client] (ecmascript)");
;
;
;
const r = [
    "visible",
    "hidden",
    "clip",
    "scroll",
    "auto"
], i = [
    "static",
    "relative",
    "absolute",
    "fixed",
    "sticky"
], e = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "-1",
    "-2",
    "-3",
    "-4",
    "-5",
    "-6",
    "-7",
    "-8",
    "-9"
], p = [
    "0",
    "1"
], n = [
    "0",
    "1"
], u = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$padding$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paddingPropDefs"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$width$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["widthPropDefs"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$height$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heightPropDefs"],
    position: {
        type: "enum",
        className: "rt-r-position",
        values: i,
        responsive: !0
    },
    inset: {
        type: "enum | string",
        className: "rt-r-inset",
        customProperties: [
            "--inset"
        ],
        values: e,
        responsive: !0
    },
    top: {
        type: "enum | string",
        className: "rt-r-top",
        customProperties: [
            "--top"
        ],
        values: e,
        responsive: !0
    },
    right: {
        type: "enum | string",
        className: "rt-r-right",
        customProperties: [
            "--right"
        ],
        values: e,
        responsive: !0
    },
    bottom: {
        type: "enum | string",
        className: "rt-r-bottom",
        customProperties: [
            "--bottom"
        ],
        values: e,
        responsive: !0
    },
    left: {
        type: "enum | string",
        className: "rt-r-left",
        customProperties: [
            "--left"
        ],
        values: e,
        responsive: !0
    },
    overflow: {
        type: "enum",
        className: "rt-r-overflow",
        values: r,
        responsive: !0
    },
    overflowX: {
        type: "enum",
        className: "rt-r-ox",
        values: r,
        responsive: !0
    },
    overflowY: {
        type: "enum",
        className: "rt-r-oy",
        values: r,
        responsive: !0
    },
    flexBasis: {
        type: "string",
        className: "rt-r-fb",
        customProperties: [
            "--flex-basis"
        ],
        responsive: !0
    },
    flexShrink: {
        type: "enum | string",
        className: "rt-r-fs",
        customProperties: [
            "--flex-shrink"
        ],
        values: p,
        responsive: !0
    },
    flexGrow: {
        type: "enum | string",
        className: "rt-r-fg",
        customProperties: [
            "--flex-grow"
        ],
        values: n,
        responsive: !0
    },
    gridArea: {
        type: "string",
        className: "rt-r-ga",
        customProperties: [
            "--grid-area"
        ],
        responsive: !0
    },
    gridColumn: {
        type: "string",
        className: "rt-r-gc",
        customProperties: [
            "--grid-column"
        ],
        responsive: !0
    },
    gridColumnStart: {
        type: "string",
        className: "rt-r-gcs",
        customProperties: [
            "--grid-column-start"
        ],
        responsive: !0
    },
    gridColumnEnd: {
        type: "string",
        className: "rt-r-gce",
        customProperties: [
            "--grid-column-end"
        ],
        responsive: !0
    },
    gridRow: {
        type: "string",
        className: "rt-r-gr",
        customProperties: [
            "--grid-row"
        ],
        responsive: !0
    },
    gridRowStart: {
        type: "string",
        className: "rt-r-grs",
        customProperties: [
            "--grid-row-start"
        ],
        responsive: !0
    },
    gridRowEnd: {
        type: "string",
        className: "rt-r-gre",
        customProperties: [
            "--grid-row-end"
        ],
        responsive: !0
    }
};
;
 //# sourceMappingURL=layout.props.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/margin.props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "marginPropDefs",
    ()=>r
]);
const e = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "-1",
    "-2",
    "-3",
    "-4",
    "-5",
    "-6",
    "-7",
    "-8",
    "-9"
], r = {
    m: {
        type: "enum | string",
        values: e,
        responsive: !0,
        className: "rt-r-m",
        customProperties: [
            "--m"
        ]
    },
    mx: {
        type: "enum | string",
        values: e,
        responsive: !0,
        className: "rt-r-mx",
        customProperties: [
            "--ml",
            "--mr"
        ]
    },
    my: {
        type: "enum | string",
        values: e,
        responsive: !0,
        className: "rt-r-my",
        customProperties: [
            "--mt",
            "--mb"
        ]
    },
    mt: {
        type: "enum | string",
        values: e,
        responsive: !0,
        className: "rt-r-mt",
        customProperties: [
            "--mt"
        ]
    },
    mr: {
        type: "enum | string",
        values: e,
        responsive: !0,
        className: "rt-r-mr",
        customProperties: [
            "--mr"
        ]
    },
    mb: {
        type: "enum | string",
        values: e,
        responsive: !0,
        className: "rt-r-mb",
        customProperties: [
            "--mb"
        ]
    },
    ml: {
        type: "enum | string",
        values: e,
        responsive: !0,
        className: "rt-r-ml",
        customProperties: [
            "--ml"
        ]
    }
};
;
 //# sourceMappingURL=margin.props.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/slot.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>l,
    "Slot",
    ()=>e,
    "Slottable",
    ()=>r
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/radix-ui/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
;
const l = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root, e = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root, r = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Slottable;
;
 //# sourceMappingURL=slot.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/gap.props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gapPropDefs",
    ()=>p
]);
const e = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
], p = {
    gap: {
        type: "enum | string",
        className: "rt-r-gap",
        customProperties: [
            "--gap"
        ],
        values: e,
        responsive: !0
    },
    gapX: {
        type: "enum | string",
        className: "rt-r-cg",
        customProperties: [
            "--column-gap"
        ],
        values: e,
        responsive: !0
    },
    gapY: {
        type: "enum | string",
        className: "rt-r-rg",
        customProperties: [
            "--row-gap"
        ],
        values: e,
        responsive: !0
    }
};
;
 //# sourceMappingURL=gap.props.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/flex.props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "flexPropDefs",
    ()=>u
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$as$2d$child$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/as-child.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$gap$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/gap.props.js [app-client] (ecmascript)");
;
;
const t = [
    "div",
    "span"
], p = [
    "none",
    "inline-flex",
    "flex"
], a = [
    "row",
    "column",
    "row-reverse",
    "column-reverse"
], o = [
    "start",
    "center",
    "end",
    "baseline",
    "stretch"
], n = [
    "start",
    "center",
    "end",
    "between"
], l = [
    "nowrap",
    "wrap",
    "wrap-reverse"
], u = {
    as: {
        type: "enum",
        values: t,
        default: "div"
    },
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$as$2d$child$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asChildPropDef"],
    display: {
        type: "enum",
        className: "rt-r-display",
        values: p,
        responsive: !0
    },
    direction: {
        type: "enum",
        className: "rt-r-fd",
        values: a,
        responsive: !0
    },
    align: {
        type: "enum",
        className: "rt-r-ai",
        values: o,
        responsive: !0
    },
    justify: {
        type: "enum",
        className: "rt-r-jc",
        values: n,
        parseValue: f,
        responsive: !0
    },
    wrap: {
        type: "enum",
        className: "rt-r-fw",
        values: l,
        responsive: !0
    },
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$gap$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gapPropDefs"]
};
function f(e) {
    return e === "between" ? "space-between" : e;
}
;
 //# sourceMappingURL=flex.props.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/flex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Flex",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$extract$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/extract-props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$layout$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/layout.props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$margin$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/margin.props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$slot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/slot.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$flex$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/flex.props.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const p = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((r, e)=>{
    const { className: s, asChild: t, as: m = "div", ...l } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$extract$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractProps"])(r, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$flex$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flexPropDefs"], __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$layout$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutPropDefs"], __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$margin$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marginPropDefs"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](t ? __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$slot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : m, {
        ...l,
        ref: e,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("rt-Flex", s)
    });
});
p.displayName = "Flex";
;
 //# sourceMappingURL=flex.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/spinner.props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "spinnerPropDefs",
    ()=>s
]);
const e = [
    "1",
    "2",
    "3"
], s = {
    size: {
        type: "enum",
        className: "rt-r-size",
        values: e,
        default: "2",
        responsive: !0
    },
    loading: {
        type: "boolean",
        default: !0
    }
};
;
 //# sourceMappingURL=spinner.props.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/spinner.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spinner",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/flex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$spinner$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/spinner.props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$extract$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/extract-props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$margin$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/margin.props.js [app-client] (ecmascript)");
;
;
;
;
;
;
const s = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((i, o)=>{
    const { className: a, children: e, loading: t, ...m } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$extract$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractProps"])(i, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$spinner$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spinnerPropDefs"], __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$margin$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marginPropDefs"]);
    if (!t) return e;
    const r = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        ...m,
        ref: o,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("rt-Spinner", a)
    }, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: "rt-SpinnerLeaf"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: "rt-SpinnerLeaf"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: "rt-SpinnerLeaf"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: "rt-SpinnerLeaf"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: "rt-SpinnerLeaf"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: "rt-SpinnerLeaf"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: "rt-SpinnerLeaf"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: "rt-SpinnerLeaf"
    }));
    return e === void 0 ? r : __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        asChild: !0,
        position: "relative",
        align: "center",
        justify: "center"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", null, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        "aria-hidden": !0,
        style: {
            display: "contents",
            visibility: "hidden"
        },
        inert: void 0
    }, e), __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        asChild: !0,
        align: "center",
        justify: "center",
        position: "absolute",
        inset: "0"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", null, r))));
});
s.displayName = "Spinner";
;
 //# sourceMappingURL=spinner.js.map
}),
"[project]/heroes_guess_dapp/node_modules/radix-ui/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-client] (ecmascript) <export * as VisuallyHidden>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisuallyHidden",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/radix-ui/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-client] (ecmascript)");
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/visually-hidden.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>e,
    "VisuallyHidden",
    ()=>d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__VisuallyHidden$3e$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/radix-ui/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-client] (ecmascript) <export * as VisuallyHidden>");
;
const d = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__VisuallyHidden$3e$__["VisuallyHidden"].Root, e = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__VisuallyHidden$3e$__["VisuallyHidden"].Root;
;
 //# sourceMappingURL=visually-hidden.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/map-prop-values.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapButtonSizeToSpinnerSize",
    ()=>r,
    "mapCalloutSizeToTextSize",
    ()=>p,
    "mapResponsiveProp",
    ()=>s
]);
function s(e, t) {
    if (e !== void 0) return typeof e == "string" ? t(e) : Object.fromEntries(Object.entries(e).map(([n, o])=>[
            n,
            t(o)
        ]));
}
function p(e) {
    return e === "3" ? "3" : "2";
}
function r(e) {
    switch(e){
        case "1":
            return "1";
        case "2":
        case "3":
            return "2";
        case "4":
            return "3";
    }
}
;
 //# sourceMappingURL=map-prop-values.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/_internal/base-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseButton",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/radix-ui/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$_internal$2f$base$2d$button$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/_internal/base-button.props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/flex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$spinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/spinner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$visually$2d$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/visually-hidden.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$extract$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/extract-props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$map$2d$prop$2d$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/map-prop-values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$margin$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/margin.props.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const n = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((t, p)=>{
    const { size: i = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$_internal$2f$base$2d$button$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseButtonPropDefs"].size.default } = t, { className: a, children: e, asChild: m, color: d, radius: l, disabled: s = t.loading, ...u } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$extract$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractProps"])(t, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$_internal$2f$base$2d$button$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseButtonPropDefs"], __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$margin$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marginPropDefs"]), f = m ? __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : "button";
    return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](f, {
        "data-disabled": s || void 0,
        "data-accent-color": d,
        "data-radius": l,
        ...u,
        ref: p,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("rt-reset", "rt-BaseButton", a),
        disabled: s
    }, t.loading ? __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        style: {
            display: "contents",
            visibility: "hidden"
        },
        "aria-hidden": !0
    }, e), __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$visually$2d$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], null, e), __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        asChild: !0,
        align: "center",
        justify: "center",
        position: "absolute",
        inset: "0"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", null, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$spinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {
        size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$map$2d$prop$2d$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapResponsiveProp"])(i, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$map$2d$prop$2d$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapButtonSizeToSpinnerSize"])
    })))) : e);
});
n.displayName = "BaseButton";
;
 //# sourceMappingURL=base-button.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$_internal$2f$base$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/_internal/base-button.js [app-client] (ecmascript)");
;
;
;
const o = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className: e, ...n }, r)=>__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$_internal$2f$base$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseButton"], {
        ...n,
        ref: r,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("rt-Button", e)
    }));
o.displayName = "Button";
;
 //# sourceMappingURL=button.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/container.props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "containerPropDefs",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$as$2d$child$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/as-child.prop.js [app-client] (ecmascript)");
;
const r = [
    "1",
    "2",
    "3",
    "4"
], t = [
    "none",
    "initial"
], p = [
    "left",
    "center",
    "right"
], n = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$as$2d$child$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asChildPropDef"],
    size: {
        type: "enum",
        className: "rt-r-size",
        values: r,
        default: "4",
        responsive: !0
    },
    display: {
        type: "enum",
        className: "rt-r-display",
        values: t,
        parseValue: a,
        responsive: !0
    },
    align: {
        type: "enum",
        className: "rt-r-ai",
        values: p,
        parseValue: i,
        responsive: !0
    }
};
function a(e) {
    return e === "initial" ? "flex" : e;
}
function i(e) {
    return e === "left" ? "start" : e === "right" ? "end" : e;
}
;
 //# sourceMappingURL=container.props.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/get-subtree.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSubtree",
    ()=>d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function d(i, e) {
    const { asChild: r, children: c } = i;
    if (!r) return typeof e == "function" ? e(c) : e;
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(c);
    return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](t, {
        children: typeof e == "function" ? e(t.props.children) : e
    });
}
;
 //# sourceMappingURL=get-subtree.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/container.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/radix-ui/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$container$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/container.props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$extract$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/extract-props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$get$2d$subtree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/get-subtree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$height$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/height.props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$layout$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/layout.props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$margin$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/margin.props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$width$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/width.props.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const p = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ width: n, minWidth: s, maxWidth: i, height: m, minHeight: a, maxHeight: f, ...P }, l)=>{
    const { asChild: r, children: C, className: c, ...y } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$extract$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractProps"])(P, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$container$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containerPropDefs"], __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$layout$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutPropDefs"], __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$margin$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marginPropDefs"]), { className: d, style: h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$extract$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractProps"])({
        width: n,
        minWidth: s,
        maxWidth: i,
        height: m,
        minHeight: a,
        maxHeight: f
    }, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$width$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["widthPropDefs"], __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$height$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heightPropDefs"]), u = r ? __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : "div";
    return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](u, {
        ...y,
        ref: l,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("rt-Container", c)
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$get$2d$subtree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSubtree"])({
        asChild: r,
        children: C
    }, (v)=>__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("rt-ContainerInner", d),
            style: h
        }, v)));
});
p.displayName = "Container";
;
 //# sourceMappingURL=container.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/leading-trim.prop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "leadingTrimPropDef",
    ()=>r
]);
const e = [
    "normal",
    "start",
    "end",
    "both"
], r = {
    trim: {
        type: "enum",
        className: "rt-r-lt",
        values: e,
        responsive: !0
    }
};
;
 //# sourceMappingURL=leading-trim.prop.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/text-align.prop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "textAlignPropDef",
    ()=>t
]);
const e = [
    "left",
    "center",
    "right"
], t = {
    align: {
        type: "enum",
        className: "rt-r-ta",
        values: e,
        responsive: !0
    }
};
;
 //# sourceMappingURL=text-align.prop.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/text-wrap.prop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "textWrapPropDef",
    ()=>r
]);
const e = [
    "wrap",
    "nowrap",
    "pretty",
    "balance"
], r = {
    wrap: {
        type: "enum",
        className: "rt-r-tw",
        values: e,
        responsive: !0
    }
};
;
 //# sourceMappingURL=text-wrap.prop.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/truncate.prop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "truncatePropDef",
    ()=>e
]);
const e = {
    truncate: {
        type: "boolean",
        className: "rt-truncate"
    }
};
;
 //# sourceMappingURL=truncate.prop.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/weight.prop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "weightPropDef",
    ()=>t
]);
const e = [
    "light",
    "regular",
    "medium",
    "bold"
], t = {
    weight: {
        type: "enum",
        className: "rt-r-weight",
        values: e,
        responsive: !0
    }
};
;
 //# sourceMappingURL=weight.prop.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/heading.props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "headingPropDefs",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$as$2d$child$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/as-child.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$color$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/color.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$high$2d$contrast$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/high-contrast.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$leading$2d$trim$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/leading-trim.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$text$2d$align$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/text-align.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$text$2d$wrap$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/text-wrap.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$truncate$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/truncate.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$weight$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/weight.prop.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const m = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
], a = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
], n = {
    as: {
        type: "enum",
        values: m,
        default: "h1"
    },
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$as$2d$child$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asChildPropDef"],
    size: {
        type: "enum",
        className: "rt-r-size",
        values: a,
        default: "6",
        responsive: !0
    },
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$weight$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weightPropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$text$2d$align$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textAlignPropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$leading$2d$trim$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leadingTrimPropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$truncate$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncatePropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$text$2d$wrap$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textWrapPropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$color$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorPropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$high$2d$contrast$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["highContrastPropDef"]
};
;
 //# sourceMappingURL=heading.props.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/heading.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Heading",
    ()=>r
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/radix-ui/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$heading$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/heading.props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$extract$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/extract-props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$margin$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/margin.props.js [app-client] (ecmascript)");
;
;
;
;
;
;
const r = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((p, t)=>{
    const { children: e, className: s, asChild: a, as: n = "h1", color: i, ...m } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$extract$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractProps"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$heading$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingPropDefs"], __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$margin$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marginPropDefs"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root, {
        "data-accent-color": i,
        ...m,
        ref: t,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("rt-Heading", s)
    }, a ? e : __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](n, null, e));
});
r.displayName = "Heading";
;
 //# sourceMappingURL=heading.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/text.props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "textPropDefs",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$as$2d$child$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/as-child.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$color$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/color.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$high$2d$contrast$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/high-contrast.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$leading$2d$trim$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/leading-trim.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$text$2d$align$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/text-align.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$text$2d$wrap$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/text-wrap.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$truncate$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/truncate.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$weight$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/weight.prop.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const m = [
    "span",
    "div",
    "label",
    "p"
], a = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
], n = {
    as: {
        type: "enum",
        values: m,
        default: "span"
    },
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$as$2d$child$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asChildPropDef"],
    size: {
        type: "enum",
        className: "rt-r-size",
        values: a,
        responsive: !0
    },
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$weight$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weightPropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$text$2d$align$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textAlignPropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$leading$2d$trim$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leadingTrimPropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$truncate$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncatePropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$text$2d$wrap$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textWrapPropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$color$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorPropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$high$2d$contrast$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["highContrastPropDef"]
};
;
 //# sourceMappingURL=text.props.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/text.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Text",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/radix-ui/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$extract$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/helpers/extract-props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$margin$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/props/margin.props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@radix-ui/themes/dist/esm/components/text.props.js [app-client] (ecmascript)");
;
;
;
;
;
;
const p = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((t, r)=>{
    const { children: e, className: s, asChild: m, as: a = "span", color: n, ...P } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$extract$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractProps"])(t, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textPropDefs"], __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$margin$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marginPropDefs"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root, {
        "data-accent-color": n,
        ...P,
        ref: r,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("rt-Text", s)
    }, m ? e : __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](a, null, e));
});
p.displayName = "Text";
;
 //# sourceMappingURL=text.js.map
}),
"[project]/heroes_guess_dapp/node_modules/react-spinners/helpers/unitConverter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cssValue = exports.parseLengthAndUnit = void 0;
var cssUnit = {
    cm: true,
    mm: true,
    in: true,
    px: true,
    pt: true,
    pc: true,
    em: true,
    ex: true,
    ch: true,
    rem: true,
    vw: true,
    vh: true,
    vmin: true,
    vmax: true,
    "%": true
};
/**
 * If size is a number, append px to the value as default unit.
 * If size is a string, validate against list of valid units.
 * If unit is valid, return size as is.
 * If unit is invalid, console warn issue, replace with px as the unit.
 *
 * @param {(number | string)} size
 * @return {LengthObject} LengthObject
 */ function parseLengthAndUnit(size) {
    if (typeof size === "number") {
        return {
            value: size,
            unit: "px"
        };
    }
    var value;
    var valueString = (size.match(/^[0-9.]*/) || "").toString();
    if (valueString.includes(".")) {
        value = parseFloat(valueString);
    } else {
        value = parseInt(valueString, 10);
    }
    var unit = (size.match(/[^0-9]*$/) || "").toString();
    if (cssUnit[unit]) {
        return {
            value: value,
            unit: unit
        };
    }
    console.warn("React Spinners: ".concat(size, " is not a valid css value. Defaulting to ").concat(value, "px."));
    return {
        value: value,
        unit: "px"
    };
}
exports.parseLengthAndUnit = parseLengthAndUnit;
/**
 * Take value as an input and return valid css value
 *
 * @param {(number | string)} value
 * @return {string} valid css value
 */ function cssValue(value) {
    var lengthWithunit = parseLengthAndUnit(value);
    return "".concat(lengthWithunit.value).concat(lengthWithunit.unit);
}
exports.cssValue = cssValue;
}),
"[project]/heroes_guess_dapp/node_modules/react-spinners/helpers/animation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createAnimation = void 0;
var createAnimation = function(loaderName, frames, suffix) {
    var animationName = "react-spinners-".concat(loaderName, "-").concat(suffix);
    if (typeof window == "undefined" || !window.document) {
        return animationName;
    }
    var styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    var styleSheet = styleEl.sheet;
    var keyFrames = "\n    @keyframes ".concat(animationName, " {\n      ").concat(frames, "\n    }\n  ");
    if (styleSheet) {
        styleSheet.insertRule(keyFrames, 0);
    }
    return animationName;
};
exports.createAnimation = createAnimation;
}),
"[project]/heroes_guess_dapp/node_modules/react-spinners/ClipLoader.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __assign = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __rest = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var React = __importStar(__turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var unitConverter_1 = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/react-spinners/helpers/unitConverter.js [app-client] (ecmascript)");
var animation_1 = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/react-spinners/helpers/animation.js [app-client] (ecmascript)");
var clip = (0, animation_1.createAnimation)("ClipLoader", "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}", "clip");
function ClipLoader(_a) {
    var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 35 : _f, additionalprops = __rest(_a, [
        "loading",
        "color",
        "speedMultiplier",
        "cssOverride",
        "size"
    ]);
    var style = __assign({
        background: "transparent !important",
        width: (0, unitConverter_1.cssValue)(size),
        height: (0, unitConverter_1.cssValue)(size),
        borderRadius: "100%",
        border: "2px solid",
        borderTopColor: color,
        borderBottomColor: "transparent",
        borderLeftColor: color,
        borderRightColor: color,
        display: "inline-block",
        animation: "".concat(clip, " ").concat(0.75 / speedMultiplier, "s 0s infinite linear"),
        animationFillMode: "both"
    }, cssOverride);
    if (!loading) {
        return null;
    }
    return React.createElement("span", __assign({
        style: style
    }, additionalprops));
}
exports.default = ClipLoader;
}),
"[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/image-blur-svg.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImageBlurSvg", {
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
});
function getImageBlurSvg({ widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit }) {
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? `viewBox='0 0 ${svgWidth} ${svgHeight}'` : '';
    const preserveAspectRatio = viewBox ? 'none' : objectFit === 'contain' ? 'xMidYMid' : objectFit === 'cover' ? 'xMidYMid slice' : 'none';
    return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${viewBox}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${preserveAspectRatio}' style='filter: url(%23b);' href='${blurDataURL}'/%3E%3C/svg%3E`;
} //# sourceMappingURL=image-blur-svg.js.map
}),
"[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VALID_LOADERS: null,
    imageConfigDefault: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    'default',
    'imgix',
    'cloudinary',
    'akamai',
    'custom'
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: '/_next/image',
    loader: 'default',
    loaderFile: '',
    /**
   * @deprecated Use `remotePatterns` instead to protect your application from malicious users.
   */ domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 14400,
    formats: [
        'image/webp'
    ],
    maximumRedirects: 3,
    dangerouslyAllowLocalIP: false,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: `script-src 'none'; frame-src 'none'; sandbox;`,
    contentDispositionType: 'attachment',
    localPatterns: undefined,
    remotePatterns: [],
    qualities: [
        75
    ],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map
}),
"[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImgProps", {
    enumerable: true,
    get: function() {
        return getImgProps;
    }
});
const _warnonce = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _imageblursvg = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/image-blur-svg.js [app-client] (ecmascript)");
const _imageconfig = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const VALID_LOADING_VALUES = [
    'lazy',
    'eager',
    undefined
];
// Object-fit values that are not valid background-size values
const INVALID_BACKGROUND_SIZE_VALUES = [
    '-moz-initial',
    'fill',
    'none',
    'scale-down',
    undefined
];
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return !!src && typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === 'undefined') {
        return x;
    }
    if (typeof x === 'number') {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === 'string' && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths({ deviceSizes, allSizes }, width, sizes) {
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: 'w'
            };
        }
        return {
            widths: allSizes,
            kind: 'w'
        };
    }
    if (typeof width !== 'number') {
        return {
            widths: deviceSizes,
            kind: 'w'
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: 'x'
    };
}
function generateImgAttrs({ config, src, unoptimized, width, quality, sizes, loader }) {
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === 'w' ? '100vw' : sizes,
        srcSet: widths.map((w, i)=>`${loader({
                config,
                src,
                quality,
                width: w
            })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps({ src, sizes, unoptimized = false, priority = false, preload = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = 'empty', blurDataURL, fetchPriority, decoding = 'async', layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest }, _state) {
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ('allSizes' in c) {
        config = c;
    } else {
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = c.qualities?.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes,
            qualities
        };
    }
    if (typeof defaultLoader === 'undefined') {
        throw Object.defineProperty(new Error('images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: false,
            configurable: true
        });
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = '__next_img_default' in loader;
    if (isDefaultLoader) {
        if (config.loader === 'custom') {
            throw Object.defineProperty(new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: false,
                configurable: true
            });
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === 'fill') {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: '100%',
                height: 'auto'
            },
            responsive: {
                width: '100%',
                height: 'auto'
            }
        };
        const layoutToSizes = {
            responsive: '100vw',
            fill: '100vw'
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = '';
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: false,
                configurable: true
            });
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: false,
                configurable: true
            });
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === 'string' ? src : staticSrc;
    let isLazy = !priority && !preload && (loading === 'lazy' || typeof loading === 'undefined');
    if (!src || src.startsWith('data:') || src.startsWith('blob:')) {
        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && !config.dangerouslyAllowSVG && src.split('?', 1)[0].endsWith('.svg')) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    const qualityInt = getInt(quality);
    if ("TURBOPACK compile-time truthy", 1) {
        if (config.output === 'export' && isDefaultLoader && !unoptimized) {
            throw Object.defineProperty(new Error(`Image Optimization using the default loader is not compatible with \`{ output: 'export' }\`.
  Possible solutions:
    - Remove \`{ output: 'export' }\` and run "next start" to run server mode including the Image Optimization API.
    - Configure \`{ images: { unoptimized: true } }\` in \`next.config.js\` to disable the Image Optimization API.
  Read more: https://nextjs.org/docs/messages/export-image-api`), "__NEXT_ERROR_CODE", {
                value: "E500",
                enumerable: false,
                configurable: true
            });
        }
        if (!src) {
            // React doesn't show the stack trace and there's
            // no `src` to help identify which image, so we
            // instead console.error(ref) during mount.
            unoptimized = true;
        } else {
            if (fill) {
                if (width) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "width" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                        value: "E96",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (height) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "height" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                        value: "E115",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.position && style.position !== 'absolute') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E216",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.width && style.width !== '100%') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E73",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.height && style.height !== '100%') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E404",
                        enumerable: false,
                        configurable: true
                    });
                }
            } else {
                if (typeof widthInt === 'undefined') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" is missing required "width" property.`), "__NEXT_ERROR_CODE", {
                        value: "E451",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(widthInt)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "width" property. Expected a numeric value in pixels but received "${width}".`), "__NEXT_ERROR_CODE", {
                        value: "E66",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (typeof heightInt === 'undefined') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" is missing required "height" property.`), "__NEXT_ERROR_CODE", {
                        value: "E397",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(heightInt)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "height" property. Expected a numeric value in pixels but received "${height}".`), "__NEXT_ERROR_CODE", {
                        value: "E444",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/^[\x00-\x20]/.test(src)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" cannot start with a space or control character. Use src.trimStart() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
                        value: "E176",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/[\x00-\x20]$/.test(src)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" cannot end with a space or control character. Use src.trimEnd() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
                        value: "E21",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!VALID_LOADING_VALUES.includes(loading)) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`), "__NEXT_ERROR_CODE", {
                value: "E357",
                enumerable: false,
                configurable: true
            });
        }
        if (priority && loading === 'lazy') {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                value: "E218",
                enumerable: false,
                configurable: true
            });
        }
        if (preload && loading === 'lazy') {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "preload" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                value: "E803",
                enumerable: false,
                configurable: true
            });
        }
        if (preload && priority) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "preload" and "priority" properties. Only "preload" should be used.`), "__NEXT_ERROR_CODE", {
                value: "E802",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty' && placeholder !== 'blur' && !placeholder.startsWith('data:image/')) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "placeholder" property "${placeholder}".`), "__NEXT_ERROR_CODE", {
                value: "E431",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty') {
            if (widthInt && heightInt && widthInt * heightInt < 1600) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.`);
            }
        }
        if (qualityInt && config.qualities && !config.qualities.includes(qualityInt)) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using quality "${qualityInt}" which is not configured in images.qualities [${config.qualities.join(', ')}]. Please update your config to [${[
                ...config.qualities,
                qualityInt
            ].sort().join(', ')}].` + `\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-qualities`);
        }
        if (placeholder === 'blur' && !blurDataURL) {
            const VALID_BLUR_EXT = [
                'jpeg',
                'png',
                'webp',
                'avif'
            ] // should match next-image-loader
            ;
            throw Object.defineProperty(new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')} (animated images not supported)
          - Remove the "placeholder" property, effectively no blur effect
        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`), "__NEXT_ERROR_CODE", {
                value: "E371",
                enumerable: false,
                configurable: true
            });
        }
        if ('ref' in rest) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoad" property instead.`);
        }
        if (!unoptimized && !isDefaultLoader) {
            const urlStr = loader({
                config,
                src,
                width: widthInt || 400,
                quality: qualityInt || 75
            });
            let url;
            try {
                url = new URL(urlStr);
            } catch (err) {}
            if (urlStr === src || url && url.pathname === src && !url.search) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
            }
        }
        if (onLoadingComplete) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.`);
        }
        for (const [legacyKey, legacyValue] of Object.entries({
            layout,
            objectFit,
            objectPosition,
            lazyBoundary,
            lazyRoot
        })){
            if (legacyValue) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" has legacy prop "${legacyKey}". Did you forget to run the codemod?` + `\nRead more: https://nextjs.org/docs/messages/next-image-upgrade-to-13`);
            }
        }
        if (typeof window !== 'undefined' && !perfObserver && window.PerformanceObserver) {
            perfObserver = new PerformanceObserver((entryList)=>{
                for (const entry of entryList.getEntries()){
                    // @ts-ignore - missing "LargestContentfulPaint" class with "element" prop
                    const imgSrc = entry?.element?.src || '';
                    const lcpImage = allImgs.get(imgSrc);
                    if (lcpImage && lcpImage.loading === 'lazy' && lcpImage.placeholder === 'empty' && !lcpImage.src.startsWith('data:') && !lcpImage.src.startsWith('blob:')) {
                        // https://web.dev/lcp/#measure-lcp-in-javascript
                        (0, _warnonce.warnOnce)(`Image with src "${lcpImage.src}" was detected as the Largest Contentful Paint (LCP). Please add the \`loading="eager"\` property if this image is above the fold.` + `\nRead more: https://nextjs.org/docs/app/api-reference/components/image#loading`);
                    }
                }
            });
            try {
                perfObserver.observe({
                    type: 'largest-contentful-paint',
                    buffered: true
                });
            } catch (err) {
                // Log error but don't crash the app
                console.error(err);
            }
        }
    }
    const imgStyle = Object.assign(fill ? {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: 'transparent'
    }, style);
    const backgroundImage = !blurComplete && placeholder !== 'empty' ? placeholder === 'blur' ? `url("data:image/svg+xml;charset=utf-8,${(0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || '',
        objectFit: imgStyle.objectFit
    })}")` : `url("${placeholder}")` // assume `data:image/`
     : null;
    const backgroundSize = !INVALID_BACKGROUND_SIZE_VALUES.includes(imgStyle.objectFit) ? imgStyle.objectFit : imgStyle.objectFit === 'fill' ? '100% 100%' // the background-size equivalent of `fill`
     : 'cover';
    let placeholderStyle = backgroundImage ? {
        backgroundSize,
        backgroundPosition: imgStyle.objectPosition || '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundImage
    } : {};
    if ("TURBOPACK compile-time truthy", 1) {
        if (placeholderStyle.backgroundImage && placeholder === 'blur' && blurDataURL?.startsWith('/')) {
            // During `next dev`, we don't want to generate blur placeholders with webpack
            // because it can delay starting the dev server. Instead, `next-image-loader.js`
            // will inline a special url to lazily generate the blur placeholder at request time.
            placeholderStyle.backgroundImage = `url("${blurDataURL}")`;
        }
    }
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    const loadingFinal = isLazy ? 'lazy' : loading;
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof window !== 'undefined') {
            let fullUrl;
            try {
                fullUrl = new URL(imgAttributes.src);
            } catch (e) {
                fullUrl = new URL(imgAttributes.src, window.location.href);
            }
            allImgs.set(fullUrl.href, {
                src,
                loading: loadingFinal,
                placeholder
            });
        }
    }
    const props = {
        ...rest,
        loading: loadingFinal,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding,
        className,
        style: {
            ...imgStyle,
            ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: overrideSrc || imgAttributes.src
    };
    const meta = {
        unoptimized,
        preload: preload || priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map
}),
"[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/side-effect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SideEffect;
    }
});
const _react = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const isServer = typeof window === 'undefined';
const useClientOnlyLayoutEffect = isServer ? ()=>{} : _react.useLayoutEffect;
const useClientOnlyEffect = isServer ? ()=>{} : _react.useEffect;
function SideEffect(props) {
    const { headManager, reduceComponentsToState } = props;
    function emitChange() {
        if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements));
        }
    }
    if (isServer) {
        headManager?.mountedInstances?.add(props.children);
        emitChange();
    }
    useClientOnlyLayoutEffect({
        "SideEffect.useClientOnlyLayoutEffect": ()=>{
            headManager?.mountedInstances?.add(props.children);
            return ({
                "SideEffect.useClientOnlyLayoutEffect": ()=>{
                    headManager?.mountedInstances?.delete(props.children);
                }
            })["SideEffect.useClientOnlyLayoutEffect"];
        }
    }["SideEffect.useClientOnlyLayoutEffect"]);
    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
    // being rendered, we only trigger the method from the last one.
    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
    // singleton in the layout effect pass, and actually trigger it in the effect pass.
    useClientOnlyLayoutEffect({
        "SideEffect.useClientOnlyLayoutEffect": ()=>{
            if (headManager) {
                headManager._pendingUpdate = emitChange;
            }
            return ({
                "SideEffect.useClientOnlyLayoutEffect": ()=>{
                    if (headManager) {
                        headManager._pendingUpdate = emitChange;
                    }
                }
            })["SideEffect.useClientOnlyLayoutEffect"];
        }
    }["SideEffect.useClientOnlyLayoutEffect"]);
    useClientOnlyEffect({
        "SideEffect.useClientOnlyEffect": ()=>{
            if (headManager && headManager._pendingUpdate) {
                headManager._pendingUpdate();
                headManager._pendingUpdate = null;
            }
            return ({
                "SideEffect.useClientOnlyEffect": ()=>{
                    if (headManager && headManager._pendingUpdate) {
                        headManager._pendingUpdate();
                        headManager._pendingUpdate = null;
                    }
                }
            })["SideEffect.useClientOnlyEffect"];
        }
    }["SideEffect.useClientOnlyEffect"]);
    return null;
} //# sourceMappingURL=side-effect.js.map
}),
"[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/head.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    defaultHead: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    defaultHead: function() {
        return defaultHead;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/side-effect.js [app-client] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
function defaultHead() {
    const head = [
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"),
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")
    ];
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === 'string' || typeof child === 'number') {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    'name',
    'httpEquiv',
    'charSet',
    'itemProp'
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf('$') + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case 'title':
            case 'base':
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case 'meta':
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === 'charSet') {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements) {
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead().reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ("TURBOPACK compile-time truthy", 1) {
            // omit JSON-LD structured data snippets from the warning
            if (c.type === 'script' && c.props['type'] !== 'application/ld+json') {
                const srcMessage = c.props['src'] ? `<script> tag with src="${c.props['src']}"` : `inline <script>`;
                (0, _warnonce.warnOnce)(`Do not add <script> tags using next/head (see ${srcMessage}). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
            } else if (c.type === 'link' && c.props['rel'] === 'stylesheet') {
                (0, _warnonce.warnOnce)(`Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="${c.props['href']}"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
            }
        }
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head({ children }) {
    const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        children: children
    });
}
const _default = Head;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map
}),
"[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ImageConfigContext", {
    enumerable: true,
    get: function() {
        return ImageConfigContext;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _imageconfig = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const ImageConfigContext = _react.default.createContext(_imageconfig.imageConfigDefault);
if ("TURBOPACK compile-time truthy", 1) {
    ImageConfigContext.displayName = 'ImageConfigContext';
} //# sourceMappingURL=image-config-context.shared-runtime.js.map
}),
"[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RouterContext", {
    enumerable: true,
    get: function() {
        return RouterContext;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const RouterContext = _react.default.createContext(null);
if ("TURBOPACK compile-time truthy", 1) {
    RouterContext.displayName = 'RouterContext';
} //# sourceMappingURL=router-context.shared-runtime.js.map
}),
"[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/find-closest-quality.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findClosestQuality", {
    enumerable: true,
    get: function() {
        return findClosestQuality;
    }
});
function findClosestQuality(quality, config) {
    const q = quality || 75;
    if (!config?.qualities?.length) {
        return q;
    }
    return config.qualities.reduce((prev, cur)=>Math.abs(cur - q) < Math.abs(prev - q) ? cur : prev, 0);
} //# sourceMappingURL=find-closest-quality.js.map
}),
"[project]/heroes_guess_dapp/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
(()=>{
    "use strict";
    var t = {
        170: (t, e, u)=>{
            const n = u(510);
            const isWindows = ()=>{
                if (typeof navigator !== "undefined" && navigator.platform) {
                    const t = navigator.platform.toLowerCase();
                    return t === "win32" || t === "windows";
                }
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform === "win32";
                }
                return false;
            };
            function picomatch(t, e, u = false) {
                if (e && (e.windows === null || e.windows === undefined)) {
                    e = {
                        ...e,
                        windows: isWindows()
                    };
                }
                return n(t, e, u);
            }
            Object.assign(picomatch, n);
            t.exports = picomatch;
        },
        154: (t)=>{
            const e = "\\\\/";
            const u = `[^${e}]`;
            const n = "\\.";
            const o = "\\+";
            const s = "\\?";
            const r = "\\/";
            const a = "(?=.)";
            const i = "[^/]";
            const c = `(?:${r}|$)`;
            const p = `(?:^|${r})`;
            const l = `${n}{1,2}${c}`;
            const f = `(?!${n})`;
            const A = `(?!${p}${l})`;
            const _ = `(?!${n}{0,1}${c})`;
            const R = `(?!${l})`;
            const E = `[^.${r}]`;
            const h = `${i}*?`;
            const g = "/";
            const b = {
                DOT_LITERAL: n,
                PLUS_LITERAL: o,
                QMARK_LITERAL: s,
                SLASH_LITERAL: r,
                ONE_CHAR: a,
                QMARK: i,
                END_ANCHOR: c,
                DOTS_SLASH: l,
                NO_DOT: f,
                NO_DOTS: A,
                NO_DOT_SLASH: _,
                NO_DOTS_SLASH: R,
                QMARK_NO_DOT: E,
                STAR: h,
                START_ANCHOR: p,
                SEP: g
            };
            const C = {
                ...b,
                SLASH_LITERAL: `[${e}]`,
                QMARK: u,
                STAR: `${u}*?`,
                DOTS_SLASH: `${n}{1,2}(?:[${e}]|$)`,
                NO_DOT: `(?!${n})`,
                NO_DOTS: `(?!(?:^|[${e}])${n}{1,2}(?:[${e}]|$))`,
                NO_DOT_SLASH: `(?!${n}{0,1}(?:[${e}]|$))`,
                NO_DOTS_SLASH: `(?!${n}{1,2}(?:[${e}]|$))`,
                QMARK_NO_DOT: `[^.${e}]`,
                START_ANCHOR: `(?:^|[${e}])`,
                END_ANCHOR: `(?:[${e}]|$)`,
                SEP: "\\"
            };
            const y = {
                alnum: "a-zA-Z0-9",
                alpha: "a-zA-Z",
                ascii: "\\x00-\\x7F",
                blank: " \\t",
                cntrl: "\\x00-\\x1F\\x7F",
                digit: "0-9",
                graph: "\\x21-\\x7E",
                lower: "a-z",
                print: "\\x20-\\x7E ",
                punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
                space: " \\t\\r\\n\\v\\f",
                upper: "A-Z",
                word: "A-Za-z0-9_",
                xdigit: "A-Fa-f0-9"
            };
            t.exports = {
                MAX_LENGTH: 1024 * 64,
                POSIX_REGEX_SOURCE: y,
                REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
                REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
                REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
                REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
                REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
                REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
                REPLACEMENTS: {
                    "***": "*",
                    "**/**": "**",
                    "**/**/**": "**"
                },
                CHAR_0: 48,
                CHAR_9: 57,
                CHAR_UPPERCASE_A: 65,
                CHAR_LOWERCASE_A: 97,
                CHAR_UPPERCASE_Z: 90,
                CHAR_LOWERCASE_Z: 122,
                CHAR_LEFT_PARENTHESES: 40,
                CHAR_RIGHT_PARENTHESES: 41,
                CHAR_ASTERISK: 42,
                CHAR_AMPERSAND: 38,
                CHAR_AT: 64,
                CHAR_BACKWARD_SLASH: 92,
                CHAR_CARRIAGE_RETURN: 13,
                CHAR_CIRCUMFLEX_ACCENT: 94,
                CHAR_COLON: 58,
                CHAR_COMMA: 44,
                CHAR_DOT: 46,
                CHAR_DOUBLE_QUOTE: 34,
                CHAR_EQUAL: 61,
                CHAR_EXCLAMATION_MARK: 33,
                CHAR_FORM_FEED: 12,
                CHAR_FORWARD_SLASH: 47,
                CHAR_GRAVE_ACCENT: 96,
                CHAR_HASH: 35,
                CHAR_HYPHEN_MINUS: 45,
                CHAR_LEFT_ANGLE_BRACKET: 60,
                CHAR_LEFT_CURLY_BRACE: 123,
                CHAR_LEFT_SQUARE_BRACKET: 91,
                CHAR_LINE_FEED: 10,
                CHAR_NO_BREAK_SPACE: 160,
                CHAR_PERCENT: 37,
                CHAR_PLUS: 43,
                CHAR_QUESTION_MARK: 63,
                CHAR_RIGHT_ANGLE_BRACKET: 62,
                CHAR_RIGHT_CURLY_BRACE: 125,
                CHAR_RIGHT_SQUARE_BRACKET: 93,
                CHAR_SEMICOLON: 59,
                CHAR_SINGLE_QUOTE: 39,
                CHAR_SPACE: 32,
                CHAR_TAB: 9,
                CHAR_UNDERSCORE: 95,
                CHAR_VERTICAL_LINE: 124,
                CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
                extglobChars (t) {
                    return {
                        "!": {
                            type: "negate",
                            open: "(?:(?!(?:",
                            close: `))${t.STAR})`
                        },
                        "?": {
                            type: "qmark",
                            open: "(?:",
                            close: ")?"
                        },
                        "+": {
                            type: "plus",
                            open: "(?:",
                            close: ")+"
                        },
                        "*": {
                            type: "star",
                            open: "(?:",
                            close: ")*"
                        },
                        "@": {
                            type: "at",
                            open: "(?:",
                            close: ")"
                        }
                    };
                },
                globChars (t) {
                    return t === true ? C : b;
                }
            };
        },
        697: (t, e, u)=>{
            const n = u(154);
            const o = u(96);
            const { MAX_LENGTH: s, POSIX_REGEX_SOURCE: r, REGEX_NON_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_BACKREF: i, REPLACEMENTS: c } = n;
            const expandRange = (t, e)=>{
                if (typeof e.expandRange === "function") {
                    return e.expandRange(...t, e);
                }
                t.sort();
                const u = `[${t.join("-")}]`;
                try {
                    new RegExp(u);
                } catch (e) {
                    return t.map((t)=>o.escapeRegex(t)).join("..");
                }
                return u;
            };
            const syntaxError = (t, e)=>`Missing ${t}: "${e}" - use "\\\\${e}" to match literal characters`;
            const parse = (t, e)=>{
                if (typeof t !== "string") {
                    throw new TypeError("Expected a string");
                }
                t = c[t] || t;
                const u = {
                    ...e
                };
                const p = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                let l = t.length;
                if (l > p) {
                    throw new SyntaxError(`Input length: ${l}, exceeds maximum allowed length: ${p}`);
                }
                const f = {
                    type: "bos",
                    value: "",
                    output: u.prepend || ""
                };
                const A = [
                    f
                ];
                const _ = u.capture ? "" : "?:";
                const R = n.globChars(u.windows);
                const E = n.extglobChars(R);
                const { DOT_LITERAL: h, PLUS_LITERAL: g, SLASH_LITERAL: b, ONE_CHAR: C, DOTS_SLASH: y, NO_DOT: $, NO_DOT_SLASH: x, NO_DOTS_SLASH: S, QMARK: H, QMARK_NO_DOT: v, STAR: d, START_ANCHOR: L } = R;
                const globstar = (t)=>`(${_}(?:(?!${L}${t.dot ? y : h}).)*?)`;
                const T = u.dot ? "" : $;
                const O = u.dot ? H : v;
                let k = u.bash === true ? globstar(u) : d;
                if (u.capture) {
                    k = `(${k})`;
                }
                if (typeof u.noext === "boolean") {
                    u.noextglob = u.noext;
                }
                const m = {
                    input: t,
                    index: -1,
                    start: 0,
                    dot: u.dot === true,
                    consumed: "",
                    output: "",
                    prefix: "",
                    backtrack: false,
                    negated: false,
                    brackets: 0,
                    braces: 0,
                    parens: 0,
                    quotes: 0,
                    globstar: false,
                    tokens: A
                };
                t = o.removePrefix(t, m);
                l = t.length;
                const w = [];
                const N = [];
                const I = [];
                let B = f;
                let G;
                const eos = ()=>m.index === l - 1;
                const D = m.peek = (e = 1)=>t[m.index + e];
                const M = m.advance = ()=>t[++m.index] || "";
                const remaining = ()=>t.slice(m.index + 1);
                const consume = (t = "", e = 0)=>{
                    m.consumed += t;
                    m.index += e;
                };
                const append = (t)=>{
                    m.output += t.output != null ? t.output : t.value;
                    consume(t.value);
                };
                const negate = ()=>{
                    let t = 1;
                    while(D() === "!" && (D(2) !== "(" || D(3) === "?")){
                        M();
                        m.start++;
                        t++;
                    }
                    if (t % 2 === 0) {
                        return false;
                    }
                    m.negated = true;
                    m.start++;
                    return true;
                };
                const increment = (t)=>{
                    m[t]++;
                    I.push(t);
                };
                const decrement = (t)=>{
                    m[t]--;
                    I.pop();
                };
                const push = (t)=>{
                    if (B.type === "globstar") {
                        const e = m.braces > 0 && (t.type === "comma" || t.type === "brace");
                        const u = t.extglob === true || w.length && (t.type === "pipe" || t.type === "paren");
                        if (t.type !== "slash" && t.type !== "paren" && !e && !u) {
                            m.output = m.output.slice(0, -B.output.length);
                            B.type = "star";
                            B.value = "*";
                            B.output = k;
                            m.output += B.output;
                        }
                    }
                    if (w.length && t.type !== "paren") {
                        w[w.length - 1].inner += t.value;
                    }
                    if (t.value || t.output) append(t);
                    if (B && B.type === "text" && t.type === "text") {
                        B.output = (B.output || B.value) + t.value;
                        B.value += t.value;
                        return;
                    }
                    t.prev = B;
                    A.push(t);
                    B = t;
                };
                const extglobOpen = (t, e)=>{
                    const n = {
                        ...E[e],
                        conditions: 1,
                        inner: ""
                    };
                    n.prev = B;
                    n.parens = m.parens;
                    n.output = m.output;
                    const o = (u.capture ? "(" : "") + n.open;
                    increment("parens");
                    push({
                        type: t,
                        value: e,
                        output: m.output ? "" : C
                    });
                    push({
                        type: "paren",
                        extglob: true,
                        value: M(),
                        output: o
                    });
                    w.push(n);
                };
                const extglobClose = (t)=>{
                    let n = t.close + (u.capture ? ")" : "");
                    let o;
                    if (t.type === "negate") {
                        let s = k;
                        if (t.inner && t.inner.length > 1 && t.inner.includes("/")) {
                            s = globstar(u);
                        }
                        if (s !== k || eos() || /^\)+$/.test(remaining())) {
                            n = t.close = `)$))${s}`;
                        }
                        if (t.inner.includes("*") && (o = remaining()) && /^\.[^\\/.]+$/.test(o)) {
                            const u = parse(o, {
                                ...e,
                                fastpaths: false
                            }).output;
                            n = t.close = `)${u})${s})`;
                        }
                        if (t.prev.type === "bos") {
                            m.negatedExtglob = true;
                        }
                    }
                    push({
                        type: "paren",
                        extglob: true,
                        value: G,
                        output: n
                    });
                    decrement("parens");
                };
                if (u.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(t)) {
                    let n = false;
                    let s = t.replace(i, (t, e, u, o, s, r)=>{
                        if (o === "\\") {
                            n = true;
                            return t;
                        }
                        if (o === "?") {
                            if (e) {
                                return e + o + (s ? H.repeat(s.length) : "");
                            }
                            if (r === 0) {
                                return O + (s ? H.repeat(s.length) : "");
                            }
                            return H.repeat(u.length);
                        }
                        if (o === ".") {
                            return h.repeat(u.length);
                        }
                        if (o === "*") {
                            if (e) {
                                return e + o + (s ? k : "");
                            }
                            return k;
                        }
                        return e ? t : `\\${t}`;
                    });
                    if (n === true) {
                        if (u.unescape === true) {
                            s = s.replace(/\\/g, "");
                        } else {
                            s = s.replace(/\\+/g, (t)=>t.length % 2 === 0 ? "\\\\" : t ? "\\" : "");
                        }
                    }
                    if (s === t && u.contains === true) {
                        m.output = t;
                        return m;
                    }
                    m.output = o.wrapOutput(s, m, e);
                    return m;
                }
                while(!eos()){
                    G = M();
                    if (G === "\0") {
                        continue;
                    }
                    if (G === "\\") {
                        const t = D();
                        if (t === "/" && u.bash !== true) {
                            continue;
                        }
                        if (t === "." || t === ";") {
                            continue;
                        }
                        if (!t) {
                            G += "\\";
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                        const e = /^\\+/.exec(remaining());
                        let n = 0;
                        if (e && e[0].length > 2) {
                            n = e[0].length;
                            m.index += n;
                            if (n % 2 !== 0) {
                                G += "\\";
                            }
                        }
                        if (u.unescape === true) {
                            G = M();
                        } else {
                            G += M();
                        }
                        if (m.brackets === 0) {
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                    }
                    if (m.brackets > 0 && (G !== "]" || B.value === "[" || B.value === "[^")) {
                        if (u.posix !== false && G === ":") {
                            const t = B.value.slice(1);
                            if (t.includes("[")) {
                                B.posix = true;
                                if (t.includes(":")) {
                                    const t = B.value.lastIndexOf("[");
                                    const e = B.value.slice(0, t);
                                    const u = B.value.slice(t + 2);
                                    const n = r[u];
                                    if (n) {
                                        B.value = e + n;
                                        m.backtrack = true;
                                        M();
                                        if (!f.output && A.indexOf(B) === 1) {
                                            f.output = C;
                                        }
                                        continue;
                                    }
                                }
                            }
                        }
                        if (G === "[" && D() !== ":" || G === "-" && D() === "]") {
                            G = `\\${G}`;
                        }
                        if (G === "]" && (B.value === "[" || B.value === "[^")) {
                            G = `\\${G}`;
                        }
                        if (u.posix === true && G === "!" && B.value === "[") {
                            G = "^";
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (m.quotes === 1 && G !== '"') {
                        G = o.escapeRegex(G);
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (G === '"') {
                        m.quotes = m.quotes === 1 ? 0 : 1;
                        if (u.keepQuotes === true) {
                            push({
                                type: "text",
                                value: G
                            });
                        }
                        continue;
                    }
                    if (G === "(") {
                        increment("parens");
                        push({
                            type: "paren",
                            value: G
                        });
                        continue;
                    }
                    if (G === ")") {
                        if (m.parens === 0 && u.strictBrackets === true) {
                            throw new SyntaxError(syntaxError("opening", "("));
                        }
                        const t = w[w.length - 1];
                        if (t && m.parens === t.parens + 1) {
                            extglobClose(w.pop());
                            continue;
                        }
                        push({
                            type: "paren",
                            value: G,
                            output: m.parens ? ")" : "\\)"
                        });
                        decrement("parens");
                        continue;
                    }
                    if (G === "[") {
                        if (u.nobracket === true || !remaining().includes("]")) {
                            if (u.nobracket !== true && u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("closing", "]"));
                            }
                            G = `\\${G}`;
                        } else {
                            increment("brackets");
                        }
                        push({
                            type: "bracket",
                            value: G
                        });
                        continue;
                    }
                    if (G === "]") {
                        if (u.nobracket === true || B && B.type === "bracket" && B.value.length === 1) {
                            push({
                                type: "text",
                                value: G,
                                output: `\\${G}`
                            });
                            continue;
                        }
                        if (m.brackets === 0) {
                            if (u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("opening", "["));
                            }
                            push({
                                type: "text",
                                value: G,
                                output: `\\${G}`
                            });
                            continue;
                        }
                        decrement("brackets");
                        const t = B.value.slice(1);
                        if (B.posix !== true && t[0] === "^" && !t.includes("/")) {
                            G = `/${G}`;
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        if (u.literalBrackets === false || o.hasRegexChars(t)) {
                            continue;
                        }
                        const e = o.escapeRegex(B.value);
                        m.output = m.output.slice(0, -B.value.length);
                        if (u.literalBrackets === true) {
                            m.output += e;
                            B.value = e;
                            continue;
                        }
                        B.value = `(${_}${e}|${B.value})`;
                        m.output += B.value;
                        continue;
                    }
                    if (G === "{" && u.nobrace !== true) {
                        increment("braces");
                        const t = {
                            type: "brace",
                            value: G,
                            output: "(",
                            outputIndex: m.output.length,
                            tokensIndex: m.tokens.length
                        };
                        N.push(t);
                        push(t);
                        continue;
                    }
                    if (G === "}") {
                        const t = N[N.length - 1];
                        if (u.nobrace === true || !t) {
                            push({
                                type: "text",
                                value: G,
                                output: G
                            });
                            continue;
                        }
                        let e = ")";
                        if (t.dots === true) {
                            const t = A.slice();
                            const n = [];
                            for(let e = t.length - 1; e >= 0; e--){
                                A.pop();
                                if (t[e].type === "brace") {
                                    break;
                                }
                                if (t[e].type !== "dots") {
                                    n.unshift(t[e].value);
                                }
                            }
                            e = expandRange(n, u);
                            m.backtrack = true;
                        }
                        if (t.comma !== true && t.dots !== true) {
                            const u = m.output.slice(0, t.outputIndex);
                            const n = m.tokens.slice(t.tokensIndex);
                            t.value = t.output = "\\{";
                            G = e = "\\}";
                            m.output = u;
                            for (const t of n){
                                m.output += t.output || t.value;
                            }
                        }
                        push({
                            type: "brace",
                            value: G,
                            output: e
                        });
                        decrement("braces");
                        N.pop();
                        continue;
                    }
                    if (G === "|") {
                        if (w.length > 0) {
                            w[w.length - 1].conditions++;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G === ",") {
                        let t = G;
                        const e = N[N.length - 1];
                        if (e && I[I.length - 1] === "braces") {
                            e.comma = true;
                            t = "|";
                        }
                        push({
                            type: "comma",
                            value: G,
                            output: t
                        });
                        continue;
                    }
                    if (G === "/") {
                        if (B.type === "dot" && m.index === m.start + 1) {
                            m.start = m.index + 1;
                            m.consumed = "";
                            m.output = "";
                            A.pop();
                            B = f;
                            continue;
                        }
                        push({
                            type: "slash",
                            value: G,
                            output: b
                        });
                        continue;
                    }
                    if (G === ".") {
                        if (m.braces > 0 && B.type === "dot") {
                            if (B.value === ".") B.output = h;
                            const t = N[N.length - 1];
                            B.type = "dots";
                            B.output += G;
                            B.value += G;
                            t.dots = true;
                            continue;
                        }
                        if (m.braces + m.parens === 0 && B.type !== "bos" && B.type !== "slash") {
                            push({
                                type: "text",
                                value: G,
                                output: h
                            });
                            continue;
                        }
                        push({
                            type: "dot",
                            value: G,
                            output: h
                        });
                        continue;
                    }
                    if (G === "?") {
                        const t = B && B.value === "(";
                        if (!t && u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("qmark", G);
                            continue;
                        }
                        if (B && B.type === "paren") {
                            const t = D();
                            let e = G;
                            if (B.value === "(" && !/[!=<:]/.test(t) || t === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                                e = `\\${G}`;
                            }
                            push({
                                type: "text",
                                value: G,
                                output: e
                            });
                            continue;
                        }
                        if (u.dot !== true && (B.type === "slash" || B.type === "bos")) {
                            push({
                                type: "qmark",
                                value: G,
                                output: v
                            });
                            continue;
                        }
                        push({
                            type: "qmark",
                            value: G,
                            output: H
                        });
                        continue;
                    }
                    if (G === "!") {
                        if (u.noextglob !== true && D() === "(") {
                            if (D(2) !== "?" || !/[!=<:]/.test(D(3))) {
                                extglobOpen("negate", G);
                                continue;
                            }
                        }
                        if (u.nonegate !== true && m.index === 0) {
                            negate();
                            continue;
                        }
                    }
                    if (G === "+") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("plus", G);
                            continue;
                        }
                        if (B && B.value === "(" || u.regex === false) {
                            push({
                                type: "plus",
                                value: G,
                                output: g
                            });
                            continue;
                        }
                        if (B && (B.type === "bracket" || B.type === "paren" || B.type === "brace") || m.parens > 0) {
                            push({
                                type: "plus",
                                value: G
                            });
                            continue;
                        }
                        push({
                            type: "plus",
                            value: g
                        });
                        continue;
                    }
                    if (G === "@") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            push({
                                type: "at",
                                extglob: true,
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G !== "*") {
                        if (G === "$" || G === "^") {
                            G = `\\${G}`;
                        }
                        const t = a.exec(remaining());
                        if (t) {
                            G += t[0];
                            m.index += t[0].length;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (B && (B.type === "globstar" || B.star === true)) {
                        B.type = "star";
                        B.star = true;
                        B.value += G;
                        B.output = k;
                        m.backtrack = true;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    let e = remaining();
                    if (u.noextglob !== true && /^\([^?]/.test(e)) {
                        extglobOpen("star", G);
                        continue;
                    }
                    if (B.type === "star") {
                        if (u.noglobstar === true) {
                            consume(G);
                            continue;
                        }
                        const n = B.prev;
                        const o = n.prev;
                        const s = n.type === "slash" || n.type === "bos";
                        const r = o && (o.type === "star" || o.type === "globstar");
                        if (u.bash === true && (!s || e[0] && e[0] !== "/")) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        const a = m.braces > 0 && (n.type === "comma" || n.type === "brace");
                        const i = w.length && (n.type === "pipe" || n.type === "paren");
                        if (!s && n.type !== "paren" && !a && !i) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        while(e.slice(0, 3) === "/**"){
                            const u = t[m.index + 4];
                            if (u && u !== "/") {
                                break;
                            }
                            e = e.slice(3);
                            consume("/**", 3);
                        }
                        if (n.type === "bos" && eos()) {
                            B.type = "globstar";
                            B.value += G;
                            B.output = globstar(u);
                            m.output = B.output;
                            m.globstar = true;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && !r && eos()) {
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = `(?:${n.output}`;
                            B.type = "globstar";
                            B.output = globstar(u) + (u.strictSlashes ? ")" : "|$)");
                            B.value += G;
                            m.globstar = true;
                            m.output += n.output + B.output;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && e[0] === "/") {
                            const t = e[1] !== void 0 ? "|$" : "";
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = `(?:${n.output}`;
                            B.type = "globstar";
                            B.output = `${globstar(u)}${b}|${b}${t})`;
                            B.value += G;
                            m.output += n.output + B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        if (n.type === "bos" && e[0] === "/") {
                            B.type = "globstar";
                            B.value += G;
                            B.output = `(?:^|${b}|${globstar(u)}${b})`;
                            m.output = B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        m.output = m.output.slice(0, -B.output.length);
                        B.type = "globstar";
                        B.output = globstar(u);
                        B.value += G;
                        m.output += B.output;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    const n = {
                        type: "star",
                        value: G,
                        output: k
                    };
                    if (u.bash === true) {
                        n.output = ".*?";
                        if (B.type === "bos" || B.type === "slash") {
                            n.output = T + n.output;
                        }
                        push(n);
                        continue;
                    }
                    if (B && (B.type === "bracket" || B.type === "paren") && u.regex === true) {
                        n.output = G;
                        push(n);
                        continue;
                    }
                    if (m.index === m.start || B.type === "slash" || B.type === "dot") {
                        if (B.type === "dot") {
                            m.output += x;
                            B.output += x;
                        } else if (u.dot === true) {
                            m.output += S;
                            B.output += S;
                        } else {
                            m.output += T;
                            B.output += T;
                        }
                        if (D() !== "*") {
                            m.output += C;
                            B.output += C;
                        }
                    }
                    push(n);
                }
                while(m.brackets > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
                    m.output = o.escapeLast(m.output, "[");
                    decrement("brackets");
                }
                while(m.parens > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
                    m.output = o.escapeLast(m.output, "(");
                    decrement("parens");
                }
                while(m.braces > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
                    m.output = o.escapeLast(m.output, "{");
                    decrement("braces");
                }
                if (u.strictSlashes !== true && (B.type === "star" || B.type === "bracket")) {
                    push({
                        type: "maybe_slash",
                        value: "",
                        output: `${b}?`
                    });
                }
                if (m.backtrack === true) {
                    m.output = "";
                    for (const t of m.tokens){
                        m.output += t.output != null ? t.output : t.value;
                        if (t.suffix) {
                            m.output += t.suffix;
                        }
                    }
                }
                return m;
            };
            parse.fastpaths = (t, e)=>{
                const u = {
                    ...e
                };
                const r = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                const a = t.length;
                if (a > r) {
                    throw new SyntaxError(`Input length: ${a}, exceeds maximum allowed length: ${r}`);
                }
                t = c[t] || t;
                const { DOT_LITERAL: i, SLASH_LITERAL: p, ONE_CHAR: l, DOTS_SLASH: f, NO_DOT: A, NO_DOTS: _, NO_DOTS_SLASH: R, STAR: E, START_ANCHOR: h } = n.globChars(u.windows);
                const g = u.dot ? _ : A;
                const b = u.dot ? R : A;
                const C = u.capture ? "" : "?:";
                const y = {
                    negated: false,
                    prefix: ""
                };
                let $ = u.bash === true ? ".*?" : E;
                if (u.capture) {
                    $ = `(${$})`;
                }
                const globstar = (t)=>{
                    if (t.noglobstar === true) return $;
                    return `(${C}(?:(?!${h}${t.dot ? f : i}).)*?)`;
                };
                const create = (t)=>{
                    switch(t){
                        case "*":
                            return `${g}${l}${$}`;
                        case ".*":
                            return `${i}${l}${$}`;
                        case "*.*":
                            return `${g}${$}${i}${l}${$}`;
                        case "*/*":
                            return `${g}${$}${p}${l}${b}${$}`;
                        case "**":
                            return g + globstar(u);
                        case "**/*":
                            return `(?:${g}${globstar(u)}${p})?${b}${l}${$}`;
                        case "**/*.*":
                            return `(?:${g}${globstar(u)}${p})?${b}${$}${i}${l}${$}`;
                        case "**/.*":
                            return `(?:${g}${globstar(u)}${p})?${i}${l}${$}`;
                        default:
                            {
                                const e = /^(.*?)\.(\w+)$/.exec(t);
                                if (!e) return;
                                const u = create(e[1]);
                                if (!u) return;
                                return u + i + e[2];
                            }
                    }
                };
                const x = o.removePrefix(t, y);
                let S = create(x);
                if (S && u.strictSlashes !== true) {
                    S += `${p}?`;
                }
                return S;
            };
            t.exports = parse;
        },
        510: (t, e, u)=>{
            const n = u(716);
            const o = u(697);
            const s = u(96);
            const r = u(154);
            const isObject = (t)=>t && typeof t === "object" && !Array.isArray(t);
            const picomatch = (t, e, u = false)=>{
                if (Array.isArray(t)) {
                    const n = t.map((t)=>picomatch(t, e, u));
                    const arrayMatcher = (t)=>{
                        for (const e of n){
                            const u = e(t);
                            if (u) return u;
                        }
                        return false;
                    };
                    return arrayMatcher;
                }
                const n = isObject(t) && t.tokens && t.input;
                if (t === "" || typeof t !== "string" && !n) {
                    throw new TypeError("Expected pattern to be a non-empty string");
                }
                const o = e || {};
                const s = o.windows;
                const r = n ? picomatch.compileRe(t, e) : picomatch.makeRe(t, e, false, true);
                const a = r.state;
                delete r.state;
                let isIgnored = ()=>false;
                if (o.ignore) {
                    const t = {
                        ...e,
                        ignore: null,
                        onMatch: null,
                        onResult: null
                    };
                    isIgnored = picomatch(o.ignore, t, u);
                }
                const matcher = (u, n = false)=>{
                    const { isMatch: i, match: c, output: p } = picomatch.test(u, r, e, {
                        glob: t,
                        posix: s
                    });
                    const l = {
                        glob: t,
                        state: a,
                        regex: r,
                        posix: s,
                        input: u,
                        output: p,
                        match: c,
                        isMatch: i
                    };
                    if (typeof o.onResult === "function") {
                        o.onResult(l);
                    }
                    if (i === false) {
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (isIgnored(u)) {
                        if (typeof o.onIgnore === "function") {
                            o.onIgnore(l);
                        }
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (typeof o.onMatch === "function") {
                        o.onMatch(l);
                    }
                    return n ? l : true;
                };
                if (u) {
                    matcher.state = a;
                }
                return matcher;
            };
            picomatch.test = (t, e, u, { glob: n, posix: o } = {})=>{
                if (typeof t !== "string") {
                    throw new TypeError("Expected input to be a string");
                }
                if (t === "") {
                    return {
                        isMatch: false,
                        output: ""
                    };
                }
                const r = u || {};
                const a = r.format || (o ? s.toPosixSlashes : null);
                let i = t === n;
                let c = i && a ? a(t) : t;
                if (i === false) {
                    c = a ? a(t) : t;
                    i = c === n;
                }
                if (i === false || r.capture === true) {
                    if (r.matchBase === true || r.basename === true) {
                        i = picomatch.matchBase(t, e, u, o);
                    } else {
                        i = e.exec(c);
                    }
                }
                return {
                    isMatch: Boolean(i),
                    match: i,
                    output: c
                };
            };
            picomatch.matchBase = (t, e, u)=>{
                const n = e instanceof RegExp ? e : picomatch.makeRe(e, u);
                return n.test(s.basename(t));
            };
            picomatch.isMatch = (t, e, u)=>picomatch(e, u)(t);
            picomatch.parse = (t, e)=>{
                if (Array.isArray(t)) return t.map((t)=>picomatch.parse(t, e));
                return o(t, {
                    ...e,
                    fastpaths: false
                });
            };
            picomatch.scan = (t, e)=>n(t, e);
            picomatch.compileRe = (t, e, u = false, n = false)=>{
                if (u === true) {
                    return t.output;
                }
                const o = e || {};
                const s = o.contains ? "" : "^";
                const r = o.contains ? "" : "$";
                let a = `${s}(?:${t.output})${r}`;
                if (t && t.negated === true) {
                    a = `^(?!${a}).*$`;
                }
                const i = picomatch.toRegex(a, e);
                if (n === true) {
                    i.state = t;
                }
                return i;
            };
            picomatch.makeRe = (t, e = {}, u = false, n = false)=>{
                if (!t || typeof t !== "string") {
                    throw new TypeError("Expected a non-empty string");
                }
                let s = {
                    negated: false,
                    fastpaths: true
                };
                if (e.fastpaths !== false && (t[0] === "." || t[0] === "*")) {
                    s.output = o.fastpaths(t, e);
                }
                if (!s.output) {
                    s = o(t, e);
                }
                return picomatch.compileRe(s, e, u, n);
            };
            picomatch.toRegex = (t, e)=>{
                try {
                    const u = e || {};
                    return new RegExp(t, u.flags || (u.nocase ? "i" : ""));
                } catch (t) {
                    if (e && e.debug === true) throw t;
                    return /$^/;
                }
            };
            picomatch.constants = r;
            t.exports = picomatch;
        },
        716: (t, e, u)=>{
            const n = u(96);
            const { CHAR_ASTERISK: o, CHAR_AT: s, CHAR_BACKWARD_SLASH: r, CHAR_COMMA: a, CHAR_DOT: i, CHAR_EXCLAMATION_MARK: c, CHAR_FORWARD_SLASH: p, CHAR_LEFT_CURLY_BRACE: l, CHAR_LEFT_PARENTHESES: f, CHAR_LEFT_SQUARE_BRACKET: A, CHAR_PLUS: _, CHAR_QUESTION_MARK: R, CHAR_RIGHT_CURLY_BRACE: E, CHAR_RIGHT_PARENTHESES: h, CHAR_RIGHT_SQUARE_BRACKET: g } = u(154);
            const isPathSeparator = (t)=>t === p || t === r;
            const depth = (t)=>{
                if (t.isPrefix !== true) {
                    t.depth = t.isGlobstar ? Infinity : 1;
                }
            };
            const scan = (t, e)=>{
                const u = e || {};
                const b = t.length - 1;
                const C = u.parts === true || u.scanToEnd === true;
                const y = [];
                const $ = [];
                const x = [];
                let S = t;
                let H = -1;
                let v = 0;
                let d = 0;
                let L = false;
                let T = false;
                let O = false;
                let k = false;
                let m = false;
                let w = false;
                let N = false;
                let I = false;
                let B = false;
                let G = false;
                let D = 0;
                let M;
                let P;
                let K = {
                    value: "",
                    depth: 0,
                    isGlob: false
                };
                const eos = ()=>H >= b;
                const peek = ()=>S.charCodeAt(H + 1);
                const advance = ()=>{
                    M = P;
                    return S.charCodeAt(++H);
                };
                while(H < b){
                    P = advance();
                    let t;
                    if (P === r) {
                        N = K.backslashes = true;
                        P = advance();
                        if (P === l) {
                            w = true;
                        }
                        continue;
                    }
                    if (w === true || P === l) {
                        D++;
                        while(eos() !== true && (P = advance())){
                            if (P === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (P === l) {
                                D++;
                                continue;
                            }
                            if (w !== true && P === i && (P = advance()) === i) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (w !== true && P === a) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (P === E) {
                                D--;
                                if (D === 0) {
                                    w = false;
                                    L = K.isBrace = true;
                                    G = true;
                                    break;
                                }
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === p) {
                        y.push(H);
                        $.push(K);
                        K = {
                            value: "",
                            depth: 0,
                            isGlob: false
                        };
                        if (G === true) continue;
                        if (M === i && H === v + 1) {
                            v += 2;
                            continue;
                        }
                        d = H + 1;
                        continue;
                    }
                    if (u.noext !== true) {
                        const t = P === _ || P === s || P === o || P === R || P === c;
                        if (t === true && peek() === f) {
                            O = K.isGlob = true;
                            k = K.isExtglob = true;
                            G = true;
                            if (P === c && H === v) {
                                B = true;
                            }
                            if (C === true) {
                                while(eos() !== true && (P = advance())){
                                    if (P === r) {
                                        N = K.backslashes = true;
                                        P = advance();
                                        continue;
                                    }
                                    if (P === h) {
                                        O = K.isGlob = true;
                                        G = true;
                                        break;
                                    }
                                }
                                continue;
                            }
                            break;
                        }
                    }
                    if (P === o) {
                        if (M === o) m = K.isGlobstar = true;
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === R) {
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === A) {
                        while(eos() !== true && (t = advance())){
                            if (t === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (t === g) {
                                T = K.isBracket = true;
                                O = K.isGlob = true;
                                G = true;
                                break;
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (u.nonegate !== true && P === c && H === v) {
                        I = K.negated = true;
                        v++;
                        continue;
                    }
                    if (u.noparen !== true && P === f) {
                        O = K.isGlob = true;
                        if (C === true) {
                            while(eos() !== true && (P = advance())){
                                if (P === f) {
                                    N = K.backslashes = true;
                                    P = advance();
                                    continue;
                                }
                                if (P === h) {
                                    G = true;
                                    break;
                                }
                            }
                            continue;
                        }
                        break;
                    }
                    if (O === true) {
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                }
                if (u.noext === true) {
                    k = false;
                    O = false;
                }
                let U = S;
                let X = "";
                let F = "";
                if (v > 0) {
                    X = S.slice(0, v);
                    S = S.slice(v);
                    d -= v;
                }
                if (U && O === true && d > 0) {
                    U = S.slice(0, d);
                    F = S.slice(d);
                } else if (O === true) {
                    U = "";
                    F = S;
                } else {
                    U = S;
                }
                if (U && U !== "" && U !== "/" && U !== S) {
                    if (isPathSeparator(U.charCodeAt(U.length - 1))) {
                        U = U.slice(0, -1);
                    }
                }
                if (u.unescape === true) {
                    if (F) F = n.removeBackslashes(F);
                    if (U && N === true) {
                        U = n.removeBackslashes(U);
                    }
                }
                const Q = {
                    prefix: X,
                    input: t,
                    start: v,
                    base: U,
                    glob: F,
                    isBrace: L,
                    isBracket: T,
                    isGlob: O,
                    isExtglob: k,
                    isGlobstar: m,
                    negated: I,
                    negatedExtglob: B
                };
                if (u.tokens === true) {
                    Q.maxDepth = 0;
                    if (!isPathSeparator(P)) {
                        $.push(K);
                    }
                    Q.tokens = $;
                }
                if (u.parts === true || u.tokens === true) {
                    let e;
                    for(let n = 0; n < y.length; n++){
                        const o = e ? e + 1 : v;
                        const s = y[n];
                        const r = t.slice(o, s);
                        if (u.tokens) {
                            if (n === 0 && v !== 0) {
                                $[n].isPrefix = true;
                                $[n].value = X;
                            } else {
                                $[n].value = r;
                            }
                            depth($[n]);
                            Q.maxDepth += $[n].depth;
                        }
                        if (n !== 0 || r !== "") {
                            x.push(r);
                        }
                        e = s;
                    }
                    if (e && e + 1 < t.length) {
                        const n = t.slice(e + 1);
                        x.push(n);
                        if (u.tokens) {
                            $[$.length - 1].value = n;
                            depth($[$.length - 1]);
                            Q.maxDepth += $[$.length - 1].depth;
                        }
                    }
                    Q.slashes = y;
                    Q.parts = x;
                }
                return Q;
            };
            t.exports = scan;
        },
        96: (t, e, u)=>{
            const { REGEX_BACKSLASH: n, REGEX_REMOVE_BACKSLASH: o, REGEX_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_GLOBAL: r } = u(154);
            e.isObject = (t)=>t !== null && typeof t === "object" && !Array.isArray(t);
            e.hasRegexChars = (t)=>s.test(t);
            e.isRegexChar = (t)=>t.length === 1 && e.hasRegexChars(t);
            e.escapeRegex = (t)=>t.replace(r, "\\$1");
            e.toPosixSlashes = (t)=>t.replace(n, "/");
            e.removeBackslashes = (t)=>t.replace(o, (t)=>t === "\\" ? "" : t);
            e.escapeLast = (t, u, n)=>{
                const o = t.lastIndexOf(u, n);
                if (o === -1) return t;
                if (t[o - 1] === "\\") return e.escapeLast(t, u, o - 1);
                return `${t.slice(0, o)}\\${t.slice(o)}`;
            };
            e.removePrefix = (t, e = {})=>{
                let u = t;
                if (u.startsWith("./")) {
                    u = u.slice(2);
                    e.prefix = "./";
                }
                return u;
            };
            e.wrapOutput = (t, e = {}, u = {})=>{
                const n = u.contains ? "" : "^";
                const o = u.contains ? "" : "$";
                let s = `${n}(?:${t})${o}`;
                if (e.negated === true) {
                    s = `(?:^(?!${s}).*$)`;
                }
                return s;
            };
            e.basename = (t, { windows: e } = {})=>{
                const u = t.split(e ? /[\\/]/ : "/");
                const n = u[u.length - 1];
                if (n === "") {
                    return u[u.length - 2];
                }
                return n;
            };
        }
    };
    var e = {};
    function __nccwpck_require__(u) {
        var n = e[u];
        if (n !== undefined) {
            return n.exports;
        }
        var o = e[u] = {
            exports: {}
        };
        var s = true;
        try {
            t[u](o, o.exports, __nccwpck_require__);
            s = false;
        } finally{
            if (s) delete e[u];
        }
        return o.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/heroes_guess_dapp/node_modules/next/dist/compiled/picomatch") + "/";
    var u = __nccwpck_require__(170);
    module.exports = u;
})();
}),
"[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/match-local-pattern.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasLocalMatch: null,
    matchLocalPattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasLocalMatch: function() {
        return hasLocalMatch;
    },
    matchLocalPattern: function() {
        return matchLocalPattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)");
function matchLocalPattern(pattern, url) {
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    if (!(0, _picomatch.makeRe)(pattern.pathname ?? '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasLocalMatch(localPatterns, urlPathAndQuery) {
    if (!localPatterns) {
        // if the user didn't define "localPatterns", we allow all local images
        return true;
    }
    const url = new URL(urlPathAndQuery, 'http://n');
    return localPatterns.some((p)=>matchLocalPattern(p, url));
} //# sourceMappingURL=match-local-pattern.js.map
}),
"[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasRemoteMatch: null,
    matchRemotePattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasRemoteMatch: function() {
        return hasRemoteMatch;
    },
    matchRemotePattern: function() {
        return matchRemotePattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)");
function matchRemotePattern(pattern, url) {
    if (pattern.protocol !== undefined) {
        if (pattern.protocol.replace(/:$/, '') !== url.protocol.replace(/:$/, '')) {
            return false;
        }
    }
    if (pattern.port !== undefined) {
        if (pattern.port !== url.port) {
            return false;
        }
    }
    if (pattern.hostname === undefined) {
        throw Object.defineProperty(new Error(`Pattern should define hostname but found\n${JSON.stringify(pattern)}`), "__NEXT_ERROR_CODE", {
            value: "E410",
            enumerable: false,
            configurable: true
        });
    } else {
        if (!(0, _picomatch.makeRe)(pattern.hostname).test(url.hostname)) {
            return false;
        }
    }
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    // Should be the same as writeImagesManifest()
    if (!(0, _picomatch.makeRe)(pattern.pathname ?? '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasRemoteMatch(domains, remotePatterns, url) {
    return domains.some((domain)=>url.hostname === domain) || remotePatterns.some((p)=>matchRemotePattern(p, url));
} //# sourceMappingURL=match-remote-pattern.js.map
}),
"[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _findclosestquality = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/find-closest-quality.js [app-client] (ecmascript)");
function defaultLoader({ config, src, width, quality }) {
    if (src.startsWith('/') && src.includes('?') && config.localPatterns?.length === 1 && config.localPatterns[0].pathname === '**' && config.localPatterns[0].search === '') {
        throw Object.defineProperty(new Error(`Image with src "${src}" is using a query string which is not configured in images.localPatterns.` + `\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        const missingValues = [];
        // these should always be provided but make sure they are
        if (!src) missingValues.push('src');
        if (!width) missingValues.push('width');
        if (missingValues.length > 0) {
            throw Object.defineProperty(new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
                src,
                width,
                quality
            })}`), "__NEXT_ERROR_CODE", {
                value: "E188",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('//')) {
            throw Object.defineProperty(new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
                value: "E360",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('/') && config.localPatterns) {
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasLocalMatch } = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/match-local-pattern.js [app-client] (ecmascript)");
                if (!hasLocalMatch(config.localPatterns, src)) {
                    throw Object.defineProperty(new Error(`Invalid src prop (${src}) on \`next/image\` does not match \`images.localPatterns\` configured in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                        value: "E426",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!src.startsWith('/') && (config.domains || config.remotePatterns)) {
            let parsedSrc;
            try {
                parsedSrc = new URL(src);
            } catch (err) {
                console.error(err);
                throw Object.defineProperty(new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
                    value: "E63",
                    enumerable: false,
                    configurable: true
                });
            }
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasRemoteMatch } = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-client] (ecmascript)");
                if (!hasRemoteMatch(config.domains, config.remotePatterns, parsedSrc)) {
                    throw Object.defineProperty(new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`), "__NEXT_ERROR_CODE", {
                        value: "E231",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const q = (0, _findclosestquality.findClosestQuality)(quality, config);
    return `${config.path}?url=${encodeURIComponent(src)}&w=${width}&q=${q}${src.startsWith('/_next/static/media/') && ("TURBOPACK compile-time value", false) ? "TURBOPACK unreachable" : ''}`;
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map
}),
"[project]/heroes_guess_dapp/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/heroes_guess_dapp/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Image", {
    enumerable: true,
    get: function() {
        return Image;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _head = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/head.js [app-client] (ecmascript)"));
const _getimgprops = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imageconfig = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const _imageconfigcontextsharedruntime = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _routercontextsharedruntime = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
const _usemergedref = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
// This is replaced by webpack define plugin
const configEnv = ("TURBOPACK compile-time value", {
    "deviceSizes": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 640),
        ("TURBOPACK compile-time value", 750),
        ("TURBOPACK compile-time value", 828),
        ("TURBOPACK compile-time value", 1080),
        ("TURBOPACK compile-time value", 1200),
        ("TURBOPACK compile-time value", 1920),
        ("TURBOPACK compile-time value", 2048),
        ("TURBOPACK compile-time value", 3840)
    ]),
    "imageSizes": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 32),
        ("TURBOPACK compile-time value", 48),
        ("TURBOPACK compile-time value", 64),
        ("TURBOPACK compile-time value", 96),
        ("TURBOPACK compile-time value", 128),
        ("TURBOPACK compile-time value", 256),
        ("TURBOPACK compile-time value", 384)
    ]),
    "qualities": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 75)
    ]),
    "path": ("TURBOPACK compile-time value", "/_next/image"),
    "loader": ("TURBOPACK compile-time value", "default"),
    "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
    "unoptimized": ("TURBOPACK compile-time value", false),
    "domains": ("TURBOPACK compile-time value", []),
    "remotePatterns": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", {
            "protocol": ("TURBOPACK compile-time value", "https"),
            "hostname": ("TURBOPACK compile-time value", "ddragon.leagueoflegends.com"),
            "port": ("TURBOPACK compile-time value", ""),
            "pathname": ("TURBOPACK compile-time value", "/cdn/**")
        })
    ]),
    "localPatterns": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", {
            "pathname": ("TURBOPACK compile-time value", "**"),
            "search": ("TURBOPACK compile-time value", "")
        })
    ])
});
if (typeof window === 'undefined') {
    ;
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput) {
    const src = img?.src;
    if (!img || img['data-loaded-src'] === src) {
        return;
    }
    img['data-loaded-src'] = src;
    const p = 'decode' in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== 'empty') {
            setBlurComplete(true);
        }
        if (onLoadRef?.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event('load');
            Object.defineProperty(event, 'target', {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef?.current) {
            onLoadingCompleteRef.current(img);
        }
        if ("TURBOPACK compile-time truthy", 1) {
            const origSrc = new URL(src, 'http://n').searchParams.get('url') || src;
            if (img.getAttribute('data-nimg') === 'fill') {
                if (!unoptimized && (!sizesInput || sizesInput === '100vw')) {
                    let widthViewportRatio = img.getBoundingClientRect().width / window.innerWidth;
                    if (widthViewportRatio < 0.6) {
                        if (sizesInput === '100vw') {
                            (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" prop and "sizes" prop of "100vw", but image is not rendered at full viewport width. Please adjust "sizes" to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`);
                        } else {
                            (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`);
                        }
                    }
                }
                if (img.parentElement) {
                    const { position } = window.getComputedStyle(img.parentElement);
                    const valid = [
                        'absolute',
                        'fixed',
                        'relative'
                    ];
                    if (!valid.includes(position)) {
                        (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" and parent element with invalid "position". Provided "${position}" should be one of ${valid.map(String).join(',')}.`);
                    }
                }
                if (img.height === 0) {
                    (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.`);
                }
            }
            const heightModified = img.height.toString() !== img.getAttribute('height');
            const widthModified = img.width.toString() !== img.getAttribute('width');
            if (heightModified && !widthModified || !heightModified && widthModified) {
                (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.`);
            }
        }
    });
}
function getDynamicProps(fetchPriority) {
    if (Boolean(_react.use)) {
        // In React 19.0.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)(({ src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest }, forwardedRef)=>{
    const ownRef = (0, _react.useCallback)((img)=>{
        if (!img) {
            return;
        }
        if (onError) {
            // If the image has an error before react hydrates, then the error is lost.
            // The workaround is to wait until the image is mounted which is after hydration,
            // then we set the src again to trigger the error handler (if there was an error).
            // eslint-disable-next-line no-self-assign
            img.src = img.src;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (!src) {
                console.error(`Image is missing required "src" property:`, img);
            }
            if (img.getAttribute('alt') === null) {
                console.error(`Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.`);
            }
        }
        if (img.complete) {
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        }
    }, [
        src,
        placeholder,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        onError,
        unoptimized,
        sizesInput
    ]);
    const ref = (0, _usemergedref.useMergedRef)(forwardedRef, ownRef);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? 'fill' : '1',
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: ref,
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== 'empty') {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload({ isAppRouter, imgAttributes }) {
    const opts = {
        as: 'image',
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.default.preload) {
        _reactdom.default.preload(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_head.default, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "preload",
            // Note how we omit the `href` attribute, as it would only be relevant
            // for browsers that do not support `imagesrcset`, and in those cases
            // it would cause the incorrect image to be preloaded.
            //
            // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
            href: imgAttributes.srcSet ? undefined : imgAttributes.src,
            ...opts
        }, '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
    });
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = c.qualities?.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes,
            qualities,
            // During the SSR, configEnv (__NEXT_IMAGE_OPTS) does not include
            // security sensitive configs like `localPatterns`, which is needed
            // during the server render to ensure it's validated. Therefore use
            // configContext, which holds the config from the server for validation.
            localPatterns: typeof window === 'undefined' ? configContext?.localPatterns : c.localPatterns
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(ImageElement, {
                ...imgAttributes,
                unoptimized: imgMeta.unoptimized,
                placeholder: imgMeta.placeholder,
                fill: imgMeta.fill,
                onLoadRef: onLoadRef,
                onLoadingCompleteRef: onLoadingCompleteRef,
                setBlurComplete: setBlurComplete,
                setShowAltText: setShowAltText,
                sizesInput: props.sizes,
                ref: forwardedRef
            }),
            imgMeta.preload ? /*#__PURE__*/ (0, _jsxruntime.jsx)(ImagePreload, {
                isAppRouter: isAppRouter,
                imgAttributes: imgAttributes
            }) : null
        ]
    });
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map
}),
"[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", {
            "deviceSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 640),
                ("TURBOPACK compile-time value", 750),
                ("TURBOPACK compile-time value", 828),
                ("TURBOPACK compile-time value", 1080),
                ("TURBOPACK compile-time value", 1200),
                ("TURBOPACK compile-time value", 1920),
                ("TURBOPACK compile-time value", 2048),
                ("TURBOPACK compile-time value", 3840)
            ]),
            "imageSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 32),
                ("TURBOPACK compile-time value", 48),
                ("TURBOPACK compile-time value", 64),
                ("TURBOPACK compile-time value", 96),
                ("TURBOPACK compile-time value", 128),
                ("TURBOPACK compile-time value", 256),
                ("TURBOPACK compile-time value", 384)
            ]),
            "qualities": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 75)
            ]),
            "path": ("TURBOPACK compile-time value", "/_next/image"),
            "loader": ("TURBOPACK compile-time value", "default"),
            "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
            "unoptimized": ("TURBOPACK compile-time value", false),
            "domains": ("TURBOPACK compile-time value", []),
            "remotePatterns": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", {
                    "protocol": ("TURBOPACK compile-time value", "https"),
                    "hostname": ("TURBOPACK compile-time value", "ddragon.leagueoflegends.com"),
                    "port": ("TURBOPACK compile-time value", ""),
                    "pathname": ("TURBOPACK compile-time value", "/cdn/**")
                })
            ]),
            "localPatterns": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", {
                    "pathname": ("TURBOPACK compile-time value", "**"),
                    "search": ("TURBOPACK compile-time value", "")
                })
            ])
        })
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}),
"[project]/heroes_guess_dapp/node_modules/next/image.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/heroes_guess_dapp/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=0cc17_c8a2e960._.js.map