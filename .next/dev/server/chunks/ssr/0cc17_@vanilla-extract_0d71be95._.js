module.exports = [
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/recipes/createRuntimeFn/dist/vanilla-extract-recipes-createRuntimeFn.esm.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/recipes/dist/createRuntimeFn-62c9670f.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "c",
    ()=>createRuntimeFn,
    "m",
    ()=>mapValues
]);
function toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
}
function _defineProperty(obj, key, value) {
    key = toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function mapValues(input, fn) {
    var result = {};
    for(var _key in input){
        result[_key] = fn(input[_key], _key);
    }
    return result;
}
var shouldApplyCompound = (compoundCheck, selections, defaultVariants)=>{
    for (var key of Object.keys(compoundCheck)){
        var _selections$key;
        if (compoundCheck[key] !== ((_selections$key = selections[key]) !== null && _selections$key !== void 0 ? _selections$key : defaultVariants[key])) {
            return false;
        }
    }
    return true;
};
var createRuntimeFn = (config)=>{
    var runtimeFn = (options)=>{
        var className = config.defaultClassName;
        var selections = _objectSpread2(_objectSpread2({}, config.defaultVariants), options);
        for(var variantName in selections){
            var _selections$variantNa;
            var variantSelection = (_selections$variantNa = selections[variantName]) !== null && _selections$variantNa !== void 0 ? _selections$variantNa : config.defaultVariants[variantName];
            if (variantSelection != null) {
                var selection = variantSelection;
                if (typeof selection === 'boolean') {
                    // @ts-expect-error
                    selection = selection === true ? 'true' : 'false';
                }
                var selectionClassName = // @ts-expect-error
                config.variantClassNames[variantName][selection];
                if (selectionClassName) {
                    className += ' ' + selectionClassName;
                }
            }
        }
        for (var [compoundCheck, compoundClassName] of config.compoundVariants){
            if (shouldApplyCompound(compoundCheck, selections, config.defaultVariants)) {
                className += ' ' + compoundClassName;
            }
        }
        return className;
    };
    runtimeFn.variants = ()=>Object.keys(config.variantClassNames);
    runtimeFn.classNames = {
        get base () {
            return config.defaultClassName.split(' ')[0];
        },
        get variants () {
            return mapValues(config.variantClassNames, (classNames)=>mapValues(classNames, (className)=>className.split(' ')[0]));
        }
    };
    return runtimeFn;
};
;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/recipes/dist/createRuntimeFn-62c9670f.esm.js [app-ssr] (ecmascript) <export c as createRuntimeFn>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRuntimeFn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$recipes$2f$dist$2f$createRuntimeFn$2d$62c9670f$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$recipes$2f$dist$2f$createRuntimeFn$2d$62c9670f$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/recipes/dist/createRuntimeFn-62c9670f.esm.js [app-ssr] (ecmascript)");
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/dynamic/node_modules/@vanilla-extract/private/dist/vanilla-extract-private.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "get",
    ()=>get,
    "getVarName",
    ()=>getVarName,
    "walkObject",
    ()=>walkObject
]);
function getVarName(variable) {
    var matches = variable.match(/^var\((.*)\)$/);
    if (matches) {
        return matches[1];
    }
    return variable;
}
function get(obj, path) {
    var result = obj;
    for (var key of path){
        if (!(key in result)) {
            throw new Error("Path ".concat(path.join(' -> '), " does not exist in object"));
        }
        result = result[key];
    }
    return result;
}
function walkObject(obj, fn) {
    var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var clone = {};
    for(var key in obj){
        var _value = obj[key];
        var currentPath = [
            ...path,
            key
        ];
        if (typeof _value === 'string' || typeof _value === 'number' || _value == null) {
            clone[key] = fn(_value, currentPath);
        } else if (typeof _value === 'object' && !Array.isArray(_value)) {
            clone[key] = walkObject(_value, fn, currentPath);
        } else {
            console.warn("Skipping invalid key \"".concat(currentPath.join('.'), "\". Should be a string, number, null or object. Received: \"").concat(Array.isArray(_value) ? 'Array' : typeof _value, "\""));
        }
    }
    return clone;
}
;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/@vanilla-extract/private/dist/vanilla-extract-private.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "get",
    ()=>get,
    "getVarName",
    ()=>getVarName,
    "walkObject",
    ()=>walkObject
]);
function getVarName(variable) {
    var matches = variable.match(/^var\((.*)\)$/);
    if (matches) {
        return matches[1];
    }
    return variable;
}
function get(obj, path) {
    var result = obj;
    for (var key of path){
        if (!(key in result)) {
            throw new Error("Path ".concat(path.join(' -> '), " does not exist in object"));
        }
        result = result[key];
    }
    return result;
}
function walkObject(obj, fn) {
    var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var clone = {};
    for(var key in obj){
        var _value = obj[key];
        var currentPath = [
            ...path,
            key
        ];
        if (typeof _value === 'string' || typeof _value === 'number' || _value == null) {
            clone[key] = fn(_value, currentPath);
        } else if (typeof _value === 'object' && !Array.isArray(_value)) {
            clone[key] = walkObject(_value, fn, currentPath);
        } else {
            console.warn("Skipping invalid key \"".concat(currentPath.join('.'), "\". Should be a string, number, null or object. Received: \"").concat(Array.isArray(_value) ? 'Array' : typeof _value, "\""));
        }
    }
    return clone;
}
;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assignInlineVars",
    ()=>assignInlineVars,
    "setElementVars",
    ()=>setElementVars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$dynamic$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/dynamic/node_modules/@vanilla-extract/private/dist/vanilla-extract-private.esm.js [app-ssr] (ecmascript)");
;
function assignInlineVars(varsOrContract, tokens) {
    var styles = {};
    if (typeof tokens === 'object') {
        var _contract = varsOrContract;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$dynamic$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walkObject"])(tokens, (value, path)=>{
            if (value == null) {
                return;
            }
            var varName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$dynamic$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(_contract, path);
            styles[(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$dynamic$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVarName"])(varName)] = String(value);
        });
    } else {
        var _vars = varsOrContract;
        for(var varName in _vars){
            var value = _vars[varName];
            if (value == null) {
                continue;
            }
            styles[(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$dynamic$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVarName"])(varName)] = value;
        }
    }
    Object.defineProperty(styles, 'toString', {
        value: function value() {
            return Object.keys(this).map((key)=>"".concat(key, ":").concat(this[key])).join(';');
        },
        writable: false
    });
    return styles;
}
function setVar(element, variable, value) {
    element.style.setProperty((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$dynamic$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVarName"])(variable), value);
}
function setElementVars(element, varsOrContract, tokens) {
    if (typeof tokens === 'object') {
        var _contract = varsOrContract;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$dynamic$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walkObject"])(tokens, (value, path)=>{
            if (value == null) {
                return;
            }
            setVar(element, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$dynamic$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(_contract, path), String(value));
        });
    } else {
        var _vars = varsOrContract;
        for(var varName in _vars){
            var value = _vars[varName];
            if (value == null) {
                continue;
            }
            setVar(element, varName, _vars[varName]);
        }
    }
}
;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/injectStyles/dist/vanilla-extract-css-injectStyles.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "injectStyles",
    ()=>injectStyles
]);
var stylesheets = {};
var injectStyles = (_ref)=>{
    var { fileScope, css } = _ref;
    var fileScopeId = fileScope.packageName ? [
        fileScope.packageName,
        fileScope.filePath
    ].join('/') : fileScope.filePath;
    var stylesheet = stylesheets[fileScopeId];
    if (!stylesheet) {
        var styleEl = document.createElement('style');
        if (fileScope.packageName) {
            styleEl.setAttribute('data-package', fileScope.packageName);
        }
        styleEl.setAttribute('data-file', fileScope.filePath);
        styleEl.setAttribute('type', 'text/css');
        stylesheet = stylesheets[fileScopeId] = styleEl;
        document.head.appendChild(styleEl);
    }
    stylesheet.innerHTML = css;
};
;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/adapter/dist/vanilla-extract-css-adapter.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendCss",
    ()=>appendCss,
    "getIdentOption",
    ()=>getIdentOption,
    "markCompositionUsed",
    ()=>markCompositionUsed,
    "mockAdapter",
    ()=>mockAdapter,
    "onBeginFileScope",
    ()=>onBeginFileScope,
    "onEndFileScope",
    ()=>onEndFileScope,
    "registerClassName",
    ()=>registerClassName,
    "registerComposition",
    ()=>registerComposition,
    "removeAdapter",
    ()=>removeAdapter,
    "setAdapter",
    ()=>setAdapter,
    "setAdapterIfNotSet",
    ()=>setAdapterIfNotSet
]);
var mockAdapter = {
    appendCss: ()=>{},
    registerClassName: ()=>{},
    onEndFileScope: ()=>{},
    registerComposition: ()=>{},
    markCompositionUsed: ()=>{},
    getIdentOption: ()=>("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'debug'
};
var adapterStack = [
    mockAdapter
];
var currentAdapter = ()=>{
    if (adapterStack.length < 1) {
        throw new Error('No adapter configured');
    }
    return adapterStack[adapterStack.length - 1];
};
var hasConfiguredAdapter = false;
var setAdapterIfNotSet = (newAdapter)=>{
    if (!hasConfiguredAdapter) {
        setAdapter(newAdapter);
    }
};
var setAdapter = (newAdapter)=>{
    if (!newAdapter) {
        throw new Error('No adapter provided when calling "setAdapter"');
    }
    hasConfiguredAdapter = true;
    adapterStack.push(newAdapter);
};
var removeAdapter = ()=>{
    adapterStack.pop();
};
var appendCss = function appendCss() {
    return currentAdapter().appendCss(...arguments);
};
var registerClassName = function registerClassName() {
    return currentAdapter().registerClassName(...arguments);
};
var registerComposition = function registerComposition() {
    return currentAdapter().registerComposition(...arguments);
};
var markCompositionUsed = function markCompositionUsed() {
    return currentAdapter().markCompositionUsed(...arguments);
};
var onBeginFileScope = function onBeginFileScope() {
    var _currentAdapter$onBeg, _currentAdapter;
    for(var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++){
        props[_key] = arguments[_key];
    }
    return (_currentAdapter$onBeg = (_currentAdapter = currentAdapter()).onBeginFileScope) === null || _currentAdapter$onBeg === void 0 ? void 0 : _currentAdapter$onBeg.call(_currentAdapter, ...props);
};
var onEndFileScope = function onEndFileScope() {
    return currentAdapter().onEndFileScope(...arguments);
};
var getIdentOption = function getIdentOption() {
    var adapter = currentAdapter();
    // Backwards compatibility with old versions of the integration package
    if (!('getIdentOption' in adapter)) {
        return ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'debug';
    }
    return adapter.getIdentOption(...arguments);
};
;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/dist/taggedTemplateLiteral-10998315.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_taggedTemplateLiteral
]);
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/dist/transformCss-0dba36bf.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_objectSpread2,
    "a",
    ()=>_objectWithoutProperties,
    "d",
    ()=>dudupeAndJoinClassList,
    "t",
    ()=>transformCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/@vanilla-extract/private/dist/vanilla-extract-private.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$cssesc$2f$cssesc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/cssesc/cssesc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$modern$2d$ahocorasick$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/modern-ahocorasick/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/adapter/dist/vanilla-extract-css-adapter.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$taggedTemplateLiteral$2d$10998315$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/dist/taggedTemplateLiteral-10998315.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/css-what/lib/es/parse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$dedent$2f$dist$2f$dedent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/dedent/dist/dedent.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$media$2d$query$2d$parser$2f$dist$2f$media$2d$query$2d$parser$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/media-query-parser/dist/media-query-parser.esm.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
}
function _defineProperty(obj, key, value) {
    key = toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function forEach(obj, fn) {
    for(var _key in obj){
        fn(obj[_key], _key);
    }
}
function omit(obj, omitKeys) {
    var result = {};
    for(var _key2 in obj){
        if (omitKeys.indexOf(_key2) === -1) {
            result[_key2] = obj[_key2];
        }
    }
    return result;
}
function mapKeys(obj, fn) {
    var result = {};
    for(var _key3 in obj){
        result[fn(obj[_key3], _key3)] = obj[_key3];
    }
    return result;
}
function composeStylesIntoSet(set) {
    for(var _len = arguments.length, classNames = new Array(_len > 1 ? _len - 1 : 0), _key5 = 1; _key5 < _len; _key5++){
        classNames[_key5 - 1] = arguments[_key5];
    }
    for (var className of classNames){
        if (className.length === 0) {
            continue;
        }
        if (typeof className === 'string') {
            if (className.includes(' ')) {
                composeStylesIntoSet(set, ...className.trim().split(' '));
            } else {
                set.add(className);
            }
        } else if (Array.isArray(className)) {
            composeStylesIntoSet(set, ...className);
        }
    }
}
function dudupeAndJoinClassList(classNames) {
    var set = new Set();
    composeStylesIntoSet(set, ...classNames);
    return Array.from(set).join(' ');
}
var _templateObject$1;
// https://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function escapeRegex(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
var validateSelector = (selector, targetClassName)=>{
    var replaceTarget = ()=>{
        var targetRegex = new RegExp(".".concat(escapeRegex((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$cssesc$2f$cssesc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(targetClassName, {
            isIdentifier: true
        }))), 'g');
        return selector.replace(targetRegex, '&');
    };
    var selectorParts;
    try {
        selectorParts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(selector);
    } catch (err) {
        throw new Error("Invalid selector: ".concat(replaceTarget()));
    }
    selectorParts.forEach((tokens)=>{
        try {
            for(var i = tokens.length - 1; i >= -1; i--){
                if (!tokens[i]) {
                    throw new Error();
                }
                var token = tokens[i];
                if (token.type === 'child' || token.type === 'parent' || token.type === 'sibling' || token.type === 'adjacent' || token.type === 'descendant') {
                    throw new Error();
                }
                if (token.type === 'attribute' && token.name === 'class' && token.value === targetClassName) {
                    return; // Found it
                }
            }
        } catch (err) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$dedent$2f$dist$2f$dedent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_templateObject$1 || (_templateObject$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$taggedTemplateLiteral$2d$10998315$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])([
                "\n        Invalid selector: ",
                "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ",
                " or ",
                ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ",
                ") to 'parent', you should add ",
                " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ",
                ", you should instead write 'globalStyle(",
                ", { ... })'\n      "
            ])), replaceTarget(), '`${parent} &`', '`${parent} &:hover`', '`& ${child}`', '`${parent} &`', '`& h1`', '`${parent} h1`'));
        }
    });
};
/** e.g. @media screen and (min-width: 500px) */ class ConditionalRuleset {
    /**
   * Stores information about where conditions must be in relation to other conditions
   *
   * e.g. mobile -> tablet, desktop
   */ constructor(){
        this.ruleset = new Map();
        this.precedenceLookup = new Map();
    }
    findOrCreateCondition(conditionQuery) {
        var targetCondition = this.ruleset.get(conditionQuery);
        if (!targetCondition) {
            // No target condition so create one
            targetCondition = {
                query: conditionQuery,
                rules: [],
                children: new ConditionalRuleset()
            };
            this.ruleset.set(conditionQuery, targetCondition);
        }
        return targetCondition;
    }
    getConditionalRulesetByPath(conditionPath) {
        var currRuleset = this;
        for (var query of conditionPath){
            var condition = currRuleset.findOrCreateCondition(query);
            currRuleset = condition.children;
        }
        return currRuleset;
    }
    addRule(rule, conditionQuery, conditionPath) {
        var ruleset = this.getConditionalRulesetByPath(conditionPath);
        var targetCondition = ruleset.findOrCreateCondition(conditionQuery);
        if (!targetCondition) {
            throw new Error('Failed to add conditional rule');
        }
        targetCondition.rules.push(rule);
    }
    addConditionPrecedence(conditionPath, conditionOrder) {
        var ruleset = this.getConditionalRulesetByPath(conditionPath);
        for(var i = 0; i < conditionOrder.length; i++){
            var _ruleset$precedenceLo;
            var query = conditionOrder[i];
            var conditionPrecedence = (_ruleset$precedenceLo = ruleset.precedenceLookup.get(query)) !== null && _ruleset$precedenceLo !== void 0 ? _ruleset$precedenceLo : new Set();
            for (var lowerPrecedenceCondition of conditionOrder.slice(i + 1)){
                conditionPrecedence.add(lowerPrecedenceCondition);
            }
            ruleset.precedenceLookup.set(query, conditionPrecedence);
        }
    }
    isCompatible(incomingRuleset) {
        for (var [condition, orderPrecedence] of this.precedenceLookup.entries()){
            for (var lowerPrecedenceCondition of orderPrecedence){
                var _incomingRuleset$prec;
                if ((_incomingRuleset$prec = incomingRuleset.precedenceLookup.get(lowerPrecedenceCondition)) !== null && _incomingRuleset$prec !== void 0 && _incomingRuleset$prec.has(condition)) {
                    return false;
                }
            }
        }
        // Check that children are compatible
        for (var { query, children } of incomingRuleset.ruleset.values()){
            var matchingCondition = this.ruleset.get(query);
            if (matchingCondition && !matchingCondition.children.isCompatible(children)) {
                return false;
            }
        }
        return true;
    }
    merge(incomingRuleset) {
        // Merge rulesets into one array
        for (var { query, rules, children } of incomingRuleset.ruleset.values()){
            var matchingCondition = this.ruleset.get(query);
            if (matchingCondition) {
                matchingCondition.rules.push(...rules);
                matchingCondition.children.merge(children);
            } else {
                this.ruleset.set(query, {
                    query,
                    rules,
                    children
                });
            }
        }
        // Merge order precedences
        for (var [condition, incomingOrderPrecedence] of incomingRuleset.precedenceLookup.entries()){
            var _this$precedenceLooku;
            var orderPrecedence = (_this$precedenceLooku = this.precedenceLookup.get(condition)) !== null && _this$precedenceLooku !== void 0 ? _this$precedenceLooku : new Set();
            this.precedenceLookup.set(condition, new Set([
                ...orderPrecedence,
                ...incomingOrderPrecedence
            ]));
        }
    }
    /**
   * Merge another ConditionalRuleset into this one if they are compatible
   *
   * @returns true if successful, false if the ruleset is incompatible
   */ mergeIfCompatible(incomingRuleset) {
        if (!this.isCompatible(incomingRuleset)) {
            return false;
        }
        this.merge(incomingRuleset);
        return true;
    }
    getSortedRuleset() {
        var _this = this;
        var sortedRuleset = [];
        // Loop through all queries and add them to the sorted ruleset
        var _loop = function _loop(dependents) {
            var conditionForQuery = _this.ruleset.get(query);
            if (!conditionForQuery) {
                throw new Error("Can't find condition for ".concat(query));
            }
            // Find the location of the first dependent condition in the sortedRuleset
            // A dependent condition is a condition that must be placed *after* the current one
            var firstMatchingDependent = sortedRuleset.findIndex((condition)=>dependents.has(condition.query));
            if (firstMatchingDependent > -1) {
                // Insert the condition before the dependent one
                sortedRuleset.splice(firstMatchingDependent, 0, conditionForQuery);
            } else {
                // No match, just insert at the end
                sortedRuleset.push(conditionForQuery);
            }
        };
        for (var [query, dependents] of this.precedenceLookup.entries()){
            _loop(dependents);
        }
        return sortedRuleset;
    }
    renderToArray() {
        var arr = [];
        for (var { query, rules, children } of this.getSortedRuleset()){
            var selectors = {};
            for (var rule of rules){
                selectors[rule.selector] = _objectSpread2(_objectSpread2({}, selectors[rule.selector]), rule.rule);
            }
            Object.assign(selectors, ...children.renderToArray());
            arr.push({
                [query]: selectors
            });
        }
        return arr;
    }
}
var simplePseudoMap = {
    ':-moz-any-link': true,
    ':-moz-full-screen': true,
    ':-moz-placeholder': true,
    ':-moz-read-only': true,
    ':-moz-read-write': true,
    ':-ms-fullscreen': true,
    ':-ms-input-placeholder': true,
    ':-webkit-any-link': true,
    ':-webkit-full-screen': true,
    '::-moz-color-swatch': true,
    '::-moz-list-bullet': true,
    '::-moz-list-number': true,
    '::-moz-page-sequence': true,
    '::-moz-page': true,
    '::-moz-placeholder': true,
    '::-moz-progress-bar': true,
    '::-moz-range-progress': true,
    '::-moz-range-thumb': true,
    '::-moz-range-track': true,
    '::-moz-scrolled-page-sequence': true,
    '::-moz-selection': true,
    '::-ms-backdrop': true,
    '::-ms-browse': true,
    '::-ms-check': true,
    '::-ms-clear': true,
    '::-ms-fill-lower': true,
    '::-ms-fill-upper': true,
    '::-ms-fill': true,
    '::-ms-reveal': true,
    '::-ms-thumb': true,
    '::-ms-ticks-after': true,
    '::-ms-ticks-before': true,
    '::-ms-tooltip': true,
    '::-ms-track': true,
    '::-ms-value': true,
    '::-webkit-backdrop': true,
    '::-webkit-calendar-picker-indicator': true,
    '::-webkit-inner-spin-button': true,
    '::-webkit-input-placeholder': true,
    '::-webkit-meter-bar': true,
    '::-webkit-meter-even-less-good-value': true,
    '::-webkit-meter-inner-element': true,
    '::-webkit-meter-optimum-value': true,
    '::-webkit-meter-suboptimum-value': true,
    '::-webkit-outer-spin-button': true,
    '::-webkit-progress-bar': true,
    '::-webkit-progress-inner-element': true,
    '::-webkit-progress-inner-value': true,
    '::-webkit-progress-value': true,
    '::-webkit-resizer': true,
    '::-webkit-scrollbar-button': true,
    '::-webkit-scrollbar-corner': true,
    '::-webkit-scrollbar-thumb': true,
    '::-webkit-scrollbar-track-piece': true,
    '::-webkit-scrollbar-track': true,
    '::-webkit-scrollbar': true,
    '::-webkit-search-cancel-button': true,
    '::-webkit-search-results-button': true,
    '::-webkit-slider-runnable-track': true,
    '::-webkit-slider-thumb': true,
    '::after': true,
    '::backdrop': true,
    '::before': true,
    '::cue': true,
    '::file-selector-button': true,
    '::first-letter': true,
    '::first-line': true,
    '::grammar-error': true,
    '::marker': true,
    '::placeholder': true,
    '::selection': true,
    '::spelling-error': true,
    '::target-text': true,
    '::view-transition-group': true,
    '::view-transition-image-pair': true,
    '::view-transition-new': true,
    '::view-transition-old': true,
    '::view-transition': true,
    ':active': true,
    ':after': true,
    ':any-link': true,
    ':before': true,
    ':blank': true,
    ':checked': true,
    ':default': true,
    ':defined': true,
    ':disabled': true,
    ':empty': true,
    ':enabled': true,
    ':first-child': true,
    ':first-letter': true,
    ':first-line': true,
    ':first-of-type': true,
    ':first': true,
    ':focus-visible': true,
    ':focus-within': true,
    ':focus': true,
    ':fullscreen': true,
    ':hover': true,
    ':in-range': true,
    ':indeterminate': true,
    ':invalid': true,
    ':last-child': true,
    ':last-of-type': true,
    ':left': true,
    ':link': true,
    ':only-child': true,
    ':only-of-type': true,
    ':optional': true,
    ':out-of-range': true,
    ':placeholder-shown': true,
    ':read-only': true,
    ':read-write': true,
    ':required': true,
    ':right': true,
    ':root': true,
    ':scope': true,
    ':target': true,
    ':valid': true,
    ':visited': true
};
var simplePseudos = Object.keys(simplePseudoMap);
var simplePseudoLookup = simplePseudoMap;
var _templateObject;
var createMediaQueryError = (mediaQuery, msg)=>new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$dedent$2f$dist$2f$dedent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_templateObject || (_templateObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$taggedTemplateLiteral$2d$10998315$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])([
        "\n    Invalid media query: \"",
        "\"\n\n    ",
        "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "
    ])), mediaQuery, msg));
var validateMediaQuery = (mediaQuery)=>{
    // Empty queries will start with '@media '
    if (mediaQuery === '@media ') {
        throw createMediaQueryError(mediaQuery, 'Query is empty');
    }
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$media$2d$query$2d$parser$2f$dist$2f$media$2d$query$2d$parser$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toAST"])(mediaQuery);
    } catch (e) {
        throw createMediaQueryError(mediaQuery, e.message);
    }
};
var _excluded = [
    "vars"
], _excluded2 = [
    "content"
];
var DECLARATION = '__DECLARATION';
var UNITLESS = {
    animationIterationCount: true,
    borderImage: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexShrink: true,
    fontWeight: true,
    gridArea: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnStart: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowStart: true,
    initialLetter: true,
    lineClamp: true,
    lineHeight: true,
    maxLines: true,
    opacity: true,
    order: true,
    orphans: true,
    scale: true,
    tabSize: true,
    WebkitLineClamp: true,
    widows: true,
    zIndex: true,
    zoom: true,
    // svg properties
    fillOpacity: true,
    floodOpacity: true,
    maskBorder: true,
    maskBorderOutset: true,
    maskBorderSlice: true,
    maskBorderWidth: true,
    shapeImageThreshold: true,
    stopOpacity: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
};
function dashify(str) {
    return str.replace(/([A-Z])/g, '-$1').replace(/^ms-/, '-ms-').toLowerCase();
}
function replaceBetweenIndexes(target, startIndex, endIndex, replacement) {
    var start = target.slice(0, startIndex);
    var end = target.slice(endIndex);
    return "".concat(start).concat(replacement).concat(end);
}
var DOUBLE_SPACE = '  ';
var specialKeys = [
    ...simplePseudos,
    '@layer',
    '@media',
    '@supports',
    '@container',
    'selectors'
];
class Stylesheet {
    constructor(localClassNames, composedClassLists){
        this.rules = [];
        this.conditionalRulesets = [
            new ConditionalRuleset()
        ];
        this.fontFaceRules = [];
        this.keyframesRules = [];
        this.propertyRules = [];
        this.localClassNamesMap = new Map(localClassNames.map((localClassName)=>[
                localClassName,
                localClassName
            ]));
        this.localClassNamesSearch = new __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$modern$2d$ahocorasick$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](localClassNames);
        this.layers = new Map();
        // Class list compositions should be priortized by Newer > Older
        // Therefore we reverse the array as they are added in sequence
        this.composedClassLists = composedClassLists.map((_ref)=>{
            var { identifier, classList } = _ref;
            return {
                identifier,
                regex: RegExp("(".concat(classList, ")"), 'g')
            };
        }).reverse();
    }
    processCssObj(root) {
        if (root.type === 'fontFace') {
            this.fontFaceRules.push(root.rule);
            return;
        }
        if (root.type === 'property') {
            this.propertyRules.push(root);
            return;
        }
        if (root.type === 'keyframes') {
            root.rule = Object.fromEntries(Object.entries(root.rule).map((_ref2)=>{
                var [keyframe, rule] = _ref2;
                return [
                    keyframe,
                    this.transformVars(this.transformProperties(rule))
                ];
            }));
            this.keyframesRules.push(root);
            return;
        }
        this.currConditionalRuleset = new ConditionalRuleset();
        if (root.type === 'layer') {
            var layerDefinition = "@layer ".concat(root.name);
            this.addLayer([
                layerDefinition
            ]);
        } else {
            // Add main styles
            var mainRule = omit(root.rule, specialKeys);
            this.addRule({
                selector: root.selector,
                rule: mainRule
            });
            this.transformLayer(root, root.rule['@layer']);
            this.transformMedia(root, root.rule['@media']);
            this.transformSupports(root, root.rule['@supports']);
            this.transformContainer(root, root.rule['@container']);
            this.transformSimplePseudos(root, root.rule);
            this.transformSelectors(root, root.rule);
        }
        var activeConditionalRuleset = this.conditionalRulesets[this.conditionalRulesets.length - 1];
        if (!activeConditionalRuleset.mergeIfCompatible(this.currConditionalRuleset)) {
            // Ruleset merge failed due to incompatibility. We now deopt by starting a fresh ConditionalRuleset
            this.conditionalRulesets.push(this.currConditionalRuleset);
        }
    }
    addConditionalRule(cssRule, conditions) {
        // Run `transformProperties` before `transformVars` as we don't want to pixelify CSS Vars
        var rule = this.transformVars(this.transformProperties(cssRule.rule));
        var selector = this.transformSelector(cssRule.selector);
        if (!this.currConditionalRuleset) {
            throw new Error("Couldn't add conditional rule");
        }
        var conditionQuery = conditions[conditions.length - 1];
        var parentConditions = conditions.slice(0, conditions.length - 1);
        this.currConditionalRuleset.addRule({
            selector,
            rule
        }, conditionQuery, parentConditions);
    }
    addRule(cssRule) {
        // Run `transformProperties` before `transformVars` as we don't want to pixelify CSS Vars
        var rule = this.transformVars(this.transformProperties(cssRule.rule));
        var selector = this.transformSelector(cssRule.selector);
        this.rules.push({
            selector,
            rule
        });
    }
    addLayer(layer) {
        var uniqueLayerKey = layer.join(' - ');
        this.layers.set(uniqueLayerKey, layer);
    }
    transformProperties(cssRule) {
        return this.transformContent(this.pixelifyProperties(cssRule));
    }
    pixelifyProperties(cssRule) {
        forEach(cssRule, (value, key)=>{
            if (typeof value === 'number' && value !== 0 && !UNITLESS[key]) {
                // @ts-expect-error Any ideas?
                cssRule[key] = "".concat(value, "px");
            }
        });
        return cssRule;
    }
    transformVars(_ref3) {
        var { vars } = _ref3, rest = _objectWithoutProperties(_ref3, _excluded);
        if (!vars) {
            return rest;
        }
        return _objectSpread2(_objectSpread2({}, mapKeys(vars, (_value, key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVarName"])(key))), rest);
    }
    transformContent(_ref4) {
        var { content } = _ref4, rest = _objectWithoutProperties(_ref4, _excluded2);
        if (typeof content === 'undefined') {
            return rest;
        }
        // Handle fallback arrays:
        var contentArray = Array.isArray(content) ? content : [
            content
        ];
        return _objectSpread2({
            content: contentArray.map((value)=>// This logic was adapted from Stitches :)
                value && (value.includes('"') || value.includes("'") || /^([A-Za-z\-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(value)) ? value : "\"".concat(value, "\""))
        }, rest);
    }
    transformClassname(identifier) {
        return ".".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$cssesc$2f$cssesc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(identifier, {
            isIdentifier: true
        }));
    }
    transformSelector(selector) {
        // Map class list compositions to single identifiers
        var transformedSelector = selector;
        var _loop = function _loop(identifier) {
            transformedSelector = transformedSelector.replace(regex, ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markCompositionUsed"])(identifier);
                return identifier;
            });
        };
        for (var { identifier, regex } of this.composedClassLists){
            _loop(identifier);
        }
        if (this.localClassNamesMap.has(transformedSelector)) {
            return this.transformClassname(transformedSelector);
        }
        var results = this.localClassNamesSearch.search(transformedSelector);
        var lastReplaceIndex = transformedSelector.length;
        // Perform replacements backwards to simplify index handling
        for(var i = results.length - 1; i >= 0; i--){
            var [endIndex, [firstMatch]] = results[i];
            var startIndex = endIndex - firstMatch.length + 1;
            // Class names can be substrings of other class names
            // e.g. '_1g1ptzo1' and '_1g1ptzo10'
            //
            // Additionally, concatenated classnames can contain substrings equal to other classnames
            // e.g. '&&' where '&' is 'debugName_hash1' and 'debugName_hash1d' is also a local classname
            // Before transforming the selector, this would look like `debugName_hash1debugName_hash1`
            // which contains the substring `debugName_hash1d`’.
            //
            // In either of these cases, the last replace index will occur either before or within the
            // current replacement range (from `startIndex` to `endIndex`).
            // If this occurs, we skip the replacement to avoid transforming the selector incorrectly.
            var skipReplacement = lastReplaceIndex <= endIndex;
            if (skipReplacement) {
                continue;
            }
            lastReplaceIndex = startIndex;
            // If class names already starts with a '.' then skip
            if (transformedSelector[startIndex - 1] !== '.') {
                transformedSelector = replaceBetweenIndexes(transformedSelector, startIndex, endIndex + 1, this.transformClassname(firstMatch));
            }
        }
        return transformedSelector;
    }
    transformSelectors(root, rule, conditions) {
        forEach(rule.selectors, (selectorRule, selector)=>{
            if (root.type !== 'local') {
                throw new Error("Selectors are not allowed within ".concat(root.type === 'global' ? '"globalStyle"' : '"selectors"'));
            }
            var transformedSelector = this.transformSelector(selector.replace(RegExp('&', 'g'), root.selector));
            validateSelector(transformedSelector, root.selector);
            var rule = {
                selector: transformedSelector,
                rule: omit(selectorRule, specialKeys)
            };
            if (conditions) {
                this.addConditionalRule(rule, conditions);
            } else {
                this.addRule(rule);
            }
            var selectorRoot = {
                type: 'selector',
                selector: transformedSelector,
                rule: selectorRule
            };
            this.transformLayer(selectorRoot, selectorRule['@layer'], conditions);
            this.transformSupports(selectorRoot, selectorRule['@supports'], conditions);
            this.transformMedia(selectorRoot, selectorRule['@media'], conditions);
            this.transformContainer(selectorRoot, selectorRule['@container'], conditions);
        });
    }
    transformMedia(root, rules) {
        var parentConditions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        if (rules) {
            var _this$currConditional;
            (_this$currConditional = this.currConditionalRuleset) === null || _this$currConditional === void 0 || _this$currConditional.addConditionPrecedence(parentConditions, Object.keys(rules).map((query)=>"@media ".concat(query)));
            for (var [query, mediaRule] of Object.entries(rules)){
                var mediaQuery = "@media ".concat(query);
                validateMediaQuery(mediaQuery);
                var conditions = [
                    ...parentConditions,
                    mediaQuery
                ];
                this.addConditionalRule({
                    selector: root.selector,
                    rule: omit(mediaRule, specialKeys)
                }, conditions);
                if (root.type === 'local') {
                    this.transformSimplePseudos(root, mediaRule, conditions);
                    this.transformSelectors(root, mediaRule, conditions);
                }
                this.transformLayer(root, mediaRule['@layer'], conditions);
                this.transformSupports(root, mediaRule['@supports'], conditions);
                this.transformContainer(root, mediaRule['@container'], conditions);
            }
        }
    }
    transformContainer(root, rules) {
        var parentConditions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        if (rules) {
            var _this$currConditional2;
            (_this$currConditional2 = this.currConditionalRuleset) === null || _this$currConditional2 === void 0 || _this$currConditional2.addConditionPrecedence(parentConditions, Object.keys(rules).map((query)=>"@container ".concat(query)));
            forEach(rules, (containerRule, query)=>{
                var containerQuery = "@container ".concat(query);
                var conditions = [
                    ...parentConditions,
                    containerQuery
                ];
                this.addConditionalRule({
                    selector: root.selector,
                    rule: omit(containerRule, specialKeys)
                }, conditions);
                if (root.type === 'local') {
                    this.transformSimplePseudos(root, containerRule, conditions);
                    this.transformSelectors(root, containerRule, conditions);
                }
                this.transformLayer(root, containerRule['@layer'], conditions);
                this.transformSupports(root, containerRule['@supports'], conditions);
                this.transformMedia(root, containerRule['@media'], conditions);
            });
        }
    }
    transformLayer(root, rules) {
        var parentConditions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        if (rules) {
            var _this$currConditional3;
            (_this$currConditional3 = this.currConditionalRuleset) === null || _this$currConditional3 === void 0 || _this$currConditional3.addConditionPrecedence(parentConditions, Object.keys(rules).map((name)=>"@layer ".concat(name)));
            forEach(rules, (layerRule, name)=>{
                var conditions = [
                    ...parentConditions,
                    "@layer ".concat(name)
                ];
                this.addLayer(conditions);
                this.addConditionalRule({
                    selector: root.selector,
                    rule: omit(layerRule, specialKeys)
                }, conditions);
                if (root.type === 'local') {
                    this.transformSimplePseudos(root, layerRule, conditions);
                    this.transformSelectors(root, layerRule, conditions);
                }
                this.transformMedia(root, layerRule['@media'], conditions);
                this.transformSupports(root, layerRule['@supports'], conditions);
                this.transformContainer(root, layerRule['@container'], conditions);
            });
        }
    }
    transformSupports(root, rules) {
        var parentConditions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        if (rules) {
            var _this$currConditional4;
            (_this$currConditional4 = this.currConditionalRuleset) === null || _this$currConditional4 === void 0 || _this$currConditional4.addConditionPrecedence(parentConditions, Object.keys(rules).map((query)=>"@supports ".concat(query)));
            forEach(rules, (supportsRule, query)=>{
                var conditions = [
                    ...parentConditions,
                    "@supports ".concat(query)
                ];
                this.addConditionalRule({
                    selector: root.selector,
                    rule: omit(supportsRule, specialKeys)
                }, conditions);
                if (root.type === 'local') {
                    this.transformSimplePseudos(root, supportsRule, conditions);
                    this.transformSelectors(root, supportsRule, conditions);
                }
                this.transformLayer(root, supportsRule['@layer'], conditions);
                this.transformMedia(root, supportsRule['@media'], conditions);
                this.transformContainer(root, supportsRule['@container'], conditions);
            });
        }
    }
    transformSimplePseudos(root, rule, conditions) {
        for (var key of Object.keys(rule)){
            // Process simple pseudos
            if (simplePseudoLookup[key]) {
                if (root.type !== 'local') {
                    throw new Error("Simple pseudos are not valid in ".concat(root.type === 'global' ? '"globalStyle"' : '"selectors"'));
                }
                if (conditions) {
                    this.addConditionalRule({
                        selector: "".concat(root.selector).concat(key),
                        rule: rule[key]
                    }, conditions);
                } else {
                    this.addRule({
                        conditions,
                        selector: "".concat(root.selector).concat(key),
                        rule: rule[key]
                    });
                }
            }
        }
    }
    toCss() {
        var css = [];
        // Render font-face rules
        for (var fontFaceRule of this.fontFaceRules){
            css.push(renderCss({
                '@font-face': fontFaceRule
            }));
        }
        // Render property rules
        for (var property of this.propertyRules){
            css.push(renderCss({
                ["@property ".concat(property.name)]: property.rule
            }));
        }
        // Render keyframes
        for (var keyframe of this.keyframesRules){
            css.push(renderCss({
                ["@keyframes ".concat(keyframe.name)]: keyframe.rule
            }));
        }
        // Render layer definitions
        for (var layer of this.layers.values()){
            var [definition, ...nesting] = layer.reverse();
            var cssObj = {
                [definition]: DECLARATION
            };
            for (var part of nesting){
                cssObj = {
                    [part]: cssObj
                };
            }
            css.push(renderCss(cssObj));
        }
        // Render unconditional rules
        for (var rule of this.rules){
            css.push(renderCss({
                [rule.selector]: rule.rule
            }));
        }
        // Render conditional rules
        for (var conditionalRuleset of this.conditionalRulesets){
            for (var conditionalRule of conditionalRuleset.renderToArray()){
                css.push(renderCss(conditionalRule));
            }
        }
        return css.filter(Boolean);
    }
}
function renderCss(v) {
    var indent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var rules = [];
    var _loop2 = function _loop2(key) {
        var value = v[key];
        if (value && Array.isArray(value)) {
            rules.push(...value.map((v)=>renderCss({
                    [key]: v
                }, indent)));
        } else if (value && typeof value === 'object') {
            var isEmpty = Object.keys(value).length === 0;
            if (!isEmpty) {
                rules.push("".concat(indent).concat(key, " {\n").concat(renderCss(value, indent + DOUBLE_SPACE), "\n").concat(indent, "}"));
            }
        } else if (value === DECLARATION) {
            rules.push("".concat(indent).concat(key, ";"));
        } else {
            rules.push("".concat(indent).concat(key.startsWith('--') ? key : dashify(key), ": ").concat(value, ";"));
        }
    };
    for (var key of Object.keys(v)){
        _loop2(key);
    }
    return rules.join('\n');
}
function transformCss(_ref5) {
    var { localClassNames, cssObjs, composedClassLists } = _ref5;
    var stylesheet = new Stylesheet(localClassNames, composedClassLists);
    for (var root of cssObjs){
        stylesheet.processCssObj(root);
    }
    return stylesheet.toCss();
}
;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/fileScope/dist/vanilla-extract-css-fileScope.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "endFileScope",
    ()=>endFileScope,
    "getAndIncrementRefCounter",
    ()=>getAndIncrementRefCounter,
    "getFileScope",
    ()=>getFileScope,
    "hasFileScope",
    ()=>hasFileScope,
    "setFileScope",
    ()=>setFileScope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$taggedTemplateLiteral$2d$10998315$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/dist/taggedTemplateLiteral-10998315.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$dedent$2f$dist$2f$dedent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/dedent/dist/dedent.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/adapter/dist/vanilla-extract-css-adapter.esm.js [app-ssr] (ecmascript)");
;
;
;
var _templateObject;
var refCounter = 0;
var fileScopes = [];
function setFileScope(filePath, packageName) {
    refCounter = 0;
    var fileScope = {
        filePath,
        packageName
    };
    fileScopes.unshift(fileScope);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onBeginFileScope"])(fileScope);
}
function endFileScope() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onEndFileScope"])(getFileScope());
    refCounter = 0;
    fileScopes.splice(0, 1);
}
function hasFileScope() {
    return fileScopes.length > 0;
}
function getFileScope() {
    if (fileScopes.length === 0) {
        throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$dedent$2f$dist$2f$dedent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_templateObject || (_templateObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$taggedTemplateLiteral$2d$10998315$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])([
            "\n        Styles were unable to be assigned to a file. This is generally caused by one of the following:\n\n        - You may have created styles outside of a '.css.ts' context\n        - You may have incorrect configuration. See https://vanilla-extract.style/documentation/getting-started\n      "
        ]))));
    }
    return fileScopes[0];
}
function getAndIncrementRefCounter() {
    return refCounter++;
}
;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/dist/vanilla-extract-css.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertVarName",
    ()=>assertVarName,
    "assignVars",
    ()=>assignVars,
    "composeStyles",
    ()=>composeStyles,
    "createContainer",
    ()=>createContainer,
    "createGlobalTheme",
    ()=>createGlobalTheme,
    "createGlobalThemeContract",
    ()=>createGlobalThemeContract,
    "createGlobalVar",
    ()=>createGlobalVar,
    "createTheme",
    ()=>createTheme,
    "createThemeContract",
    ()=>createThemeContract,
    "createVar",
    ()=>createVar,
    "createViewTransition",
    ()=>createViewTransition,
    "fallbackVar",
    ()=>fallbackVar,
    "fontFace",
    ()=>fontFace,
    "generateIdentifier",
    ()=>generateIdentifier,
    "globalFontFace",
    ()=>globalFontFace,
    "globalKeyframes",
    ()=>globalKeyframes,
    "globalLayer",
    ()=>globalLayer,
    "globalStyle",
    ()=>globalStyle,
    "keyframes",
    ()=>keyframes,
    "layer",
    ()=>layer,
    "style",
    ()=>style,
    "styleVariants",
    ()=>styleVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$injectStyles$2f$dist$2f$vanilla$2d$extract$2d$css$2d$injectStyles$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/injectStyles/dist/vanilla-extract-css-injectStyles.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$transformCss$2d$0dba36bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/dist/transformCss-0dba36bf.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/adapter/dist/vanilla-extract-css-adapter.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f40$emotion$2f$hash$2f$dist$2f$emotion$2d$hash$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/@emotion/hash/dist/emotion-hash.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/fileScope/dist/vanilla-extract-css-fileScope.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$lru$2d$cache$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/lru-cache/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/@vanilla-extract/private/dist/vanilla-extract-private.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$cssesc$2f$cssesc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/cssesc/cssesc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$diff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__diff$3e$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/diff.js [app-ssr] (ecmascript) <export default as diff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$picocolors$2f$picocolors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/picocolors/picocolors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$taggedTemplateLiteral$2d$10998315$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/dist/taggedTemplateLiteral-10998315.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$dedent$2f$dist$2f$dedent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/dedent/dist/dedent.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deepmerge/dist/cjs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$modern$2d$ahocorasick$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/modern-ahocorasick/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$media$2d$query$2d$parser$2f$dist$2f$media$2d$query$2d$parser$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/media-query-parser/dist/media-query-parser.esm.js [app-ssr] (ecmascript)");
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
;
;
;
var localClassNames = new Set();
var composedClassLists = [];
var bufferedCSSObjs = [];
var browserRuntimeAdapter = {
    appendCss: (cssObj)=>{
        bufferedCSSObjs.push(cssObj);
    },
    registerClassName: (className)=>{
        localClassNames.add(className);
    },
    registerComposition: (composition)=>{
        composedClassLists.push(composition);
    },
    markCompositionUsed: ()=>{},
    onEndFileScope: (fileScope)=>{
        var css = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$transformCss$2d$0dba36bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])({
            localClassNames: Array.from(localClassNames),
            composedClassLists,
            cssObjs: bufferedCSSObjs
        }).join('\n');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$injectStyles$2f$dist$2f$vanilla$2d$extract$2d$css$2d$injectStyles$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injectStyles"])({
            fileScope,
            css
        });
        bufferedCSSObjs = [];
    },
    getIdentOption: ()=>("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'debug'
};
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
var getLastSlashBeforeIndex = (path, index)=>{
    var pathIndex = index - 1;
    while(pathIndex >= 0){
        if (path[pathIndex] === '/') {
            return pathIndex;
        }
        pathIndex--;
    }
    return -1;
};
/**
 * Assumptions:
 * - The path is always normalized to use posix file separators (/) (see `addFileScope`)
 * - The path is always relative to the project root, i.e. there will never be a leading slash (see `addFileScope`)
 * - As long as `.css` is there, we have a valid `.css.*` file path, because otherwise there wouldn't
 *   be a file scope to begin with
 *
 * The LRU cache we use can't cache undefined/null values, so we opt to return an empty string,
 * rather than using a custom Symbol or something similar.
 */ var _getDebugFileName = (path)=>{
    var file;
    var lastIndexOfDotCss = path.lastIndexOf('.css');
    if (lastIndexOfDotCss === -1) {
        return '';
    }
    var lastSlashIndex = getLastSlashBeforeIndex(path, lastIndexOfDotCss);
    file = path.slice(lastSlashIndex + 1, lastIndexOfDotCss);
    // There are no slashes, therefore theres no directory to extract
    if (lastSlashIndex === -1) {
        return file;
    }
    var secondLastSlashIndex = getLastSlashBeforeIndex(path, lastSlashIndex - 1);
    // If secondLastSlashIndex is -1, it means that the path looks like `directory/file.css.ts`,
    // in which case dir will still be sliced starting at 0, which is what we want
    var dir = path.slice(secondLastSlashIndex + 1, lastSlashIndex);
    var debugFileName = file !== 'index' ? file : dir;
    return debugFileName;
};
var memoizedGetDebugFileName = ()=>{
    var cache = new __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$lru$2d$cache$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LRUCache"]({
        max: 500
    });
    return (path)=>{
        var cachedResult = cache.get(path);
        if (cachedResult) {
            return cachedResult;
        }
        var result = _getDebugFileName(path);
        cache.set(path, result);
        return result;
    };
};
var getDebugFileName = memoizedGetDebugFileName();
function getDevPrefix(_ref) {
    var { debugId, debugFileName } = _ref;
    var parts = debugId ? [
        debugId.replace(/\s/g, '_')
    ] : [];
    if (debugFileName) {
        var { filePath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFileScope"])();
        var _debugFileName = getDebugFileName(filePath);
        // debugFileName could be an empty string
        if (_debugFileName) {
            parts.unshift(_debugFileName);
        }
    }
    return parts.join('_');
}
function normalizeIdentifier(identifier) {
    return identifier.match(/^[0-9]/) ? "_".concat(identifier) : identifier;
}
function generateIdentifier(arg) {
    var identOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIdentOption"])();
    var { debugId, debugFileName = true } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$transformCss$2d$0dba36bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$transformCss$2d$0dba36bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])({}, typeof arg === 'string' ? {
        debugId: arg
    } : null), typeof arg === 'object' ? arg : null);
    // Convert ref count to base 36 for optimal hash lengths
    var refCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAndIncrementRefCounter"])().toString(36);
    var { filePath, packageName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFileScope"])();
    var fileScopeHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f40$emotion$2f$hash$2f$dist$2f$emotion$2d$hash$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(packageName ? "".concat(packageName).concat(filePath) : filePath);
    var identifier = "".concat(fileScopeHash).concat(refCount);
    if (identOption === 'debug') {
        var devPrefix = getDevPrefix({
            debugId,
            debugFileName
        });
        if (devPrefix) {
            identifier = "".concat(devPrefix, "__").concat(identifier);
        }
        return normalizeIdentifier(identifier);
    }
    if (typeof identOption === 'function') {
        identifier = identOption({
            hash: identifier,
            debugId,
            filePath,
            packageName
        });
        if (!identifier.match(/^[A-Z_][0-9A-Z_-]+$/i)) {
            throw new Error("Identifier function returned invalid indentifier: \"".concat(identifier, "\""));
        }
        return identifier;
    }
    return normalizeIdentifier(identifier);
}
var normaliseObject = (obj)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walkObject"])(obj, ()=>'');
function validateContract(contract, tokens) {
    var theDiff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$diff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__diff$3e$__["diff"])(normaliseObject(contract), normaliseObject(tokens));
    var valid = Object.keys(theDiff).length === 0;
    return {
        valid,
        diffString: valid ? '' : renderDiff(contract, theDiff)
    };
}
function diffLine(value, nesting, type) {
    var whitespace = [
        ...Array(nesting).keys()
    ].map(()=>'  ').join('');
    var line = "".concat(type ? type : ' ').concat(whitespace).concat(value);
    if ("TURBOPACK compile-time truthy", 1) {
        if (type === '-') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$picocolors$2f$picocolors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].red(line);
        }
        if (type === '+') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$picocolors$2f$picocolors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].green(line);
        }
    }
    return line;
}
function renderDiff(orig, diff) {
    var nesting = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var lines = [];
    if (nesting === 0) {
        lines.push(diffLine('{', 0));
    }
    var innerNesting = nesting + 1;
    var keys = Object.keys(diff).sort();
    for (var key of keys){
        var value = diff[key];
        if (!(key in orig)) {
            lines.push(diffLine("".concat(key, ": ...,"), innerNesting, '+'));
        } else if (typeof value === 'object') {
            lines.push(diffLine("".concat(key, ": {"), innerNesting));
            lines.push(renderDiff(orig[key], diff[key], innerNesting));
            lines.push(diffLine('}', innerNesting));
        } else {
            lines.push(diffLine("".concat(key, ": ...,"), innerNesting, '-'));
        }
    }
    if (nesting === 0) {
        lines.push(diffLine('}', 0));
    }
    return lines.join('\n');
}
var buildPropertyRule = (_ref)=>{
    var { syntax, inherits, initialValue } = _ref;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$transformCss$2d$0dba36bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])({
        syntax: "\"".concat(Array.isArray(syntax) ? syntax.join(' | ') : syntax, "\""),
        inherits: inherits ? 'true' : 'false'
    }, initialValue != null ? {
        initialValue
    } : {});
};
function createVar(debugIdOrDeclaration, debugId) {
    var cssVarName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$cssesc$2f$cssesc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(generateIdentifier({
        debugId: typeof debugIdOrDeclaration === 'string' ? debugIdOrDeclaration : debugId,
        debugFileName: false
    }), {
        isIdentifier: true
    });
    if (debugIdOrDeclaration && typeof debugIdOrDeclaration === 'object') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendCss"])({
            type: 'property',
            name: "--".concat(cssVarName),
            rule: buildPropertyRule(debugIdOrDeclaration)
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFileScope"])());
    }
    return "var(--".concat(cssVarName, ")");
}
function createGlobalVar(name, declaration) {
    if (declaration && typeof declaration === 'object') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendCss"])({
            type: 'property',
            name: "--".concat(name),
            rule: buildPropertyRule(declaration)
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFileScope"])());
    }
    return "var(--".concat(name, ")");
}
function assertVarName(value) {
    if (typeof value !== 'string' || !/^var\(--.*\)$/.test(value)) {
        throw new Error("Invalid variable name: ".concat(value));
    }
}
function fallbackVar() {
    var finalValue = '';
    for(var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++){
        values[_key] = arguments[_key];
    }
    values.reverse().forEach((value)=>{
        if (finalValue === '') {
            finalValue = String(value);
        } else {
            assertVarName(value);
            finalValue = value.replace(/\)$/, ", ".concat(finalValue, ")"));
        }
    });
    return finalValue;
}
function assignVars(varContract, tokens) {
    var varSetters = {};
    var { valid, diffString } = validateContract(varContract, tokens);
    if (!valid) {
        throw new Error("Tokens don't match contract.\n".concat(diffString));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walkObject"])(tokens, (value, path)=>{
        varSetters[(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(varContract, path)] = String(value);
    });
    return varSetters;
}
function createThemeContract(tokens) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walkObject"])(tokens, (_value, path)=>{
        return createVar(path.join('-'));
    });
}
function createGlobalThemeContract(tokens, mapFn) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walkObject"])(tokens, (value, path)=>{
        var rawVarName = typeof mapFn === 'function' ? mapFn(value, path) : value;
        var varName = typeof rawVarName === 'string' ? rawVarName.replace(/^\-\-/, '') : null;
        if (typeof varName !== 'string' || varName !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$cssesc$2f$cssesc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(varName, {
            isIdentifier: true
        })) {
            throw new Error("Invalid variable name for \"".concat(path.join('.'), "\": ").concat(varName));
        }
        return "var(--".concat(varName, ")");
    });
}
var _excluded = [
    "@layer"
];
function createGlobalTheme(selector, arg2, arg3) {
    var themeContractProvided = Boolean(arg3);
    var tokenArg = themeContractProvided ? arg3 : arg2;
    var { layerName, tokens } = extractLayerFromTokens(tokenArg);
    var themeContract = themeContractProvided ? arg2 : createThemeContract(tokens);
    var rule = {
        vars: assignVars(themeContract, tokens)
    };
    if (layerName) {
        rule = {
            '@layer': {
                [layerName]: rule
            }
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendCss"])({
        type: 'global',
        selector: selector,
        rule
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFileScope"])());
    if (!themeContractProvided) {
        return themeContract;
    }
}
function createTheme(arg1, arg2, arg3) {
    var themeClassName = generateIdentifier(typeof arg2 === 'object' ? arg3 : arg2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerClassName"])(themeClassName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFileScope"])());
    var vars = typeof arg2 === 'object' ? createGlobalTheme(themeClassName, arg1, arg2) : createGlobalTheme(themeClassName, arg1);
    return vars ? [
        themeClassName,
        vars
    ] : themeClassName;
}
function extractLayerFromTokens(tokens) {
    if ('@layer' in tokens) {
        var { '@layer': layerName } = tokens, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$transformCss$2d$0dba36bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(tokens, _excluded);
        return {
            layerName,
            tokens: rest
        };
    }
    return {
        tokens
    };
}
var _templateObject;
function composedStyle(rules, debugId) {
    var className = generateIdentifier(debugId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerClassName"])(className, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFileScope"])());
    var classList = [];
    var styleRules = [];
    for (var rule of rules){
        if (typeof rule === 'string') {
            classList.push(rule);
        } else {
            styleRules.push(rule);
        }
    }
    var result = className;
    if (classList.length > 0) {
        result = "".concat(className, " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$transformCss$2d$0dba36bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(classList));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerComposition"])({
            identifier: className,
            classList: result
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFileScope"])());
        if (styleRules.length > 0) {
            // If there are styles attached to this composition then it is
            // always used and should never be removed
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markCompositionUsed"])(className);
        }
    }
    if (styleRules.length > 0) {
        var _rule = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].all(styleRules, {
            // Replace arrays rather than merging
            arrayMerge: (_, sourceArray)=>sourceArray
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendCss"])({
            type: 'local',
            selector: className,
            rule: _rule
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFileScope"])());
    }
    return result;
}
function style(rule, debugId) {
    if (Array.isArray(rule)) {
        return composedStyle(rule, debugId);
    }
    var className = generateIdentifier(debugId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerClassName"])(className, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFileScope"])());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendCss"])({
        type: 'local',
        selector: className,
        rule
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFileScope"])());
    return className;
}
/**
 * @deprecated The same functionality is now provided by the 'style' function when you pass it an array
 */ function composeStyles() {
    var compose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasFileScope"])() ? composedStyle : __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$transformCss$2d$0dba36bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"];
    for(var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++){
        classNames[_key] = arguments[_key];
    }
    return compose(classNames);
}
function globalStyle(selector, rule) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendCss"])({
        type: 'global',
        selector,
        rule
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFileScope"])());
}
function fontFace(rule, debugId) {
    var fontFamily = "\"".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$cssesc$2f$cssesc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(generateIdentifier(debugId), {
        quotes: 'double'
    }), "\"");
    var rules = Array.isArray(rule) ? rule : [
        rule
    ];
    for (var singleRule of rules){
        if ('fontFamily' in singleRule) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$dedent$2f$dist$2f$dedent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_templateObject || (_templateObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$taggedTemplateLiteral$2d$10998315$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])([
                "\n      This function creates and returns a hashed font-family name, so the \"fontFamily\" property should not be provided.\n    \n      If you'd like to define a globally scoped custom font, you can use the \"globalFontFace\" function instead.\n    "
            ]))));
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendCss"])({
            type: 'fontFace',
            rule: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$transformCss$2d$0dba36bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$transformCss$2d$0dba36bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])({}, singleRule), {}, {
                fontFamily
            })
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFileScope"])());
    }
    return fontFamily;
}
function globalFontFace(fontFamily, rule) {
    var rules = Array.isArray(rule) ? rule : [
        rule
    ];
    for (var singleRule of rules){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendCss"])({
            type: 'fontFace',
            rule: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$transformCss$2d$0dba36bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$transformCss$2d$0dba36bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])({}, singleRule), {}, {
                fontFamily
            })
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFileScope"])());
    }
}
function keyframes(rule, debugId) {
    var name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$cssesc$2f$cssesc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(generateIdentifier(debugId), {
        isIdentifier: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendCss"])({
        type: 'keyframes',
        name,
        rule
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFileScope"])());
    return name;
}
function globalKeyframes(name, rule) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendCss"])({
        type: 'keyframes',
        name,
        rule
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFileScope"])());
}
function styleVariants() {
    if (typeof (arguments.length <= 1 ? undefined : arguments[1]) === 'function') {
        var _data = arguments.length <= 0 ? undefined : arguments[0];
        var _mapData = arguments.length <= 1 ? undefined : arguments[1];
        var _debugId = arguments.length <= 2 ? undefined : arguments[2];
        var _classMap = {};
        for(var _key2 in _data){
            _classMap[_key2] = style(_mapData(_data[_key2], _key2), _debugId ? "".concat(_debugId, "_").concat(_key2) : _key2);
        }
        return _classMap;
    }
    var styleMap = arguments.length <= 0 ? undefined : arguments[0];
    var debugId = arguments.length <= 1 ? undefined : arguments[1];
    var classMap = {};
    for(var _key3 in styleMap){
        classMap[_key3] = style(styleMap[_key3], debugId ? "".concat(debugId, "_").concat(_key3) : _key3);
    }
    return classMap;
}
// createContainer is used for local scoping of CSS containers
// For now it is mostly just an alias of generateIdentifier
var createContainer = (debugId)=>generateIdentifier(debugId);
// createViewTransition is used for locally scoping CSS view transitions
// For now it is mostly just an alias of generateIdentifier
var createViewTransition = (debugId)=>generateIdentifier(debugId);
var defaultLayerOptions = {};
var merge = (obj1, obj2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$transformCss$2d$0dba36bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$dist$2f$transformCss$2d$0dba36bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])({}, obj1), obj2);
var getLayerArgs = function getLayerArgs() {
    var options = defaultLayerOptions;
    var debugId = arguments.length <= 0 ? undefined : arguments[0];
    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'object') {
        options = merge(defaultLayerOptions, arguments.length <= 0 ? undefined : arguments[0]);
        debugId = arguments.length <= 1 ? undefined : arguments[1];
    }
    return [
        options,
        debugId
    ];
};
function layer() {
    var [options, debugId] = getLayerArgs(...arguments);
    var name = generateIdentifier(debugId);
    if (options.parent) {
        name = "".concat(options.parent, ".").concat(name);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendCss"])({
        type: 'layer',
        name
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFileScope"])());
    return name;
}
function globalLayer() {
    var [options, name] = getLayerArgs(...arguments);
    if (options.parent) {
        name = "".concat(options.parent, ".").concat(name);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$adapter$2f$dist$2f$vanilla$2d$extract$2d$css$2d$adapter$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendCss"])({
        type: 'layer',
        name
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$fileScope$2f$dist$2f$vanilla$2d$extract$2d$css$2d$fileScope$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFileScope"])());
    return name;
}
;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/cssesc/cssesc.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*! https://mths.be/cssesc v3.0.0 by @mathias */ var object = {};
var hasOwnProperty = object.hasOwnProperty;
var merge = function merge(options, defaults) {
    if (!options) {
        return defaults;
    }
    var result = {};
    for(var key in defaults){
        // `if (defaults.hasOwnProperty(key) { … }` is not needed here, since
        // only recognized option names are used.
        result[key] = hasOwnProperty.call(options, key) ? options[key] : defaults[key];
    }
    return result;
};
var regexAnySingleEscape = /[ -,\.\/:-@\[-\^`\{-~]/;
var regexSingleEscape = /[ -,\.\/:-@\[\]\^`\{-~]/;
var regexAlwaysEscape = /['"\\]/;
var regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;
// https://mathiasbynens.be/notes/css-escapes#css
var cssesc = function cssesc(string, options) {
    options = merge(options, cssesc.options);
    if (options.quotes != 'single' && options.quotes != 'double') {
        options.quotes = 'single';
    }
    var quote = options.quotes == 'double' ? '"' : '\'';
    var isIdentifier = options.isIdentifier;
    var firstChar = string.charAt(0);
    var output = '';
    var counter = 0;
    var length = string.length;
    while(counter < length){
        var character = string.charAt(counter++);
        var codePoint = character.charCodeAt();
        var value = void 0;
        // If it’s not a printable ASCII character…
        if (codePoint < 0x20 || codePoint > 0x7E) {
            if (codePoint >= 0xD800 && codePoint <= 0xDBFF && counter < length) {
                // It’s a high surrogate, and there is a next character.
                var extra = string.charCodeAt(counter++);
                if ((extra & 0xFC00) == 0xDC00) {
                    // next character is low surrogate
                    codePoint = ((codePoint & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000;
                } else {
                    // It’s an unmatched surrogate; only append this code unit, in case
                    // the next code unit is the high surrogate of a surrogate pair.
                    counter--;
                }
            }
            value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
        } else {
            if (options.escapeEverything) {
                if (regexAnySingleEscape.test(character)) {
                    value = '\\' + character;
                } else {
                    value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
                }
            } else if (/[\t\n\f\r\x0B]/.test(character)) {
                value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
            } else if (character == '\\' || !isIdentifier && (character == '"' && quote == character || character == '\'' && quote == character) || isIdentifier && regexSingleEscape.test(character)) {
                value = '\\' + character;
            } else {
                value = character;
            }
        }
        output += value;
    }
    if (isIdentifier) {
        if (/^-[-\d]/.test(output)) {
            output = '\\-' + output.slice(1);
        } else if (/\d/.test(firstChar)) {
            output = '\\3' + firstChar + ' ' + output.slice(1);
        }
    }
    // Remove spaces after `\HEX` escapes that are not followed by a hex digit,
    // since they’re redundant. Note that this is only possible if the escape
    // sequence isn’t preceded by an odd number of backslashes.
    output = output.replace(regexExcessiveSpaces, function($0, $1, $2) {
        if ($1 && $1.length % 2) {
            // It’s not safe to remove the space, so don’t.
            return $0;
        }
        // Strip the space.
        return ($1 || '') + $2;
    });
    if (!isIdentifier && options.wrap) {
        return quote + output + quote;
    }
    return output;
};
// Expose default options (so they can be overridden globally).
cssesc.options = {
    'escapeEverything': false,
    'isIdentifier': false,
    'quotes': 'single',
    'wrap': false
};
cssesc.version = '3.0.0';
module.exports = cssesc;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/modern-ahocorasick/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/index.ts
__turbopack_context__.s([
    "default",
    ()=>AhoCorasick
]);
var AhoCorasick = class {
    constructor(keywords){
        const { failure, gotoFn, output } = this._buildTables(keywords);
        this.gotoFn = gotoFn;
        this.output = output;
        this.failure = failure;
    }
    _buildTables(keywords) {
        const gotoFn = {
            0: {}
        };
        const output = {};
        let state = 0;
        for (const word of keywords){
            let curr = 0;
            for (const l of word){
                if (gotoFn[curr] && l in gotoFn[curr]) {
                    curr = gotoFn[curr][l];
                } else {
                    state++;
                    gotoFn[curr][l] = state;
                    gotoFn[state] = {};
                    curr = state;
                    output[state] = [];
                }
            }
            output[curr].push(word);
        }
        const failure = {};
        const xs = [];
        for(const l in gotoFn[0]){
            const state2 = gotoFn[0][l];
            failure[state2] = 0;
            xs.push(state2);
        }
        while(xs.length > 0){
            const r = xs.shift();
            if (r !== void 0) {
                for(const l in gotoFn[r]){
                    const s = gotoFn[r][l];
                    xs.push(s);
                    let state2 = failure[r];
                    while(state2 > 0 && !(l in gotoFn[state2])){
                        state2 = failure[state2];
                    }
                    if (l in gotoFn[state2]) {
                        const fs = gotoFn[state2][l];
                        failure[s] = fs;
                        output[s] = [
                            ...output[s],
                            ...output[fs]
                        ];
                    } else {
                        failure[s] = 0;
                    }
                }
            }
        }
        return {
            gotoFn,
            output,
            failure
        };
    }
    search(str) {
        let state = 0;
        const results = [];
        for(let i = 0; i < str.length; i++){
            const l = str[i];
            while(state > 0 && !(l in this.gotoFn[state])){
                state = this.failure[state];
            }
            if (!(l in this.gotoFn[state])) {
                continue;
            }
            state = this.gotoFn[state][l];
            if (this.output[state].length > 0) {
                const foundStrs = this.output[state];
                results.push([
                    i,
                    foundStrs
                ]);
            }
        }
        return results;
    }
    match(str) {
        let state = 0;
        for(let i = 0; i < str.length; i++){
            const l = str[i];
            while(state > 0 && !(l in this.gotoFn[state])){
                state = this.failure[state];
            }
            if (!(l in this.gotoFn[state])) {
                continue;
            }
            state = this.gotoFn[state][l];
            if (this.output[state].length > 0) {
                return true;
            }
        }
        return false;
    }
};
;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/css-what/lib/es/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttributeAction",
    ()=>AttributeAction,
    "IgnoreCaseMode",
    ()=>IgnoreCaseMode,
    "SelectorType",
    ()=>SelectorType
]);
var SelectorType;
(function(SelectorType) {
    SelectorType["Attribute"] = "attribute";
    SelectorType["Pseudo"] = "pseudo";
    SelectorType["PseudoElement"] = "pseudo-element";
    SelectorType["Tag"] = "tag";
    SelectorType["Universal"] = "universal";
    // Traversals
    SelectorType["Adjacent"] = "adjacent";
    SelectorType["Child"] = "child";
    SelectorType["Descendant"] = "descendant";
    SelectorType["Parent"] = "parent";
    SelectorType["Sibling"] = "sibling";
    SelectorType["ColumnCombinator"] = "column-combinator";
})(SelectorType || (SelectorType = {}));
const IgnoreCaseMode = {
    Unknown: null,
    QuirksMode: "quirks",
    IgnoreCase: true,
    CaseSensitive: false
};
var AttributeAction;
(function(AttributeAction) {
    AttributeAction["Any"] = "any";
    AttributeAction["Element"] = "element";
    AttributeAction["End"] = "end";
    AttributeAction["Equals"] = "equals";
    AttributeAction["Exists"] = "exists";
    AttributeAction["Hyphen"] = "hyphen";
    AttributeAction["Not"] = "not";
    AttributeAction["Start"] = "start";
})(AttributeAction || (AttributeAction = {}));
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/css-what/lib/es/parse.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isTraversal",
    ()=>isTraversal,
    "parse",
    ()=>parse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/css-what/lib/es/types.js [app-ssr] (ecmascript)");
;
const reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
const reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
const actionTypes = new Map([
    [
        126 /* Tilde */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Element
    ],
    [
        94 /* Circumflex */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Start
    ],
    [
        36 /* Dollar */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].End
    ],
    [
        42 /* Asterisk */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Any
    ],
    [
        33 /* ExclamationMark */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Not
    ],
    [
        124 /* Pipe */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Hyphen
    ]
]);
// Pseudos, whose data property is parsed as well.
const unpackPseudos = new Set([
    "has",
    "not",
    "matches",
    "is",
    "where",
    "host",
    "host-context"
]);
function isTraversal(selector) {
    switch(selector.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent:
        case __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Child:
        case __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant:
        case __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Parent:
        case __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Sibling:
        case __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].ColumnCombinator:
            return true;
        default:
            return false;
    }
}
const stripQuotesFromPseudos = new Set([
    "contains",
    "icontains"
]);
// Unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L152
function funescape(_, escaped, escapedWhitespace) {
    const high = parseInt(escaped, 16) - 0x10000;
    // NaN means non-codepoint
    return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xd800, high & 0x3ff | 0xdc00);
}
function unescapeCSS(str) {
    return str.replace(reEscape, funescape);
}
function isQuote(c) {
    return c === 39 /* SingleQuote */  || c === 34 /* DoubleQuote */ ;
}
function isWhitespace(c) {
    return c === 32 /* Space */  || c === 9 /* Tab */  || c === 10 /* NewLine */  || c === 12 /* FormFeed */  || c === 13 /* CarriageReturn */ ;
}
function parse(selector) {
    const subselects = [];
    const endIndex = parseSelector(subselects, `${selector}`, 0);
    if (endIndex < selector.length) {
        throw new Error(`Unmatched selector: ${selector.slice(endIndex)}`);
    }
    return subselects;
}
function parseSelector(subselects, selector, selectorIndex) {
    let tokens = [];
    function getName(offset) {
        const match = selector.slice(selectorIndex + offset).match(reName);
        if (!match) {
            throw new Error(`Expected name, found ${selector.slice(selectorIndex)}`);
        }
        const [name] = match;
        selectorIndex += offset + name.length;
        return unescapeCSS(name);
    }
    function stripWhitespace(offset) {
        selectorIndex += offset;
        while(selectorIndex < selector.length && isWhitespace(selector.charCodeAt(selectorIndex))){
            selectorIndex++;
        }
    }
    function readValueWithParenthesis() {
        selectorIndex += 1;
        const start = selectorIndex;
        let counter = 1;
        for(; counter > 0 && selectorIndex < selector.length; selectorIndex++){
            if (selector.charCodeAt(selectorIndex) === 40 /* LeftParenthesis */  && !isEscaped(selectorIndex)) {
                counter++;
            } else if (selector.charCodeAt(selectorIndex) === 41 /* RightParenthesis */  && !isEscaped(selectorIndex)) {
                counter--;
            }
        }
        if (counter) {
            throw new Error("Parenthesis not matched");
        }
        return unescapeCSS(selector.slice(start, selectorIndex - 1));
    }
    function isEscaped(pos) {
        let slashCount = 0;
        while(selector.charCodeAt(--pos) === 92 /* BackSlash */ )slashCount++;
        return (slashCount & 1) === 1;
    }
    function ensureNotTraversal() {
        if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) {
            throw new Error("Did not expect successive traversals.");
        }
    }
    function addTraversal(type) {
        if (tokens.length > 0 && tokens[tokens.length - 1].type === __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
            tokens[tokens.length - 1].type = type;
            return;
        }
        ensureNotTraversal();
        tokens.push({
            type
        });
    }
    function addSpecialAttribute(name, action) {
        tokens.push({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Attribute,
            name,
            action,
            value: getName(1),
            namespace: null,
            ignoreCase: "quirks"
        });
    }
    /**
     * We have finished parsing the current part of the selector.
     *
     * Remove descendant tokens at the end if they exist,
     * and return the last index, so that parsing can be
     * picked up from here.
     */ function finalizeSubselector() {
        if (tokens.length && tokens[tokens.length - 1].type === __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
            tokens.pop();
        }
        if (tokens.length === 0) {
            throw new Error("Empty sub-selector");
        }
        subselects.push(tokens);
    }
    stripWhitespace(0);
    if (selector.length === selectorIndex) {
        return selectorIndex;
    }
    loop: while(selectorIndex < selector.length){
        const firstChar = selector.charCodeAt(selectorIndex);
        switch(firstChar){
            // Whitespace
            case 32 /* Space */ :
            case 9 /* Tab */ :
            case 10 /* NewLine */ :
            case 12 /* FormFeed */ :
            case 13 /* CarriageReturn */ :
                {
                    if (tokens.length === 0 || tokens[0].type !== __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
                        ensureNotTraversal();
                        tokens.push({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant
                        });
                    }
                    stripWhitespace(1);
                    break;
                }
            // Traversals
            case 62 /* GreaterThan */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Child);
                    stripWhitespace(1);
                    break;
                }
            case 60 /* LessThan */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Parent);
                    stripWhitespace(1);
                    break;
                }
            case 126 /* Tilde */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Sibling);
                    stripWhitespace(1);
                    break;
                }
            case 43 /* Plus */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent);
                    stripWhitespace(1);
                    break;
                }
            // Special attribute selectors: .class, #id
            case 46 /* Period */ :
                {
                    addSpecialAttribute("class", __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Element);
                    break;
                }
            case 35 /* Hash */ :
                {
                    addSpecialAttribute("id", __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Equals);
                    break;
                }
            case 91 /* LeftSquareBracket */ :
                {
                    stripWhitespace(1);
                    // Determine attribute name and namespace
                    let name;
                    let namespace = null;
                    if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */ ) {
                        // Equivalent to no namespace
                        name = getName(1);
                    } else if (selector.startsWith("*|", selectorIndex)) {
                        namespace = "*";
                        name = getName(2);
                    } else {
                        name = getName(0);
                        if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */  && selector.charCodeAt(selectorIndex + 1) !== 61 /* Equal */ ) {
                            namespace = name;
                            name = getName(1);
                        }
                    }
                    stripWhitespace(0);
                    // Determine comparison operation
                    let action = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Exists;
                    const possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
                    if (possibleAction) {
                        action = possibleAction;
                        if (selector.charCodeAt(selectorIndex + 1) !== 61 /* Equal */ ) {
                            throw new Error("Expected `=`");
                        }
                        stripWhitespace(2);
                    } else if (selector.charCodeAt(selectorIndex) === 61 /* Equal */ ) {
                        action = __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Equals;
                        stripWhitespace(1);
                    }
                    // Determine value
                    let value = "";
                    let ignoreCase = null;
                    if (action !== "exists") {
                        if (isQuote(selector.charCodeAt(selectorIndex))) {
                            const quote = selector.charCodeAt(selectorIndex);
                            let sectionEnd = selectorIndex + 1;
                            while(sectionEnd < selector.length && (selector.charCodeAt(sectionEnd) !== quote || isEscaped(sectionEnd))){
                                sectionEnd += 1;
                            }
                            if (selector.charCodeAt(sectionEnd) !== quote) {
                                throw new Error("Attribute value didn't end");
                            }
                            value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
                            selectorIndex = sectionEnd + 1;
                        } else {
                            const valueStart = selectorIndex;
                            while(selectorIndex < selector.length && (!isWhitespace(selector.charCodeAt(selectorIndex)) && selector.charCodeAt(selectorIndex) !== 93 /* RightSquareBracket */  || isEscaped(selectorIndex))){
                                selectorIndex += 1;
                            }
                            value = unescapeCSS(selector.slice(valueStart, selectorIndex));
                        }
                        stripWhitespace(0);
                        // See if we have a force ignore flag
                        const forceIgnore = selector.charCodeAt(selectorIndex) | 0x20;
                        // If the forceIgnore flag is set (either `i` or `s`), use that value
                        if (forceIgnore === 115 /* LowerS */ ) {
                            ignoreCase = false;
                            stripWhitespace(1);
                        } else if (forceIgnore === 105 /* LowerI */ ) {
                            ignoreCase = true;
                            stripWhitespace(1);
                        }
                    }
                    if (selector.charCodeAt(selectorIndex) !== 93 /* RightSquareBracket */ ) {
                        throw new Error("Attribute selector didn't terminate");
                    }
                    selectorIndex += 1;
                    const attributeSelector = {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Attribute,
                        name,
                        action,
                        value,
                        namespace,
                        ignoreCase
                    };
                    tokens.push(attributeSelector);
                    break;
                }
            case 58 /* Colon */ :
                {
                    if (selector.charCodeAt(selectorIndex + 1) === 58 /* Colon */ ) {
                        tokens.push({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].PseudoElement,
                            name: getName(2).toLowerCase(),
                            data: selector.charCodeAt(selectorIndex) === 40 /* LeftParenthesis */  ? readValueWithParenthesis() : null
                        });
                        continue;
                    }
                    const name = getName(1).toLowerCase();
                    let data = null;
                    if (selector.charCodeAt(selectorIndex) === 40 /* LeftParenthesis */ ) {
                        if (unpackPseudos.has(name)) {
                            if (isQuote(selector.charCodeAt(selectorIndex + 1))) {
                                throw new Error(`Pseudo-selector ${name} cannot be quoted`);
                            }
                            data = [];
                            selectorIndex = parseSelector(data, selector, selectorIndex + 1);
                            if (selector.charCodeAt(selectorIndex) !== 41 /* RightParenthesis */ ) {
                                throw new Error(`Missing closing parenthesis in :${name} (${selector})`);
                            }
                            selectorIndex += 1;
                        } else {
                            data = readValueWithParenthesis();
                            if (stripQuotesFromPseudos.has(name)) {
                                const quot = data.charCodeAt(0);
                                if (quot === data.charCodeAt(data.length - 1) && isQuote(quot)) {
                                    data = data.slice(1, -1);
                                }
                            }
                            data = unescapeCSS(data);
                        }
                    }
                    tokens.push({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo,
                        name,
                        data
                    });
                    break;
                }
            case 44 /* Comma */ :
                {
                    finalizeSubselector();
                    tokens = [];
                    stripWhitespace(1);
                    break;
                }
            default:
                {
                    if (selector.startsWith("/*", selectorIndex)) {
                        const endIndex = selector.indexOf("*/", selectorIndex + 2);
                        if (endIndex < 0) {
                            throw new Error("Comment was not terminated");
                        }
                        selectorIndex = endIndex + 2;
                        // Remove leading whitespace
                        if (tokens.length === 0) {
                            stripWhitespace(0);
                        }
                        break;
                    }
                    let namespace = null;
                    let name;
                    if (firstChar === 42 /* Asterisk */ ) {
                        selectorIndex += 1;
                        name = "*";
                    } else if (firstChar === 124 /* Pipe */ ) {
                        name = "";
                        if (selector.charCodeAt(selectorIndex + 1) === 124 /* Pipe */ ) {
                            addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].ColumnCombinator);
                            stripWhitespace(2);
                            break;
                        }
                    } else if (reName.test(selector.slice(selectorIndex))) {
                        name = getName(0);
                    } else {
                        break loop;
                    }
                    if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */  && selector.charCodeAt(selectorIndex + 1) !== 124 /* Pipe */ ) {
                        namespace = name;
                        if (selector.charCodeAt(selectorIndex + 1) === 42 /* Asterisk */ ) {
                            name = "*";
                            selectorIndex += 2;
                        } else {
                            name = getName(1);
                        }
                    }
                    tokens.push(name === "*" ? {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Universal,
                        namespace
                    } : {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Tag,
                        name,
                        namespace
                    });
                }
        }
    }
    finalizeSubselector();
    return selectorIndex;
}
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/dedent/dist/dedent.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
const dedent = createDedent({});
const __TURBOPACK__default__export__ = dedent;
function createDedent(options) {
    dedent.withOptions = (newOptions)=>createDedent(_objectSpread(_objectSpread({}, options), newOptions));
    return dedent;
    //TURBOPACK unreachable
    ;
    function dedent(strings, ...values) {
        const raw = typeof strings === "string" ? [
            strings
        ] : strings.raw;
        const { alignValues = false, escapeSpecialCharacters = Array.isArray(strings), trimWhitespace = true } = options;
        // first, perform interpolation
        let result = "";
        for(let i = 0; i < raw.length; i++){
            let next = raw[i];
            if (escapeSpecialCharacters) {
                // handle escaped newlines, backticks, and interpolation characters
                next = next.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{");
            }
            result += next;
            if (i < values.length) {
                const value = alignValues ? alignValue(values[i], result) : values[i];
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                result += value;
            }
        }
        // now strip indentation
        const lines = result.split("\n");
        let mindent = null;
        for (const l of lines){
            const m = l.match(/^(\s+)\S+/);
            if (m) {
                const indent = m[1].length;
                if (!mindent) {
                    // this is the first indented line
                    mindent = indent;
                } else {
                    mindent = Math.min(mindent, indent);
                }
            }
        }
        if (mindent !== null) {
            const m = mindent; // appease TypeScript
            result = lines// https://github.com/typescript-eslint/typescript-eslint/issues/7140
            // eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with
            .map((l)=>l[0] === " " || l[0] === "\t" ? l.slice(m) : l).join("\n");
        }
        // dedent eats leading and trailing whitespace too
        if (trimWhitespace) {
            result = result.trim();
        }
        // handle escaped newlines at the end to ensure they don't get stripped too
        if (escapeSpecialCharacters) {
            result = result.replace(/\\n/g, "\n");
        }
        return result;
    }
}
/**
 * Adjusts the indentation of a multi-line interpolated value to match the current line.
 */ function alignValue(value, precedingText) {
    if (typeof value !== "string" || !value.includes("\n")) {
        return value;
    }
    const currentLine = precedingText.slice(precedingText.lastIndexOf("\n") + 1);
    const indentMatch = currentLine.match(/^(\s+)/);
    if (indentMatch) {
        const indent = indentMatch[1];
        return value.replace(/\n/g, `\n${indent}`);
    }
    return value;
}
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/media-query-parser/dist/media-query-parser.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*! @license MediaQueryParser - MIT License - Tom Golden (github@tbjgolden.com) */ /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ __turbopack_context__.s([
    "consumeEscape",
    ()=>consumeEscape,
    "consumeIdent",
    ()=>consumeIdent,
    "consumeIdentLike",
    ()=>consumeIdentLike,
    "consumeIdentUnsafe",
    ()=>consumeIdentUnsafe,
    "consumeNumber",
    ()=>consumeNumber,
    "consumeNumeric",
    ()=>consumeNumeric,
    "consumeString",
    ()=>consumeString,
    "consumeUrl",
    ()=>consumeUrl,
    "lexicalAnalysis",
    ()=>lexicalAnalysis,
    "removeWhitespace",
    ()=>removeWhitespace,
    "syntacticAnalysis",
    ()=>syntacticAnalysis,
    "toAST",
    ()=>toAST,
    "toUnflattenedAST",
    ()=>toUnflattenedAST,
    "tokenizeMediaCondition",
    ()=>tokenizeMediaCondition,
    "tokenizeMediaFeature",
    ()=>tokenizeMediaFeature,
    "tokenizeMediaQuery",
    ()=>tokenizeMediaQuery,
    "tokenizeRange",
    ()=>tokenizeRange,
    "wouldStartIdentifier",
    ()=>wouldStartIdentifier
]);
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
var weirdNewlines = /(\u000D|\u000C|\u000D\u000A)/g;
var nullOrSurrogates = /[\u0000\uD800-\uDFFF]/g;
var commentRegex = /(\/\*)[\s\S]*?(\*\/)/g;
var lexicalAnalysis = function lexicalAnalysis(str, index) {
    if (index === void 0) {
        index = 0;
    }
    str = str.replace(weirdNewlines, '\n').replace(nullOrSurrogates, "\uFFFD");
    str = str.replace(commentRegex, '');
    var tokens = [];
    for(; index < str.length; index += 1){
        var code = str.charCodeAt(index);
        if (code === 0x0009 || code === 0x0020 || code === 0x000a) {
            var code_1 = str.charCodeAt(++index);
            while(code_1 === 0x0009 || code_1 === 0x0020 || code_1 === 0x000a){
                code_1 = str.charCodeAt(++index);
            }
            index -= 1;
            tokens.push({
                type: '<whitespace-token>'
            });
        } else if (code === 0x0022) {
            var result = consumeString(str, index);
            if (result === null) {
                return null;
            }
            var _a = __read(result, 2), lastIndex = _a[0], value = _a[1];
            tokens.push({
                type: '<string-token>',
                value: value
            });
            index = lastIndex;
        } else if (code === 0x0023) {
            if (index + 1 < str.length) {
                var nextCode = str.charCodeAt(index + 1);
                if (nextCode === 0x005f || nextCode >= 0x0041 && nextCode <= 0x005a || nextCode >= 0x0061 && nextCode <= 0x007a || nextCode >= 0x0080 || nextCode >= 0x0030 && nextCode <= 0x0039 || nextCode === 0x005c && index + 2 < str.length && str.charCodeAt(index + 2) !== 0x000a) {
                    var flag = wouldStartIdentifier(str, index + 1) ? 'id' : 'unrestricted';
                    var result = consumeIdentUnsafe(str, index + 1);
                    if (result !== null) {
                        var _b = __read(result, 2), lastIndex = _b[0], value = _b[1];
                        tokens.push({
                            type: '<hash-token>',
                            value: value.toLowerCase(),
                            flag: flag
                        });
                        index = lastIndex;
                        continue;
                    }
                }
            }
            tokens.push({
                type: '<delim-token>',
                value: code
            });
        } else if (code === 0x0027) {
            var result = consumeString(str, index);
            if (result === null) {
                return null;
            }
            var _c = __read(result, 2), lastIndex = _c[0], value = _c[1];
            tokens.push({
                type: '<string-token>',
                value: value
            });
            index = lastIndex;
        } else if (code === 0x0028) {
            tokens.push({
                type: '<(-token>'
            });
        } else if (code === 0x0029) {
            tokens.push({
                type: '<)-token>'
            });
        } else if (code === 0x002b) {
            var plusNumeric = consumeNumeric(str, index);
            if (plusNumeric === null) {
                tokens.push({
                    type: '<delim-token>',
                    value: code
                });
            } else {
                var _d = __read(plusNumeric, 2), lastIndex = _d[0], tokenTuple = _d[1];
                if (tokenTuple[0] === '<dimension-token>') {
                    tokens.push({
                        type: '<dimension-token>',
                        value: tokenTuple[1],
                        unit: tokenTuple[2].toLowerCase(),
                        flag: 'number'
                    });
                } else if (tokenTuple[0] === '<number-token>') {
                    tokens.push({
                        type: tokenTuple[0],
                        value: tokenTuple[1],
                        flag: tokenTuple[2]
                    });
                } else {
                    tokens.push({
                        type: tokenTuple[0],
                        value: tokenTuple[1],
                        flag: 'number'
                    });
                }
                index = lastIndex;
            }
        } else if (code === 0x002c) {
            tokens.push({
                type: '<comma-token>'
            });
        } else if (code === 0x002d) {
            var minusNumeric = consumeNumeric(str, index);
            if (minusNumeric !== null) {
                var _e = __read(minusNumeric, 2), lastIndex = _e[0], tokenTuple = _e[1];
                if (tokenTuple[0] === '<dimension-token>') {
                    tokens.push({
                        type: '<dimension-token>',
                        value: tokenTuple[1],
                        unit: tokenTuple[2].toLowerCase(),
                        flag: 'number'
                    });
                } else if (tokenTuple[0] === '<number-token>') {
                    tokens.push({
                        type: tokenTuple[0],
                        value: tokenTuple[1],
                        flag: tokenTuple[2]
                    });
                } else {
                    tokens.push({
                        type: tokenTuple[0],
                        value: tokenTuple[1],
                        flag: 'number'
                    });
                }
                index = lastIndex;
                continue;
            }
            if (index + 2 < str.length) {
                var nextCode = str.charCodeAt(index + 1);
                var nextNextCode = str.charCodeAt(index + 2);
                if (nextCode === 0x002d && nextNextCode === 0x003e) {
                    tokens.push({
                        type: '<CDC-token>'
                    });
                    index += 2;
                    continue;
                }
            }
            var result = consumeIdentLike(str, index);
            if (result !== null) {
                var _f = __read(result, 3), lastIndex = _f[0], value = _f[1], type = _f[2];
                tokens.push({
                    type: type,
                    value: value
                });
                index = lastIndex;
                continue;
            }
            tokens.push({
                type: '<delim-token>',
                value: code
            });
        } else if (code === 0x002e) {
            var minusNumeric = consumeNumeric(str, index);
            if (minusNumeric === null) {
                tokens.push({
                    type: '<delim-token>',
                    value: code
                });
            } else {
                var _g = __read(minusNumeric, 2), lastIndex = _g[0], tokenTuple = _g[1];
                if (tokenTuple[0] === '<dimension-token>') {
                    tokens.push({
                        type: '<dimension-token>',
                        value: tokenTuple[1],
                        unit: tokenTuple[2].toLowerCase(),
                        flag: 'number'
                    });
                } else if (tokenTuple[0] === '<number-token>') {
                    tokens.push({
                        type: tokenTuple[0],
                        value: tokenTuple[1],
                        flag: tokenTuple[2]
                    });
                } else {
                    tokens.push({
                        type: tokenTuple[0],
                        value: tokenTuple[1],
                        flag: 'number'
                    });
                }
                index = lastIndex;
                continue;
            }
        } else if (code === 0x003a) {
            tokens.push({
                type: '<colon-token>'
            });
        } else if (code === 0x003b) {
            tokens.push({
                type: '<semicolon-token>'
            });
        } else if (code === 0x003c) {
            if (index + 3 < str.length) {
                var nextCode = str.charCodeAt(index + 1);
                var nextNextCode = str.charCodeAt(index + 2);
                var nextNextNextCode = str.charCodeAt(index + 3);
                if (nextCode === 0x0021 && nextNextCode === 0x002d && nextNextNextCode === 0x002d) {
                    tokens.push({
                        type: '<CDO-token>'
                    });
                    index += 3;
                    continue;
                }
            }
            tokens.push({
                type: '<delim-token>',
                value: code
            });
        } else if (code === 0x0040) {
            var result = consumeIdent(str, index + 1);
            if (result !== null) {
                var _h = __read(result, 2), lastIndex = _h[0], value = _h[1];
                tokens.push({
                    type: '<at-keyword-token>',
                    value: value.toLowerCase()
                });
                index = lastIndex;
                continue;
            }
            tokens.push({
                type: '<delim-token>',
                value: code
            });
        } else if (code === 0x005b) {
            tokens.push({
                type: '<[-token>'
            });
        } else if (code === 0x005c) {
            var result = consumeEscape(str, index);
            if (result === null) {
                return null;
            }
            var _j = __read(result, 2), lastIndex = _j[0], value = _j[1];
            str = str.slice(0, index) + value + str.slice(lastIndex + 1);
            index -= 1;
        } else if (code === 0x005d) {
            tokens.push({
                type: '<]-token>'
            });
        } else if (code === 0x007b) {
            tokens.push({
                type: '<{-token>'
            });
        } else if (code === 0x007d) {
            tokens.push({
                type: '<}-token>'
            });
        } else if (code >= 0x0030 && code <= 0x0039) {
            var result = consumeNumeric(str, index);
            var _k = __read(result, 2), lastIndex = _k[0], tokenTuple = _k[1];
            if (tokenTuple[0] === '<dimension-token>') {
                tokens.push({
                    type: '<dimension-token>',
                    value: tokenTuple[1],
                    unit: tokenTuple[2].toLowerCase(),
                    flag: 'number'
                });
            } else if (tokenTuple[0] === '<number-token>') {
                tokens.push({
                    type: tokenTuple[0],
                    value: tokenTuple[1],
                    flag: tokenTuple[2]
                });
            } else {
                tokens.push({
                    type: tokenTuple[0],
                    value: tokenTuple[1],
                    flag: 'number'
                });
            }
            index = lastIndex;
        } else if (code === 0x005f || code >= 0x0041 && code <= 0x005a || code >= 0x0061 && code <= 0x007a || code >= 0x0080) {
            var result = consumeIdentLike(str, index);
            if (result === null) {
                return null;
            }
            var _l = __read(result, 3), lastIndex = _l[0], value = _l[1], type = _l[2];
            tokens.push({
                type: type,
                value: value
            });
            index = lastIndex;
        } else {
            tokens.push({
                type: '<delim-token>',
                value: code
            });
        }
    }
    tokens.push({
        type: '<EOF-token>'
    });
    return tokens;
};
var consumeString = function consumeString(str, index) {
    if (str.length <= index + 1) return null;
    var firstCode = str.charCodeAt(index);
    var charCodes = [];
    for(var i = index + 1; i < str.length; i += 1){
        var code = str.charCodeAt(i);
        if (code === firstCode) {
            return [
                i,
                String.fromCharCode.apply(null, charCodes)
            ];
        } else if (code === 0x005c) {
            var result = consumeEscape(str, i);
            if (result === null) return null;
            var _a = __read(result, 2), lastIndex = _a[0], charCode = _a[1];
            charCodes.push(charCode);
            i = lastIndex;
        } else if (code === 0x000a) {
            return null;
        } else {
            charCodes.push(code);
        }
    }
    return null;
};
var wouldStartIdentifier = function wouldStartIdentifier(str, index) {
    if (str.length <= index) return false;
    var code = str.charCodeAt(index);
    if (code === 0x002d) {
        if (str.length <= index + 1) return false;
        var nextCode = str.charCodeAt(index + 1);
        if (nextCode === 0x002d || nextCode === 0x005f || nextCode >= 0x0041 && nextCode <= 0x005a || nextCode >= 0x0061 && nextCode <= 0x007a || nextCode >= 0x0080) {
            return true;
        } else if (nextCode === 0x005c) {
            if (str.length <= index + 2) return false;
            var nextNextCode = str.charCodeAt(index + 2);
            return nextNextCode !== 0x000a;
        } else {
            return false;
        }
    } else if (code === 0x005f || code >= 0x0041 && code <= 0x005a || code >= 0x0061 && code <= 0x007a || code >= 0x0080) {
        return true;
    } else if (code === 0x005c) {
        if (str.length <= index + 1) return false;
        var nextCode = str.charCodeAt(index + 1);
        return nextCode !== 0x000a;
    } else {
        return false;
    }
};
var consumeEscape = function consumeEscape(str, index) {
    if (str.length <= index + 1) return null;
    if (str.charCodeAt(index) !== 0x005c) return null;
    var code = str.charCodeAt(index + 1);
    if (code === 0x000a) {
        return null;
    } else if (code >= 0x0030 && code <= 0x0039 || code >= 0x0041 && code <= 0x0046 || code >= 0x0061 && code <= 0x0066) {
        var hexCharCodes = [
            code
        ];
        var min = Math.min(index + 7, str.length);
        var i = index + 2;
        for(; i < min; i += 1){
            var code_2 = str.charCodeAt(i);
            if (code_2 >= 0x0030 && code_2 <= 0x0039 || code_2 >= 0x0041 && code_2 <= 0x0046 || code_2 >= 0x0061 && code_2 <= 0x0066) {
                hexCharCodes.push(code_2);
            } else {
                break;
            }
        }
        if (i < str.length) {
            var code_3 = str.charCodeAt(i);
            if (code_3 === 0x0009 || code_3 === 0x0020 || code_3 === 0x000a) {
                i += 1;
            }
        }
        return [
            i - 1,
            parseInt(String.fromCharCode.apply(null, hexCharCodes), 16)
        ];
    } else {
        return [
            index + 1,
            code
        ];
    }
};
var consumeNumeric = function consumeNumeric(str, index) {
    var numberResult = consumeNumber(str, index);
    if (numberResult === null) return null;
    var _a = __read(numberResult, 3), numberEndIndex = _a[0], numberValue = _a[1], numberFlag = _a[2];
    var identResult = consumeIdent(str, numberEndIndex + 1);
    if (identResult !== null) {
        var _b = __read(identResult, 2), identEndIndex = _b[0], identValue = _b[1];
        return [
            identEndIndex,
            [
                '<dimension-token>',
                numberValue,
                identValue
            ]
        ];
    }
    if (numberEndIndex + 1 < str.length && str.charCodeAt(numberEndIndex + 1) === 0x0025) {
        return [
            numberEndIndex + 1,
            [
                '<percentage-token>',
                numberValue
            ]
        ];
    }
    return [
        numberEndIndex,
        [
            '<number-token>',
            numberValue,
            numberFlag
        ]
    ];
};
var consumeNumber = function consumeNumber(str, index) {
    if (str.length <= index) return null;
    var flag = 'integer';
    var numberChars = [];
    var firstCode = str.charCodeAt(index);
    if (firstCode === 0x002b || firstCode === 0x002d) {
        index += 1;
        if (firstCode === 0x002d) numberChars.push(0x002d);
    }
    while(index < str.length){
        var code = str.charCodeAt(index);
        if (code >= 0x0030 && code <= 0x0039) {
            numberChars.push(code);
            index += 1;
        } else {
            break;
        }
    }
    if (index + 1 < str.length) {
        var nextCode = str.charCodeAt(index);
        var nextNextCode = str.charCodeAt(index + 1);
        if (nextCode === 0x002e && nextNextCode >= 0x0030 && nextNextCode <= 0x0039) {
            numberChars.push(nextCode, nextNextCode);
            flag = 'number';
            index += 2;
            while(index < str.length){
                var code = str.charCodeAt(index);
                if (code >= 0x0030 && code <= 0x0039) {
                    numberChars.push(code);
                    index += 1;
                } else {
                    break;
                }
            }
        }
    }
    if (index + 1 < str.length) {
        var nextCode = str.charCodeAt(index);
        var nextNextCode = str.charCodeAt(index + 1);
        var nextNextNextCode = str.charCodeAt(index + 2);
        if (nextCode === 0x0045 || nextCode === 0x0065) {
            var nextNextIsDigit = nextNextCode >= 0x0030 && nextNextCode <= 0x0039;
            if (nextNextIsDigit || (nextNextCode === 0x002b || nextNextCode === 0x002d) && nextNextNextCode >= 0x0030 && nextNextNextCode <= 0x0039) {
                flag = 'number';
                if (nextNextIsDigit) {
                    numberChars.push(0x0045, nextNextCode);
                    index += 2;
                } else if (nextNextCode === 0x002d) {
                    numberChars.push(0x0045, 0x002d, nextNextNextCode);
                    index += 3;
                } else {
                    numberChars.push(0x0045, nextNextNextCode);
                    index += 3;
                }
                while(index < str.length){
                    var code = str.charCodeAt(index);
                    if (code >= 0x0030 && code <= 0x0039) {
                        numberChars.push(code);
                        index += 1;
                    } else {
                        break;
                    }
                }
            }
        }
    }
    var numberString = String.fromCharCode.apply(null, numberChars);
    var value = flag === 'number' ? parseFloat(numberString) : parseInt(numberString);
    if (value === -0) value = 0;
    return Number.isNaN(value) ? null : [
        index - 1,
        value,
        flag
    ];
};
var consumeIdentUnsafe = function consumeIdentUnsafe(str, index) {
    if (str.length <= index) {
        return null;
    }
    var identChars = [];
    for(var code = str.charCodeAt(index); index < str.length; code = str.charCodeAt(++index)){
        if (code === 0x002d || code === 0x005f || code >= 0x0041 && code <= 0x005a || code >= 0x0061 && code <= 0x007a || code >= 0x0080 || code >= 0x0030 && code <= 0x0039) {
            identChars.push(code);
            continue;
        } else {
            var result = consumeEscape(str, index);
            if (result !== null) {
                var _a = __read(result, 2), lastIndex = _a[0], code_4 = _a[1];
                identChars.push(code_4);
                index = lastIndex;
                continue;
            }
        }
        break;
    }
    return index === 0 ? null : [
        index - 1,
        String.fromCharCode.apply(null, identChars)
    ];
};
var consumeIdent = function consumeIdent(str, index) {
    if (str.length <= index || !wouldStartIdentifier(str, index)) {
        return null;
    }
    var identChars = [];
    for(var code = str.charCodeAt(index); index < str.length; code = str.charCodeAt(++index)){
        if (code === 0x002d || code === 0x005f || code >= 0x0041 && code <= 0x005a || code >= 0x0061 && code <= 0x007a || code >= 0x0080 || code >= 0x0030 && code <= 0x0039) {
            identChars.push(code);
            continue;
        } else {
            var result = consumeEscape(str, index);
            if (result !== null) {
                var _a = __read(result, 2), lastIndex = _a[0], code_5 = _a[1];
                identChars.push(code_5);
                index = lastIndex;
                continue;
            }
        }
        break;
    }
    return [
        index - 1,
        String.fromCharCode.apply(null, identChars)
    ];
};
var consumeUrl = function consumeUrl(str, index) {
    var code = str.charCodeAt(index);
    while(code === 0x0009 || code === 0x0020 || code === 0x000a){
        code = str.charCodeAt(++index);
    }
    var urlChars = [];
    var hasFinishedWord = false;
    while(index < str.length){
        if (code === 0x0029) {
            return [
                index,
                String.fromCharCode.apply(null, urlChars)
            ];
        } else if (code === 0x0022 || code === 0x0027 || code === 0x0028) {
            return null;
        } else if (code === 0x0009 || code === 0x0020 || code === 0x000a) {
            if (!hasFinishedWord && urlChars.length !== 0) hasFinishedWord = true;
        } else if (code === 0x005c) {
            var result = consumeEscape(str, index);
            if (result === null || hasFinishedWord) return null;
            var _a = __read(result, 2), lastIndex = _a[0], value = _a[1];
            urlChars.push(value);
            index = lastIndex;
        } else {
            if (hasFinishedWord) return null;
            urlChars.push(code);
        }
        code = str.charCodeAt(++index);
    }
    return null;
};
var consumeIdentLike = function consumeIdentLike(str, index) {
    var result = consumeIdent(str, index);
    if (result === null) return null;
    var _a = __read(result, 2), lastIndex = _a[0], value = _a[1];
    if (value.toLowerCase() === 'url') {
        if (str.length > lastIndex + 1) {
            var nextCode = str.charCodeAt(lastIndex + 1);
            if (nextCode === 0x0028) {
                for(var offset = 2; lastIndex + offset < str.length; offset += 1){
                    var nextNextCode = str.charCodeAt(lastIndex + offset);
                    if (nextNextCode === 0x0022 || nextNextCode === 0x0027) {
                        return [
                            lastIndex + 1,
                            value.toLowerCase(),
                            '<function-token>'
                        ];
                    } else if (nextNextCode !== 0x0009 && nextNextCode !== 0x0020 && nextNextCode !== 0x000a) {
                        var result_1 = consumeUrl(str, lastIndex + offset);
                        if (result_1 === null) return null;
                        var _b = __read(result_1, 2), lastUrlIndex = _b[0], value_1 = _b[1];
                        return [
                            lastUrlIndex,
                            value_1,
                            '<url-token>'
                        ];
                    }
                }
                return [
                    lastIndex + 1,
                    value.toLowerCase(),
                    '<function-token>'
                ];
            }
        }
    } else if (str.length > lastIndex + 1) {
        var nextCode = str.charCodeAt(lastIndex + 1);
        if (nextCode === 0x0028) {
            return [
                lastIndex + 1,
                value.toLowerCase(),
                '<function-token>'
            ];
        }
    }
    return [
        lastIndex,
        value.toLowerCase(),
        '<ident-token>'
    ];
};
var simplifyAST = function simplifyAST(ast) {
    for(var i = ast.length - 1; i >= 0; i--){
        ast[i] = simplifyMediaQuery(ast[i]);
    }
    return ast;
};
var simplifyMediaQuery = function simplifyMediaQuery(mediaQuery) {
    if (mediaQuery.mediaCondition === null) return mediaQuery;
    var mediaCondition = simplifyMediaCondition(mediaQuery.mediaCondition);
    if (mediaCondition.operator === null && mediaCondition.children.length === 1 && 'children' in mediaCondition.children[0]) {
        mediaCondition = mediaCondition.children[0];
    }
    return {
        mediaPrefix: mediaQuery.mediaPrefix,
        mediaType: mediaQuery.mediaType,
        mediaCondition: mediaCondition
    };
};
var simplifyMediaCondition = function simplifyMediaCondition(mediaCondition) {
    for(var i = mediaCondition.children.length - 1; i >= 0; i--){
        var unsimplifiedChild = mediaCondition.children[i];
        if (!('context' in unsimplifiedChild)) {
            var child = simplifyMediaCondition(unsimplifiedChild);
            if (child.operator === null && child.children.length === 1) {
                mediaCondition.children[i] = child.children[0];
            } else if (child.operator === mediaCondition.operator && (child.operator === 'and' || child.operator === 'or')) {
                var spliceArgs = [
                    i,
                    1
                ];
                for(var i_1 = 0; i_1 < child.children.length; i_1++){
                    spliceArgs.push(child.children[i_1]);
                }
                mediaCondition.children.splice.apply(mediaCondition.children, spliceArgs);
            }
        }
    }
    return mediaCondition;
};
var createError = function createError(message, err) {
    if (err instanceof Error) {
        return new Error("".concat(err.message.trim(), "\n").concat(message.trim()));
    } else {
        return new Error(message.trim());
    }
};
var toAST = function toAST(str) {
    return simplifyAST(toUnflattenedAST(str));
};
var toUnflattenedAST = function toUnflattenedAST(str) {
    var tokenList = lexicalAnalysis(str.trim());
    if (tokenList === null) {
        throw createError('Failed tokenizing');
    }
    var startIndex = 0;
    var endIndex = tokenList.length - 1;
    if (tokenList[0].type === '<at-keyword-token>' && tokenList[0].value === 'media') {
        if (tokenList[1].type !== '<whitespace-token>') {
            throw createError('Expected whitespace after media');
        }
        startIndex = 2;
        for(var i = 2; i < tokenList.length - 1; i++){
            var token = tokenList[i];
            if (token.type === '<{-token>') {
                endIndex = i;
                break;
            } else if (token.type === '<semicolon-token>') {
                throw createError("Expected '{' in media query but found ';'");
            }
        }
    }
    tokenList = tokenList.slice(startIndex, endIndex);
    return syntacticAnalysis(tokenList);
};
var removeWhitespace = function removeWhitespace(tokenList) {
    var newTokenList = [];
    var before = false;
    for(var i = 0; i < tokenList.length; i++){
        if (tokenList[i].type === '<whitespace-token>') {
            before = true;
            if (newTokenList.length > 0) {
                newTokenList[newTokenList.length - 1].wsAfter = true;
            }
        } else {
            newTokenList.push(__assign(__assign({}, tokenList[i]), {
                wsBefore: before,
                wsAfter: false
            }));
            before = false;
        }
    }
    return newTokenList;
};
var syntacticAnalysis = function syntacticAnalysis(tokenList) {
    var e_1, _a;
    var mediaQueryList = [
        []
    ];
    for(var i = 0; i < tokenList.length; i++){
        var token = tokenList[i];
        if (token.type === '<comma-token>') {
            mediaQueryList.push([]);
        } else {
            mediaQueryList[mediaQueryList.length - 1].push(token);
        }
    }
    var mediaQueries = mediaQueryList.map(removeWhitespace);
    if (mediaQueries.length === 1 && mediaQueries[0].length === 0) {
        return [
            {
                mediaCondition: null,
                mediaPrefix: null,
                mediaType: 'all'
            }
        ];
    } else {
        var mediaQueryTokens = mediaQueries.map(function(mediaQueryTokens) {
            if (mediaQueryTokens.length === 0) {
                return null;
            } else {
                return tokenizeMediaQuery(mediaQueryTokens);
            }
        });
        var nonNullMediaQueryTokens = [];
        try {
            for(var mediaQueryTokens_1 = __values(mediaQueryTokens), mediaQueryTokens_1_1 = mediaQueryTokens_1.next(); !mediaQueryTokens_1_1.done; mediaQueryTokens_1_1 = mediaQueryTokens_1.next()){
                var mediaQueryToken = mediaQueryTokens_1_1.value;
                if (mediaQueryToken !== null) {
                    nonNullMediaQueryTokens.push(mediaQueryToken);
                }
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (mediaQueryTokens_1_1 && !mediaQueryTokens_1_1.done && (_a = mediaQueryTokens_1["return"])) _a.call(mediaQueryTokens_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        if (nonNullMediaQueryTokens.length === 0) {
            throw createError('No valid media queries');
        }
        return nonNullMediaQueryTokens;
    }
};
var tokenizeMediaQuery = function tokenizeMediaQuery(tokens) {
    var firstToken = tokens[0];
    if (firstToken.type === '<(-token>') {
        try {
            return {
                mediaPrefix: null,
                mediaType: 'all',
                mediaCondition: tokenizeMediaCondition(tokens, true)
            };
        } catch (err) {
            throw createError("Expected media condition after '('", err);
        }
    } else if (firstToken.type === '<ident-token>') {
        var mediaPrefix = null;
        var mediaType = void 0;
        var value = firstToken.value;
        if (value === 'only' || value === 'not') {
            mediaPrefix = value;
        }
        var firstIndex = mediaPrefix === null ? 0 : 1;
        if (tokens.length <= firstIndex) {
            throw createError("Expected extra token in media query");
        }
        var firstNonUnaryToken = tokens[firstIndex];
        if (firstNonUnaryToken.type === '<ident-token>') {
            var value_1 = firstNonUnaryToken.value;
            if (value_1 === 'all') {
                mediaType = 'all';
            } else if (value_1 === 'print' || value_1 === 'screen') {
                mediaType = value_1;
            } else if (value_1 === 'tty' || value_1 === 'tv' || value_1 === 'projection' || value_1 === 'handheld' || value_1 === 'braille' || value_1 === 'embossed' || value_1 === 'aural' || value_1 === 'speech') {
                mediaPrefix = mediaPrefix === 'not' ? null : 'not';
                mediaType = 'all';
            } else {
                throw createError("Unknown ident '".concat(value_1, "' in media query"));
            }
        } else if (mediaPrefix === 'not' && firstNonUnaryToken.type === '<(-token>') {
            var tokensWithParens = [
                {
                    type: '<(-token>',
                    wsBefore: false,
                    wsAfter: false
                }
            ];
            tokensWithParens.push.apply(tokensWithParens, tokens);
            tokensWithParens.push({
                type: '<)-token>',
                wsBefore: false,
                wsAfter: false
            });
            try {
                return {
                    mediaPrefix: null,
                    mediaType: 'all',
                    mediaCondition: tokenizeMediaCondition(tokensWithParens, true)
                };
            } catch (err) {
                throw createError("Expected media condition after '('", err);
            }
        } else {
            throw createError('Invalid media query');
        }
        if (firstIndex + 1 === tokens.length) {
            return {
                mediaPrefix: mediaPrefix,
                mediaType: mediaType,
                mediaCondition: null
            };
        } else if (firstIndex + 4 < tokens.length) {
            var secondNonUnaryToken = tokens[firstIndex + 1];
            if (secondNonUnaryToken.type === '<ident-token>' && secondNonUnaryToken.value === 'and') {
                try {
                    return {
                        mediaPrefix: mediaPrefix,
                        mediaType: mediaType,
                        mediaCondition: tokenizeMediaCondition(tokens.slice(firstIndex + 2), false)
                    };
                } catch (err) {
                    throw createError("Expected media condition after 'and'", err);
                }
            } else {
                throw createError("Expected 'and' after media prefix");
            }
        } else {
            throw createError('Expected media condition after media prefix');
        }
    } else {
        throw createError('Expected media condition or media prefix');
    }
};
var tokenizeMediaCondition = function tokenizeMediaCondition(tokens, mayContainOr, previousOperator) {
    if (previousOperator === void 0) {
        previousOperator = null;
    }
    if (tokens.length < 3 || tokens[0].type !== '<(-token>' || tokens[tokens.length - 1].type !== '<)-token>') {
        throw new Error('Invalid media condition');
    }
    var endIndexOfFirstFeature = tokens.length - 1;
    var maxDepth = 0;
    var count = 0;
    for(var i = 0; i < tokens.length; i++){
        var token = tokens[i];
        if (token.type === '<(-token>') {
            count += 1;
            maxDepth = Math.max(maxDepth, count);
        } else if (token.type === '<)-token>') {
            count -= 1;
        }
        if (count === 0) {
            endIndexOfFirstFeature = i;
            break;
        }
    }
    if (count !== 0) {
        throw new Error('Mismatched parens\nInvalid media condition');
    }
    var child;
    var featureTokens = tokens.slice(0, endIndexOfFirstFeature + 1);
    if (maxDepth === 1) {
        child = tokenizeMediaFeature(featureTokens);
    } else {
        if (featureTokens[1].type === '<ident-token>' && featureTokens[1].value === 'not') {
            child = tokenizeMediaCondition(featureTokens.slice(2, -1), true, 'not');
        } else {
            child = tokenizeMediaCondition(featureTokens.slice(1, -1), true);
        }
    }
    if (endIndexOfFirstFeature === tokens.length - 1) {
        return {
            operator: previousOperator,
            children: [
                child
            ]
        };
    } else {
        var nextToken = tokens[endIndexOfFirstFeature + 1];
        if (nextToken.type !== '<ident-token>') {
            throw new Error('Invalid operator\nInvalid media condition');
        } else if (previousOperator !== null && previousOperator !== nextToken.value) {
            throw new Error("'".concat(nextToken.value, "' and '").concat(previousOperator, "' must not be at same level\nInvalid media condition"));
        } else if (nextToken.value === 'or' && !mayContainOr) {
            throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
        } else if (nextToken.value !== 'and' && nextToken.value !== 'or') {
            throw new Error("Invalid operator: '".concat(nextToken.value, "'\nInvalid media condition"));
        }
        var siblings = tokenizeMediaCondition(tokens.slice(endIndexOfFirstFeature + 2), mayContainOr, nextToken.value);
        return {
            operator: nextToken.value,
            children: [
                child
            ].concat(siblings.children)
        };
    }
};
var tokenizeMediaFeature = function tokenizeMediaFeature(rawTokens) {
    if (rawTokens.length < 3 || rawTokens[0].type !== '<(-token>' || rawTokens[rawTokens.length - 1].type !== '<)-token>') {
        throw new Error('Invalid media feature');
    }
    var tokens = [
        rawTokens[0]
    ];
    for(var i = 1; i < rawTokens.length; i++){
        if (i < rawTokens.length - 2) {
            var a = rawTokens[i];
            var b = rawTokens[i + 1];
            var c = rawTokens[i + 2];
            if (a.type === '<number-token>' && a.value > 0 && b.type === '<delim-token>' && b.value === 0x002f && c.type === '<number-token>' && c.value > 0) {
                tokens.push({
                    type: '<ratio-token>',
                    numerator: a.value,
                    denominator: c.value,
                    wsBefore: a.wsBefore,
                    wsAfter: c.wsAfter
                });
                i += 2;
                continue;
            }
        }
        tokens.push(rawTokens[i]);
    }
    var nextToken = tokens[1];
    if (nextToken.type === '<ident-token>' && tokens.length === 3) {
        return {
            context: 'boolean',
            feature: nextToken.value
        };
    } else if (tokens.length === 5 && tokens[1].type === '<ident-token>' && tokens[2].type === '<colon-token>') {
        var valueToken = tokens[3];
        if (valueToken.type === '<number-token>' || valueToken.type === '<dimension-token>' || valueToken.type === '<ratio-token>' || valueToken.type === '<ident-token>') {
            var feature = tokens[1].value;
            var prefix = null;
            var slice = feature.slice(0, 4);
            if (slice === 'min-') {
                prefix = 'min';
                feature = feature.slice(4);
            } else if (slice === 'max-') {
                prefix = 'max';
                feature = feature.slice(4);
            }
            valueToken.wsBefore;
            valueToken.wsAfter;
            var value = __rest(valueToken, [
                "wsBefore",
                "wsAfter"
            ]);
            return {
                context: 'value',
                prefix: prefix,
                feature: feature,
                value: value
            };
        }
    } else if (tokens.length >= 5) {
        try {
            var range = tokenizeRange(tokens);
            return {
                context: 'range',
                feature: range.featureName,
                range: range
            };
        } catch (err) {
            throw createError('Invalid media feature', err);
        }
    }
    throw new Error('Invalid media feature');
};
var tokenizeRange = function tokenizeRange(tokens) {
    var _a, _b, _c, _d;
    if (tokens.length < 5 || tokens[0].type !== '<(-token>' || tokens[tokens.length - 1].type !== '<)-token>') {
        throw new Error('Invalid range');
    }
    var range = {
        leftToken: null,
        leftOp: null,
        featureName: '',
        rightOp: null,
        rightToken: null
    };
    var hasLeft = tokens[1].type === '<number-token>' || tokens[1].type === '<dimension-token>' || tokens[1].type === '<ratio-token>' || tokens[1].type === '<ident-token>' && tokens[1].value === 'infinite';
    if (tokens[2].type === '<delim-token>') {
        if (tokens[2].value === 0x003c) {
            if (tokens[3].type === '<delim-token>' && tokens[3].value === 0x003d && !tokens[3].wsBefore) {
                range[hasLeft ? 'leftOp' : 'rightOp'] = '<=';
            } else {
                range[hasLeft ? 'leftOp' : 'rightOp'] = '<';
            }
        } else if (tokens[2].value === 0x003e) {
            if (tokens[3].type === '<delim-token>' && tokens[3].value === 0x003d && !tokens[3].wsBefore) {
                range[hasLeft ? 'leftOp' : 'rightOp'] = '>=';
            } else {
                range[hasLeft ? 'leftOp' : 'rightOp'] = '>';
            }
        } else if (tokens[2].value === 0x003d) {
            range[hasLeft ? 'leftOp' : 'rightOp'] = '=';
        } else {
            throw new Error('Invalid range');
        }
        if (hasLeft) {
            range.leftToken = tokens[1];
        } else if (tokens[1].type === '<ident-token>') {
            range.featureName = tokens[1].value;
        } else {
            throw new Error('Invalid range');
        }
        var tokenIndexAfterFirstOp = 2 + ((_b = (_a = range[hasLeft ? 'leftOp' : 'rightOp']) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0);
        var tokenAfterFirstOp = tokens[tokenIndexAfterFirstOp];
        if (hasLeft) {
            if (tokenAfterFirstOp.type === '<ident-token>') {
                range.featureName = tokenAfterFirstOp.value;
                if (tokens.length >= 7) {
                    var secondOpToken = tokens[tokenIndexAfterFirstOp + 1];
                    var followingToken = tokens[tokenIndexAfterFirstOp + 2];
                    if (secondOpToken.type === '<delim-token>') {
                        var charCode = secondOpToken.value;
                        if (charCode === 0x003c) {
                            if (followingToken.type === '<delim-token>' && followingToken.value === 0x003d && !followingToken.wsBefore) {
                                range.rightOp = '<=';
                            } else {
                                range.rightOp = '<';
                            }
                        } else if (charCode === 0x003e) {
                            if (followingToken.type === '<delim-token>' && followingToken.value === 0x003d && !followingToken.wsBefore) {
                                range.rightOp = '>=';
                            } else {
                                range.rightOp = '>';
                            }
                        } else {
                            throw new Error('Invalid range');
                        }
                        var tokenAfterSecondOp = tokens[tokenIndexAfterFirstOp + 1 + ((_d = (_c = range.rightOp) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0)];
                        range.rightToken = tokenAfterSecondOp;
                    } else {
                        throw new Error('Invalid range');
                    }
                } else if (tokenIndexAfterFirstOp + 2 !== tokens.length) {
                    throw new Error('Invalid range');
                }
            } else {
                throw new Error('Invalid range');
            }
        } else {
            range.rightToken = tokenAfterFirstOp;
        }
        var validRange = null;
        var lt = range.leftToken, leftOp = range.leftOp, featureName = range.featureName, rightOp = range.rightOp, rt = range.rightToken;
        var leftToken = null;
        if (lt !== null) {
            if (lt.type === '<ident-token>') {
                var type = lt.type, value = lt.value;
                if (value === 'infinite') {
                    leftToken = {
                        type: type,
                        value: value
                    };
                }
            } else if (lt.type === '<number-token>' || lt.type === '<dimension-token>' || lt.type === '<ratio-token>') {
                lt.wsBefore;
                lt.wsAfter;
                var ltNoWS = __rest(lt, [
                    "wsBefore",
                    "wsAfter"
                ]);
                leftToken = ltNoWS;
            }
        }
        var rightToken = null;
        if (rt !== null) {
            if (rt.type === '<ident-token>') {
                var type = rt.type, value = rt.value;
                if (value === 'infinite') {
                    rightToken = {
                        type: type,
                        value: value
                    };
                }
            } else if (rt.type === '<number-token>' || rt.type === '<dimension-token>' || rt.type === '<ratio-token>') {
                rt.wsBefore;
                rt.wsAfter;
                var rtNoWS = __rest(rt, [
                    "wsBefore",
                    "wsAfter"
                ]);
                rightToken = rtNoWS;
            }
        }
        if (leftToken !== null && rightToken !== null) {
            if ((leftOp === '<' || leftOp === '<=') && (rightOp === '<' || rightOp === '<=')) {
                validRange = {
                    leftToken: leftToken,
                    leftOp: leftOp,
                    featureName: featureName,
                    rightOp: rightOp,
                    rightToken: rightToken
                };
            } else if ((leftOp === '>' || leftOp === '>=') && (rightOp === '>' || rightOp === '>=')) {
                validRange = {
                    leftToken: leftToken,
                    leftOp: leftOp,
                    featureName: featureName,
                    rightOp: rightOp,
                    rightToken: rightToken
                };
            } else {
                throw new Error('Invalid range');
            }
        } else if (leftToken === null && leftOp === null && rightOp !== null && rightToken !== null) {
            validRange = {
                leftToken: leftToken,
                leftOp: leftOp,
                featureName: featureName,
                rightOp: rightOp,
                rightToken: rightToken
            };
        } else if (leftToken !== null && leftOp !== null && rightOp === null && rightToken === null) {
            validRange = {
                leftToken: leftToken,
                leftOp: leftOp,
                featureName: featureName,
                rightOp: rightOp,
                rightToken: rightToken
            };
        }
        return validRange;
    } else {
        throw new Error('Invalid range');
    }
};
;
 //# sourceMappingURL=media-query-parser.esm.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/@emotion/hash/dist/emotion-hash.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable */ // Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
__turbopack_context__.s([
    "default",
    ()=>murmur2
]);
function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash
    var k, i = 0, len = str.length;
    for(; len >= 4; ++i, len -= 4){
        k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
        k = /* Math.imul(k, m): */ (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
        k ^= /* k >>> r: */ k >>> 24;
        h = /* Math.imul(k, m): */ (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array
    switch(len){
        case 3:
            h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
        case 2:
            h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            h ^= str.charCodeAt(i) & 0xff;
            h = /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.
    h ^= h >>> 13;
    h = /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
}
;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/lru-cache/dist/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @module LRUCache
 */ __turbopack_context__.s([
    "LRUCache",
    ()=>LRUCache
]);
const perf = typeof performance === 'object' && performance && typeof performance.now === 'function' ? performance : Date;
const warned = new Set();
/* c8 ignore start */ const PROCESS = typeof process === 'object' && !!process ? process : {};
/* c8 ignore start */ const emitWarning = (msg, type, code, fn)=>{
    typeof PROCESS.emitWarning === 'function' ? PROCESS.emitWarning(msg, type, code, fn) : console.error(`[${code}] ${type}: ${msg}`);
};
let AC = globalThis.AbortController;
let AS = globalThis.AbortSignal;
/* c8 ignore start */ if (typeof AC === 'undefined') {
    //@ts-ignore
    AS = class AbortSignal {
        onabort;
        _onabort = [];
        reason;
        aborted = false;
        addEventListener(_, fn) {
            this._onabort.push(fn);
        }
    };
    //@ts-ignore
    AC = class AbortController {
        constructor(){
            warnACPolyfill();
        }
        signal = new AS();
        abort(reason) {
            if (this.signal.aborted) return;
            //@ts-ignore
            this.signal.reason = reason;
            //@ts-ignore
            this.signal.aborted = true;
            //@ts-ignore
            for (const fn of this.signal._onabort){
                fn(reason);
            }
            this.signal.onabort?.(reason);
        }
    };
    let printACPolyfillWarning = PROCESS.env?.LRU_CACHE_IGNORE_AC_WARNING !== '1';
    const warnACPolyfill = ()=>{
        if (!printACPolyfillWarning) return;
        printACPolyfillWarning = false;
        emitWarning('AbortController is not defined. If using lru-cache in ' + 'node 14, load an AbortController polyfill from the ' + '`node-abort-controller` package. A minimal polyfill is ' + 'provided for use by LRUCache.fetch(), but it should not be ' + 'relied upon in other contexts (eg, passing it to other APIs that ' + 'use AbortController/AbortSignal might have undesirable effects). ' + 'You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.', 'NO_ABORT_CONTROLLER', 'ENOTSUP', warnACPolyfill);
    };
}
/* c8 ignore stop */ const shouldWarn = (code)=>!warned.has(code);
const TYPE = Symbol('type');
const isPosInt = (n)=>n && n === Math.floor(n) && n > 0 && isFinite(n);
/* c8 ignore start */ // This is a little bit ridiculous, tbh.
// The maximum array length is 2^32-1 or thereabouts on most JS impls.
// And well before that point, you're caching the entire world, I mean,
// that's ~32GB of just integers for the next/prev links, plus whatever
// else to hold that many keys and values.  Just filling the memory with
// zeroes at init time is brutal when you get that big.
// But why not be complete?
// Maybe in the future, these limits will have expanded.
const getUintArray = (max)=>!isPosInt(max) ? null : max <= Math.pow(2, 8) ? Uint8Array : max <= Math.pow(2, 16) ? Uint16Array : max <= Math.pow(2, 32) ? Uint32Array : max <= Number.MAX_SAFE_INTEGER ? ZeroArray : null;
/* c8 ignore stop */ class ZeroArray extends Array {
    constructor(size){
        super(size);
        this.fill(0);
    }
}
class Stack {
    heap;
    length;
    // private constructor
    static #constructing = false;
    static create(max) {
        const HeapCls = getUintArray(max);
        if (!HeapCls) return [];
        Stack.#constructing = true;
        const s = new Stack(max, HeapCls);
        Stack.#constructing = false;
        return s;
    }
    constructor(max, HeapCls){
        /* c8 ignore start */ if (!Stack.#constructing) {
            throw new TypeError('instantiate Stack using Stack.create(n)');
        }
        /* c8 ignore stop */ this.heap = new HeapCls(max);
        this.length = 0;
    }
    push(n) {
        this.heap[this.length++] = n;
    }
    pop() {
        return this.heap[--this.length];
    }
}
class LRUCache {
    // options that cannot be changed without disaster
    #max;
    #maxSize;
    #dispose;
    #disposeAfter;
    #fetchMethod;
    #memoMethod;
    /**
     * {@link LRUCache.OptionsBase.ttl}
     */ ttl;
    /**
     * {@link LRUCache.OptionsBase.ttlResolution}
     */ ttlResolution;
    /**
     * {@link LRUCache.OptionsBase.ttlAutopurge}
     */ ttlAutopurge;
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnGet}
     */ updateAgeOnGet;
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnHas}
     */ updateAgeOnHas;
    /**
     * {@link LRUCache.OptionsBase.allowStale}
     */ allowStale;
    /**
     * {@link LRUCache.OptionsBase.noDisposeOnSet}
     */ noDisposeOnSet;
    /**
     * {@link LRUCache.OptionsBase.noUpdateTTL}
     */ noUpdateTTL;
    /**
     * {@link LRUCache.OptionsBase.maxEntrySize}
     */ maxEntrySize;
    /**
     * {@link LRUCache.OptionsBase.sizeCalculation}
     */ sizeCalculation;
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
     */ noDeleteOnFetchRejection;
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
     */ noDeleteOnStaleGet;
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
     */ allowStaleOnFetchAbort;
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
     */ allowStaleOnFetchRejection;
    /**
     * {@link LRUCache.OptionsBase.ignoreFetchAbort}
     */ ignoreFetchAbort;
    // computed properties
    #size;
    #calculatedSize;
    #keyMap;
    #keyList;
    #valList;
    #next;
    #prev;
    #head;
    #tail;
    #free;
    #disposed;
    #sizes;
    #starts;
    #ttls;
    #hasDispose;
    #hasFetchMethod;
    #hasDisposeAfter;
    /**
     * Do not call this method unless you need to inspect the
     * inner workings of the cache.  If anything returned by this
     * object is modified in any way, strange breakage may occur.
     *
     * These fields are private for a reason!
     *
     * @internal
     */ static unsafeExposeInternals(c) {
        return {
            // properties
            starts: c.#starts,
            ttls: c.#ttls,
            sizes: c.#sizes,
            keyMap: c.#keyMap,
            keyList: c.#keyList,
            valList: c.#valList,
            next: c.#next,
            prev: c.#prev,
            get head () {
                return c.#head;
            },
            get tail () {
                return c.#tail;
            },
            free: c.#free,
            // methods
            isBackgroundFetch: (p)=>c.#isBackgroundFetch(p),
            backgroundFetch: (k, index, options, context)=>c.#backgroundFetch(k, index, options, context),
            moveToTail: (index)=>c.#moveToTail(index),
            indexes: (options)=>c.#indexes(options),
            rindexes: (options)=>c.#rindexes(options),
            isStale: (index)=>c.#isStale(index)
        };
    }
    // Protected read-only members
    /**
     * {@link LRUCache.OptionsBase.max} (read-only)
     */ get max() {
        return this.#max;
    }
    /**
     * {@link LRUCache.OptionsBase.maxSize} (read-only)
     */ get maxSize() {
        return this.#maxSize;
    }
    /**
     * The total computed size of items in the cache (read-only)
     */ get calculatedSize() {
        return this.#calculatedSize;
    }
    /**
     * The number of items stored in the cache (read-only)
     */ get size() {
        return this.#size;
    }
    /**
     * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
     */ get fetchMethod() {
        return this.#fetchMethod;
    }
    get memoMethod() {
        return this.#memoMethod;
    }
    /**
     * {@link LRUCache.OptionsBase.dispose} (read-only)
     */ get dispose() {
        return this.#dispose;
    }
    /**
     * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
     */ get disposeAfter() {
        return this.#disposeAfter;
    }
    constructor(options){
        const { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, memoMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort } = options;
        if (max !== 0 && !isPosInt(max)) {
            throw new TypeError('max option must be a nonnegative integer');
        }
        const UintArray = max ? getUintArray(max) : Array;
        if (!UintArray) {
            throw new Error('invalid max value: ' + max);
        }
        this.#max = max;
        this.#maxSize = maxSize;
        this.maxEntrySize = maxEntrySize || this.#maxSize;
        this.sizeCalculation = sizeCalculation;
        if (this.sizeCalculation) {
            if (!this.#maxSize && !this.maxEntrySize) {
                throw new TypeError('cannot set sizeCalculation without setting maxSize or maxEntrySize');
            }
            if (typeof this.sizeCalculation !== 'function') {
                throw new TypeError('sizeCalculation set to non-function');
            }
        }
        if (memoMethod !== undefined && typeof memoMethod !== 'function') {
            throw new TypeError('memoMethod must be a function if defined');
        }
        this.#memoMethod = memoMethod;
        if (fetchMethod !== undefined && typeof fetchMethod !== 'function') {
            throw new TypeError('fetchMethod must be a function if specified');
        }
        this.#fetchMethod = fetchMethod;
        this.#hasFetchMethod = !!fetchMethod;
        this.#keyMap = new Map();
        this.#keyList = new Array(max).fill(undefined);
        this.#valList = new Array(max).fill(undefined);
        this.#next = new UintArray(max);
        this.#prev = new UintArray(max);
        this.#head = 0;
        this.#tail = 0;
        this.#free = Stack.create(max);
        this.#size = 0;
        this.#calculatedSize = 0;
        if (typeof dispose === 'function') {
            this.#dispose = dispose;
        }
        if (typeof disposeAfter === 'function') {
            this.#disposeAfter = disposeAfter;
            this.#disposed = [];
        } else {
            this.#disposeAfter = undefined;
            this.#disposed = undefined;
        }
        this.#hasDispose = !!this.#dispose;
        this.#hasDisposeAfter = !!this.#disposeAfter;
        this.noDisposeOnSet = !!noDisposeOnSet;
        this.noUpdateTTL = !!noUpdateTTL;
        this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
        this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
        this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
        this.ignoreFetchAbort = !!ignoreFetchAbort;
        // NB: maxEntrySize is set to maxSize if it's set
        if (this.maxEntrySize !== 0) {
            if (this.#maxSize !== 0) {
                if (!isPosInt(this.#maxSize)) {
                    throw new TypeError('maxSize must be a positive integer if specified');
                }
            }
            if (!isPosInt(this.maxEntrySize)) {
                throw new TypeError('maxEntrySize must be a positive integer if specified');
            }
            this.#initializeSizeTracking();
        }
        this.allowStale = !!allowStale;
        this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
        this.updateAgeOnGet = !!updateAgeOnGet;
        this.updateAgeOnHas = !!updateAgeOnHas;
        this.ttlResolution = isPosInt(ttlResolution) || ttlResolution === 0 ? ttlResolution : 1;
        this.ttlAutopurge = !!ttlAutopurge;
        this.ttl = ttl || 0;
        if (this.ttl) {
            if (!isPosInt(this.ttl)) {
                throw new TypeError('ttl must be a positive integer if specified');
            }
            this.#initializeTTLTracking();
        }
        // do not allow completely unbounded caches
        if (this.#max === 0 && this.ttl === 0 && this.#maxSize === 0) {
            throw new TypeError('At least one of max, maxSize, or ttl is required');
        }
        if (!this.ttlAutopurge && !this.#max && !this.#maxSize) {
            const code = 'LRU_CACHE_UNBOUNDED';
            if (shouldWarn(code)) {
                warned.add(code);
                const msg = 'TTL caching without ttlAutopurge, max, or maxSize can ' + 'result in unbounded memory consumption.';
                emitWarning(msg, 'UnboundedCacheWarning', code, LRUCache);
            }
        }
    }
    /**
     * Return the number of ms left in the item's TTL. If item is not in cache,
     * returns `0`. Returns `Infinity` if item is in cache without a defined TTL.
     */ getRemainingTTL(key) {
        return this.#keyMap.has(key) ? Infinity : 0;
    }
    #initializeTTLTracking() {
        const ttls = new ZeroArray(this.#max);
        const starts = new ZeroArray(this.#max);
        this.#ttls = ttls;
        this.#starts = starts;
        this.#setItemTTL = (index, ttl, start = perf.now())=>{
            starts[index] = ttl !== 0 ? start : 0;
            ttls[index] = ttl;
            if (ttl !== 0 && this.ttlAutopurge) {
                const t = setTimeout(()=>{
                    if (this.#isStale(index)) {
                        this.#delete(this.#keyList[index], 'expire');
                    }
                }, ttl + 1);
                // unref() not supported on all platforms
                /* c8 ignore start */ if (t.unref) {
                    t.unref();
                }
            /* c8 ignore stop */ }
        };
        this.#updateItemAge = (index)=>{
            starts[index] = ttls[index] !== 0 ? perf.now() : 0;
        };
        this.#statusTTL = (status, index)=>{
            if (ttls[index]) {
                const ttl = ttls[index];
                const start = starts[index];
                /* c8 ignore next */ if (!ttl || !start) return;
                status.ttl = ttl;
                status.start = start;
                status.now = cachedNow || getNow();
                const age = status.now - start;
                status.remainingTTL = ttl - age;
            }
        };
        // debounce calls to perf.now() to 1s so we're not hitting
        // that costly call repeatedly.
        let cachedNow = 0;
        const getNow = ()=>{
            const n = perf.now();
            if (this.ttlResolution > 0) {
                cachedNow = n;
                const t = setTimeout(()=>cachedNow = 0, this.ttlResolution);
                // not available on all platforms
                /* c8 ignore start */ if (t.unref) {
                    t.unref();
                }
            /* c8 ignore stop */ }
            return n;
        };
        this.getRemainingTTL = (key)=>{
            const index = this.#keyMap.get(key);
            if (index === undefined) {
                return 0;
            }
            const ttl = ttls[index];
            const start = starts[index];
            if (!ttl || !start) {
                return Infinity;
            }
            const age = (cachedNow || getNow()) - start;
            return ttl - age;
        };
        this.#isStale = (index)=>{
            const s = starts[index];
            const t = ttls[index];
            return !!t && !!s && (cachedNow || getNow()) - s > t;
        };
    }
    // conditionally set private methods related to TTL
    #updateItemAge = ()=>{};
    #statusTTL = ()=>{};
    #setItemTTL = ()=>{};
    /* c8 ignore stop */ #isStale = ()=>false;
    #initializeSizeTracking() {
        const sizes = new ZeroArray(this.#max);
        this.#calculatedSize = 0;
        this.#sizes = sizes;
        this.#removeItemSize = (index)=>{
            this.#calculatedSize -= sizes[index];
            sizes[index] = 0;
        };
        this.#requireSize = (k, v, size, sizeCalculation)=>{
            // provisionally accept background fetches.
            // actual value size will be checked when they return.
            if (this.#isBackgroundFetch(v)) {
                return 0;
            }
            if (!isPosInt(size)) {
                if (sizeCalculation) {
                    if (typeof sizeCalculation !== 'function') {
                        throw new TypeError('sizeCalculation must be a function');
                    }
                    size = sizeCalculation(v, k);
                    if (!isPosInt(size)) {
                        throw new TypeError('sizeCalculation return invalid (expect positive integer)');
                    }
                } else {
                    throw new TypeError('invalid size value (must be positive integer). ' + 'When maxSize or maxEntrySize is used, sizeCalculation ' + 'or size must be set.');
                }
            }
            return size;
        };
        this.#addItemSize = (index, size, status)=>{
            sizes[index] = size;
            if (this.#maxSize) {
                const maxSize = this.#maxSize - sizes[index];
                while(this.#calculatedSize > maxSize){
                    this.#evict(true);
                }
            }
            this.#calculatedSize += sizes[index];
            if (status) {
                status.entrySize = size;
                status.totalCalculatedSize = this.#calculatedSize;
            }
        };
    }
    #removeItemSize = (_i)=>{};
    #addItemSize = (_i, _s, _st)=>{};
    #requireSize = (_k, _v, size, sizeCalculation)=>{
        if (size || sizeCalculation) {
            throw new TypeError('cannot set size without setting maxSize or maxEntrySize on cache');
        }
        return 0;
    };
    *#indexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
            for(let i = this.#tail; true;){
                if (!this.#isValidIndex(i)) {
                    break;
                }
                if (allowStale || !this.#isStale(i)) {
                    yield i;
                }
                if (i === this.#head) {
                    break;
                } else {
                    i = this.#prev[i];
                }
            }
        }
    }
    *#rindexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
            for(let i = this.#head; true;){
                if (!this.#isValidIndex(i)) {
                    break;
                }
                if (allowStale || !this.#isStale(i)) {
                    yield i;
                }
                if (i === this.#tail) {
                    break;
                } else {
                    i = this.#next[i];
                }
            }
        }
    }
    #isValidIndex(index) {
        return index !== undefined && this.#keyMap.get(this.#keyList[index]) === index;
    }
    /**
     * Return a generator yielding `[key, value]` pairs,
     * in order from most recently used to least recently used.
     */ *entries() {
        for (const i of this.#indexes()){
            if (this.#valList[i] !== undefined && this.#keyList[i] !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield [
                    this.#keyList[i],
                    this.#valList[i]
                ];
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.entries}
     *
     * Return a generator yielding `[key, value]` pairs,
     * in order from least recently used to most recently used.
     */ *rentries() {
        for (const i of this.#rindexes()){
            if (this.#valList[i] !== undefined && this.#keyList[i] !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield [
                    this.#keyList[i],
                    this.#valList[i]
                ];
            }
        }
    }
    /**
     * Return a generator yielding the keys in the cache,
     * in order from most recently used to least recently used.
     */ *keys() {
        for (const i of this.#indexes()){
            const k = this.#keyList[i];
            if (k !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield k;
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.keys}
     *
     * Return a generator yielding the keys in the cache,
     * in order from least recently used to most recently used.
     */ *rkeys() {
        for (const i of this.#rindexes()){
            const k = this.#keyList[i];
            if (k !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield k;
            }
        }
    }
    /**
     * Return a generator yielding the values in the cache,
     * in order from most recently used to least recently used.
     */ *values() {
        for (const i of this.#indexes()){
            const v = this.#valList[i];
            if (v !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield this.#valList[i];
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.values}
     *
     * Return a generator yielding the values in the cache,
     * in order from least recently used to most recently used.
     */ *rvalues() {
        for (const i of this.#rindexes()){
            const v = this.#valList[i];
            if (v !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield this.#valList[i];
            }
        }
    }
    /**
     * Iterating over the cache itself yields the same results as
     * {@link LRUCache.entries}
     */ [Symbol.iterator]() {
        return this.entries();
    }
    /**
     * A String value that is used in the creation of the default string
     * description of an object. Called by the built-in method
     * `Object.prototype.toString`.
     */ [Symbol.toStringTag] = 'LRUCache';
    /**
     * Find a value for which the supplied fn method returns a truthy value,
     * similar to `Array.find()`. fn is called as `fn(value, key, cache)`.
     */ find(fn, getOptions = {}) {
        for (const i of this.#indexes()){
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
            if (value === undefined) continue;
            if (fn(value, this.#keyList[i], this)) {
                return this.get(this.#keyList[i], getOptions);
            }
        }
    }
    /**
     * Call the supplied function on each item in the cache, in order from most
     * recently used to least recently used.
     *
     * `fn` is called as `fn(value, key, cache)`.
     *
     * If `thisp` is provided, function will be called in the `this`-context of
     * the provided object, or the cache if no `thisp` object is provided.
     *
     * Does not update age or recenty of use, or iterate over stale values.
     */ forEach(fn, thisp = this) {
        for (const i of this.#indexes()){
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
            if (value === undefined) continue;
            fn.call(thisp, value, this.#keyList[i], this);
        }
    }
    /**
     * The same as {@link LRUCache.forEach} but items are iterated over in
     * reverse order.  (ie, less recently used items are iterated over first.)
     */ rforEach(fn, thisp = this) {
        for (const i of this.#rindexes()){
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
            if (value === undefined) continue;
            fn.call(thisp, value, this.#keyList[i], this);
        }
    }
    /**
     * Delete any stale entries. Returns true if anything was removed,
     * false otherwise.
     */ purgeStale() {
        let deleted = false;
        for (const i of this.#rindexes({
            allowStale: true
        })){
            if (this.#isStale(i)) {
                this.#delete(this.#keyList[i], 'expire');
                deleted = true;
            }
        }
        return deleted;
    }
    /**
     * Get the extended info about a given entry, to get its value, size, and
     * TTL info simultaneously. Returns `undefined` if the key is not present.
     *
     * Unlike {@link LRUCache#dump}, which is designed to be portable and survive
     * serialization, the `start` value is always the current timestamp, and the
     * `ttl` is a calculated remaining time to live (negative if expired).
     *
     * Always returns stale values, if their info is found in the cache, so be
     * sure to check for expirations (ie, a negative {@link LRUCache.Entry#ttl})
     * if relevant.
     */ info(key) {
        const i = this.#keyMap.get(key);
        if (i === undefined) return undefined;
        const v = this.#valList[i];
        const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
        if (value === undefined) return undefined;
        const entry = {
            value
        };
        if (this.#ttls && this.#starts) {
            const ttl = this.#ttls[i];
            const start = this.#starts[i];
            if (ttl && start) {
                const remain = ttl - (perf.now() - start);
                entry.ttl = remain;
                entry.start = Date.now();
            }
        }
        if (this.#sizes) {
            entry.size = this.#sizes[i];
        }
        return entry;
    }
    /**
     * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
     * passed to {@link LRLUCache#load}.
     *
     * The `start` fields are calculated relative to a portable `Date.now()`
     * timestamp, even if `performance.now()` is available.
     *
     * Stale entries are always included in the `dump`, even if
     * {@link LRUCache.OptionsBase.allowStale} is false.
     *
     * Note: this returns an actual array, not a generator, so it can be more
     * easily passed around.
     */ dump() {
        const arr = [];
        for (const i of this.#indexes({
            allowStale: true
        })){
            const key = this.#keyList[i];
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
            if (value === undefined || key === undefined) continue;
            const entry = {
                value
            };
            if (this.#ttls && this.#starts) {
                entry.ttl = this.#ttls[i];
                // always dump the start relative to a portable timestamp
                // it's ok for this to be a bit slow, it's a rare operation.
                const age = perf.now() - this.#starts[i];
                entry.start = Math.floor(Date.now() - age);
            }
            if (this.#sizes) {
                entry.size = this.#sizes[i];
            }
            arr.unshift([
                key,
                entry
            ]);
        }
        return arr;
    }
    /**
     * Reset the cache and load in the items in entries in the order listed.
     *
     * The shape of the resulting cache may be different if the same options are
     * not used in both caches.
     *
     * The `start` fields are assumed to be calculated relative to a portable
     * `Date.now()` timestamp, even if `performance.now()` is available.
     */ load(arr) {
        this.clear();
        for (const [key, entry] of arr){
            if (entry.start) {
                // entry.start is a portable timestamp, but we may be using
                // node's performance.now(), so calculate the offset, so that
                // we get the intended remaining TTL, no matter how long it's
                // been on ice.
                //
                // it's ok for this to be a bit slow, it's a rare operation.
                const age = Date.now() - entry.start;
                entry.start = perf.now() - age;
            }
            this.set(key, entry.value, entry);
        }
    }
    /**
     * Add a value to the cache.
     *
     * Note: if `undefined` is specified as a value, this is an alias for
     * {@link LRUCache#delete}
     *
     * Fields on the {@link LRUCache.SetOptions} options param will override
     * their corresponding values in the constructor options for the scope
     * of this single `set()` operation.
     *
     * If `start` is provided, then that will set the effective start
     * time for the TTL calculation. Note that this must be a previous
     * value of `performance.now()` if supported, or a previous value of
     * `Date.now()` if not.
     *
     * Options object may also include `size`, which will prevent
     * calling the `sizeCalculation` function and just use the specified
     * number if it is a positive integer, and `noDisposeOnSet` which
     * will prevent calling a `dispose` function in the case of
     * overwrites.
     *
     * If the `size` (or return value of `sizeCalculation`) for a given
     * entry is greater than `maxEntrySize`, then the item will not be
     * added to the cache.
     *
     * Will update the recency of the entry.
     *
     * If the value is `undefined`, then this is an alias for
     * `cache.delete(key)`. `undefined` is never stored in the cache.
     */ set(k, v, setOptions = {}) {
        if (v === undefined) {
            this.delete(k);
            return this;
        }
        const { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status } = setOptions;
        let { noUpdateTTL = this.noUpdateTTL } = setOptions;
        const size = this.#requireSize(k, v, setOptions.size || 0, sizeCalculation);
        // if the item doesn't fit, don't do anything
        // NB: maxEntrySize set to maxSize by default
        if (this.maxEntrySize && size > this.maxEntrySize) {
            if (status) {
                status.set = 'miss';
                status.maxEntrySizeExceeded = true;
            }
            // have to delete, in case something is there already.
            this.#delete(k, 'set');
            return this;
        }
        let index = this.#size === 0 ? undefined : this.#keyMap.get(k);
        if (index === undefined) {
            // addition
            index = this.#size === 0 ? this.#tail : this.#free.length !== 0 ? this.#free.pop() : this.#size === this.#max ? this.#evict(false) : this.#size;
            this.#keyList[index] = k;
            this.#valList[index] = v;
            this.#keyMap.set(k, index);
            this.#next[this.#tail] = index;
            this.#prev[index] = this.#tail;
            this.#tail = index;
            this.#size++;
            this.#addItemSize(index, size, status);
            if (status) status.set = 'add';
            noUpdateTTL = false;
        } else {
            // update
            this.#moveToTail(index);
            const oldVal = this.#valList[index];
            if (v !== oldVal) {
                if (this.#hasFetchMethod && this.#isBackgroundFetch(oldVal)) {
                    oldVal.__abortController.abort(new Error('replaced'));
                    const { __staleWhileFetching: s } = oldVal;
                    if (s !== undefined && !noDisposeOnSet) {
                        if (this.#hasDispose) {
                            this.#dispose?.(s, k, 'set');
                        }
                        if (this.#hasDisposeAfter) {
                            this.#disposed?.push([
                                s,
                                k,
                                'set'
                            ]);
                        }
                    }
                } else if (!noDisposeOnSet) {
                    if (this.#hasDispose) {
                        this.#dispose?.(oldVal, k, 'set');
                    }
                    if (this.#hasDisposeAfter) {
                        this.#disposed?.push([
                            oldVal,
                            k,
                            'set'
                        ]);
                    }
                }
                this.#removeItemSize(index);
                this.#addItemSize(index, size, status);
                this.#valList[index] = v;
                if (status) {
                    status.set = 'replace';
                    const oldValue = oldVal && this.#isBackgroundFetch(oldVal) ? oldVal.__staleWhileFetching : oldVal;
                    if (oldValue !== undefined) status.oldValue = oldValue;
                }
            } else if (status) {
                status.set = 'update';
            }
        }
        if (ttl !== 0 && !this.#ttls) {
            this.#initializeTTLTracking();
        }
        if (this.#ttls) {
            if (!noUpdateTTL) {
                this.#setItemTTL(index, ttl, start);
            }
            if (status) this.#statusTTL(status, index);
        }
        if (!noDisposeOnSet && this.#hasDisposeAfter && this.#disposed) {
            const dt = this.#disposed;
            let task;
            while(task = dt?.shift()){
                this.#disposeAfter?.(...task);
            }
        }
        return this;
    }
    /**
     * Evict the least recently used item, returning its value or
     * `undefined` if cache is empty.
     */ pop() {
        try {
            while(this.#size){
                const val = this.#valList[this.#head];
                this.#evict(true);
                if (this.#isBackgroundFetch(val)) {
                    if (val.__staleWhileFetching) {
                        return val.__staleWhileFetching;
                    }
                } else if (val !== undefined) {
                    return val;
                }
            }
        } finally{
            if (this.#hasDisposeAfter && this.#disposed) {
                const dt = this.#disposed;
                let task;
                while(task = dt?.shift()){
                    this.#disposeAfter?.(...task);
                }
            }
        }
    }
    #evict(free) {
        const head = this.#head;
        const k = this.#keyList[head];
        const v = this.#valList[head];
        if (this.#hasFetchMethod && this.#isBackgroundFetch(v)) {
            v.__abortController.abort(new Error('evicted'));
        } else if (this.#hasDispose || this.#hasDisposeAfter) {
            if (this.#hasDispose) {
                this.#dispose?.(v, k, 'evict');
            }
            if (this.#hasDisposeAfter) {
                this.#disposed?.push([
                    v,
                    k,
                    'evict'
                ]);
            }
        }
        this.#removeItemSize(head);
        // if we aren't about to use the index, then null these out
        if (free) {
            this.#keyList[head] = undefined;
            this.#valList[head] = undefined;
            this.#free.push(head);
        }
        if (this.#size === 1) {
            this.#head = this.#tail = 0;
            this.#free.length = 0;
        } else {
            this.#head = this.#next[head];
        }
        this.#keyMap.delete(k);
        this.#size--;
        return head;
    }
    /**
     * Check if a key is in the cache, without updating the recency of use.
     * Will return false if the item is stale, even though it is technically
     * in the cache.
     *
     * Check if a key is in the cache, without updating the recency of
     * use. Age is updated if {@link LRUCache.OptionsBase.updateAgeOnHas} is set
     * to `true` in either the options or the constructor.
     *
     * Will return `false` if the item is stale, even though it is technically in
     * the cache. The difference can be determined (if it matters) by using a
     * `status` argument, and inspecting the `has` field.
     *
     * Will not update item age unless
     * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
     */ has(k, hasOptions = {}) {
        const { updateAgeOnHas = this.updateAgeOnHas, status } = hasOptions;
        const index = this.#keyMap.get(k);
        if (index !== undefined) {
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v) && v.__staleWhileFetching === undefined) {
                return false;
            }
            if (!this.#isStale(index)) {
                if (updateAgeOnHas) {
                    this.#updateItemAge(index);
                }
                if (status) {
                    status.has = 'hit';
                    this.#statusTTL(status, index);
                }
                return true;
            } else if (status) {
                status.has = 'stale';
                this.#statusTTL(status, index);
            }
        } else if (status) {
            status.has = 'miss';
        }
        return false;
    }
    /**
     * Like {@link LRUCache#get} but doesn't update recency or delete stale
     * items.
     *
     * Returns `undefined` if the item is stale, unless
     * {@link LRUCache.OptionsBase.allowStale} is set.
     */ peek(k, peekOptions = {}) {
        const { allowStale = this.allowStale } = peekOptions;
        const index = this.#keyMap.get(k);
        if (index === undefined || !allowStale && this.#isStale(index)) {
            return;
        }
        const v = this.#valList[index];
        // either stale and allowed, or forcing a refresh of non-stale value
        return this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
    }
    #backgroundFetch(k, index, options, context) {
        const v = index === undefined ? undefined : this.#valList[index];
        if (this.#isBackgroundFetch(v)) {
            return v;
        }
        const ac = new AC();
        const { signal } = options;
        // when/if our AC signals, then stop listening to theirs.
        signal?.addEventListener('abort', ()=>ac.abort(signal.reason), {
            signal: ac.signal
        });
        const fetchOpts = {
            signal: ac.signal,
            options,
            context
        };
        const cb = (v, updateCache = false)=>{
            const { aborted } = ac.signal;
            const ignoreAbort = options.ignoreFetchAbort && v !== undefined;
            if (options.status) {
                if (aborted && !updateCache) {
                    options.status.fetchAborted = true;
                    options.status.fetchError = ac.signal.reason;
                    if (ignoreAbort) options.status.fetchAbortIgnored = true;
                } else {
                    options.status.fetchResolved = true;
                }
            }
            if (aborted && !ignoreAbort && !updateCache) {
                return fetchFail(ac.signal.reason);
            }
            // either we didn't abort, and are still here, or we did, and ignored
            const bf = p;
            if (this.#valList[index] === p) {
                if (v === undefined) {
                    if (bf.__staleWhileFetching) {
                        this.#valList[index] = bf.__staleWhileFetching;
                    } else {
                        this.#delete(k, 'fetch');
                    }
                } else {
                    if (options.status) options.status.fetchUpdated = true;
                    this.set(k, v, fetchOpts.options);
                }
            }
            return v;
        };
        const eb = (er)=>{
            if (options.status) {
                options.status.fetchRejected = true;
                options.status.fetchError = er;
            }
            return fetchFail(er);
        };
        const fetchFail = (er)=>{
            const { aborted } = ac.signal;
            const allowStaleAborted = aborted && options.allowStaleOnFetchAbort;
            const allowStale = allowStaleAborted || options.allowStaleOnFetchRejection;
            const noDelete = allowStale || options.noDeleteOnFetchRejection;
            const bf = p;
            if (this.#valList[index] === p) {
                // if we allow stale on fetch rejections, then we need to ensure that
                // the stale value is not removed from the cache when the fetch fails.
                const del = !noDelete || bf.__staleWhileFetching === undefined;
                if (del) {
                    this.#delete(k, 'fetch');
                } else if (!allowStaleAborted) {
                    // still replace the *promise* with the stale value,
                    // since we are done with the promise at this point.
                    // leave it untouched if we're still waiting for an
                    // aborted background fetch that hasn't yet returned.
                    this.#valList[index] = bf.__staleWhileFetching;
                }
            }
            if (allowStale) {
                if (options.status && bf.__staleWhileFetching !== undefined) {
                    options.status.returnedStale = true;
                }
                return bf.__staleWhileFetching;
            } else if (bf.__returned === bf) {
                throw er;
            }
        };
        const pcall = (res, rej)=>{
            const fmp = this.#fetchMethod?.(k, v, fetchOpts);
            if (fmp && fmp instanceof Promise) {
                fmp.then((v)=>res(v === undefined ? undefined : v), rej);
            }
            // ignored, we go until we finish, regardless.
            // defer check until we are actually aborting,
            // so fetchMethod can override.
            ac.signal.addEventListener('abort', ()=>{
                if (!options.ignoreFetchAbort || options.allowStaleOnFetchAbort) {
                    res(undefined);
                    // when it eventually resolves, update the cache.
                    if (options.allowStaleOnFetchAbort) {
                        res = (v)=>cb(v, true);
                    }
                }
            });
        };
        if (options.status) options.status.fetchDispatched = true;
        const p = new Promise(pcall).then(cb, eb);
        const bf = Object.assign(p, {
            __abortController: ac,
            __staleWhileFetching: v,
            __returned: undefined
        });
        if (index === undefined) {
            // internal, don't expose status.
            this.set(k, bf, {
                ...fetchOpts.options,
                status: undefined
            });
            index = this.#keyMap.get(k);
        } else {
            this.#valList[index] = bf;
        }
        return bf;
    }
    #isBackgroundFetch(p) {
        if (!this.#hasFetchMethod) return false;
        const b = p;
        return !!b && b instanceof Promise && b.hasOwnProperty('__staleWhileFetching') && b.__abortController instanceof AC;
    }
    async fetch(k, fetchOptions = {}) {
        const { // get options
        allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, // set options
        ttl = this.ttl, noDisposeOnSet = this.noDisposeOnSet, size = 0, sizeCalculation = this.sizeCalculation, noUpdateTTL = this.noUpdateTTL, // fetch exclusive options
        noDeleteOnFetchRejection = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection = this.allowStaleOnFetchRejection, ignoreFetchAbort = this.ignoreFetchAbort, allowStaleOnFetchAbort = this.allowStaleOnFetchAbort, context, forceRefresh = false, status, signal } = fetchOptions;
        if (!this.#hasFetchMethod) {
            if (status) status.fetch = 'get';
            return this.get(k, {
                allowStale,
                updateAgeOnGet,
                noDeleteOnStaleGet,
                status
            });
        }
        const options = {
            allowStale,
            updateAgeOnGet,
            noDeleteOnStaleGet,
            ttl,
            noDisposeOnSet,
            size,
            sizeCalculation,
            noUpdateTTL,
            noDeleteOnFetchRejection,
            allowStaleOnFetchRejection,
            allowStaleOnFetchAbort,
            ignoreFetchAbort,
            status,
            signal
        };
        let index = this.#keyMap.get(k);
        if (index === undefined) {
            if (status) status.fetch = 'miss';
            const p = this.#backgroundFetch(k, index, options, context);
            return p.__returned = p;
        } else {
            // in cache, maybe already fetching
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v)) {
                const stale = allowStale && v.__staleWhileFetching !== undefined;
                if (status) {
                    status.fetch = 'inflight';
                    if (stale) status.returnedStale = true;
                }
                return stale ? v.__staleWhileFetching : v.__returned = v;
            }
            // if we force a refresh, that means do NOT serve the cached value,
            // unless we are already in the process of refreshing the cache.
            const isStale = this.#isStale(index);
            if (!forceRefresh && !isStale) {
                if (status) status.fetch = 'hit';
                this.#moveToTail(index);
                if (updateAgeOnGet) {
                    this.#updateItemAge(index);
                }
                if (status) this.#statusTTL(status, index);
                return v;
            }
            // ok, it is stale or a forced refresh, and not already fetching.
            // refresh the cache.
            const p = this.#backgroundFetch(k, index, options, context);
            const hasStale = p.__staleWhileFetching !== undefined;
            const staleVal = hasStale && allowStale;
            if (status) {
                status.fetch = isStale ? 'stale' : 'refresh';
                if (staleVal && isStale) status.returnedStale = true;
            }
            return staleVal ? p.__staleWhileFetching : p.__returned = p;
        }
    }
    async forceFetch(k, fetchOptions = {}) {
        const v = await this.fetch(k, fetchOptions);
        if (v === undefined) throw new Error('fetch() returned undefined');
        return v;
    }
    memo(k, memoOptions = {}) {
        const memoMethod = this.#memoMethod;
        if (!memoMethod) {
            throw new Error('no memoMethod provided to constructor');
        }
        const { context, forceRefresh, ...options } = memoOptions;
        const v = this.get(k, options);
        if (!forceRefresh && v !== undefined) return v;
        const vv = memoMethod(k, v, {
            options,
            context
        });
        this.set(k, vv, options);
        return vv;
    }
    /**
     * Return a value from the cache. Will update the recency of the cache
     * entry found.
     *
     * If the key is not found, get() will return `undefined`.
     */ get(k, getOptions = {}) {
        const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, status } = getOptions;
        const index = this.#keyMap.get(k);
        if (index !== undefined) {
            const value = this.#valList[index];
            const fetching = this.#isBackgroundFetch(value);
            if (status) this.#statusTTL(status, index);
            if (this.#isStale(index)) {
                if (status) status.get = 'stale';
                // delete only if not an in-flight background fetch
                if (!fetching) {
                    if (!noDeleteOnStaleGet) {
                        this.#delete(k, 'expire');
                    }
                    if (status && allowStale) status.returnedStale = true;
                    return allowStale ? value : undefined;
                } else {
                    if (status && allowStale && value.__staleWhileFetching !== undefined) {
                        status.returnedStale = true;
                    }
                    return allowStale ? value.__staleWhileFetching : undefined;
                }
            } else {
                if (status) status.get = 'hit';
                // if we're currently fetching it, we don't actually have it yet
                // it's not stale, which means this isn't a staleWhileRefetching.
                // If it's not stale, and fetching, AND has a __staleWhileFetching
                // value, then that means the user fetched with {forceRefresh:true},
                // so it's safe to return that value.
                if (fetching) {
                    return value.__staleWhileFetching;
                }
                this.#moveToTail(index);
                if (updateAgeOnGet) {
                    this.#updateItemAge(index);
                }
                return value;
            }
        } else if (status) {
            status.get = 'miss';
        }
    }
    #connect(p, n) {
        this.#prev[n] = p;
        this.#next[p] = n;
    }
    #moveToTail(index) {
        // if tail already, nothing to do
        // if head, move head to next[index]
        // else
        //   move next[prev[index]] to next[index] (head has no prev)
        //   move prev[next[index]] to prev[index]
        // prev[index] = tail
        // next[tail] = index
        // tail = index
        if (index !== this.#tail) {
            if (index === this.#head) {
                this.#head = this.#next[index];
            } else {
                this.#connect(this.#prev[index], this.#next[index]);
            }
            this.#connect(this.#tail, index);
            this.#tail = index;
        }
    }
    /**
     * Deletes a key out of the cache.
     *
     * Returns true if the key was deleted, false otherwise.
     */ delete(k) {
        return this.#delete(k, 'delete');
    }
    #delete(k, reason) {
        let deleted = false;
        if (this.#size !== 0) {
            const index = this.#keyMap.get(k);
            if (index !== undefined) {
                deleted = true;
                if (this.#size === 1) {
                    this.#clear(reason);
                } else {
                    this.#removeItemSize(index);
                    const v = this.#valList[index];
                    if (this.#isBackgroundFetch(v)) {
                        v.__abortController.abort(new Error('deleted'));
                    } else if (this.#hasDispose || this.#hasDisposeAfter) {
                        if (this.#hasDispose) {
                            this.#dispose?.(v, k, reason);
                        }
                        if (this.#hasDisposeAfter) {
                            this.#disposed?.push([
                                v,
                                k,
                                reason
                            ]);
                        }
                    }
                    this.#keyMap.delete(k);
                    this.#keyList[index] = undefined;
                    this.#valList[index] = undefined;
                    if (index === this.#tail) {
                        this.#tail = this.#prev[index];
                    } else if (index === this.#head) {
                        this.#head = this.#next[index];
                    } else {
                        const pi = this.#prev[index];
                        this.#next[pi] = this.#next[index];
                        const ni = this.#next[index];
                        this.#prev[ni] = this.#prev[index];
                    }
                    this.#size--;
                    this.#free.push(index);
                }
            }
        }
        if (this.#hasDisposeAfter && this.#disposed?.length) {
            const dt = this.#disposed;
            let task;
            while(task = dt?.shift()){
                this.#disposeAfter?.(...task);
            }
        }
        return deleted;
    }
    /**
     * Clear the cache entirely, throwing away all values.
     */ clear() {
        return this.#clear('delete');
    }
    #clear(reason) {
        for (const index of this.#rindexes({
            allowStale: true
        })){
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v)) {
                v.__abortController.abort(new Error('deleted'));
            } else {
                const k = this.#keyList[index];
                if (this.#hasDispose) {
                    this.#dispose?.(v, k, reason);
                }
                if (this.#hasDisposeAfter) {
                    this.#disposed?.push([
                        v,
                        k,
                        reason
                    ]);
                }
            }
        }
        this.#keyMap.clear();
        this.#valList.fill(undefined);
        this.#keyList.fill(undefined);
        if (this.#ttls && this.#starts) {
            this.#ttls.fill(0);
            this.#starts.fill(0);
        }
        if (this.#sizes) {
            this.#sizes.fill(0);
        }
        this.#head = 0;
        this.#tail = 0;
        this.#free.length = 0;
        this.#calculatedSize = 0;
        this.#size = 0;
        if (this.#hasDisposeAfter && this.#disposed) {
            const dt = this.#disposed;
            let task;
            while(task = dt?.shift()){
                this.#disposeAfter?.(...task);
            }
        }
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasOwnProperty",
    ()=>hasOwnProperty,
    "isDate",
    ()=>isDate,
    "isEmpty",
    ()=>isEmpty,
    "isEmptyObject",
    ()=>isEmptyObject,
    "isObject",
    ()=>isObject,
    "makeObjectWithoutPrototype",
    ()=>makeObjectWithoutPrototype
]);
const isDate = (d)=>d instanceof Date;
const isEmpty = (o)=>Object.keys(o).length === 0;
const isObject = (o)=>o != null && typeof o === 'object';
const hasOwnProperty = (o, ...args)=>Object.prototype.hasOwnProperty.call(o, ...args);
const isEmptyObject = (o)=>isObject(o) && isEmpty(o);
const makeObjectWithoutPrototype = ()=>Object.create(null);
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/diff.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/utils.js [app-ssr] (ecmascript)");
;
const diff = (lhs, rhs)=>{
    if (lhs === rhs) return {}; // equal return no diff
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(lhs) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(rhs)) return rhs; // return updated rhs
    const deletedValues = Object.keys(lhs).reduce((acc, key)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwnProperty"])(rhs, key)) {
            acc[key] = undefined;
        }
        return acc;
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeObjectWithoutPrototype"])());
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDate"])(lhs) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDate"])(rhs)) {
        if (lhs.valueOf() == rhs.valueOf()) return {};
        return rhs;
    }
    return Object.keys(rhs).reduce((acc, key)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwnProperty"])(lhs, key)) {
            acc[key] = rhs[key]; // return added r key
            return acc;
        }
        const difference = diff(lhs[key], rhs[key]);
        // If the difference is empty, and the lhs is an empty object or the rhs is not an empty object
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(difference) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDate"])(difference) && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(lhs[key]) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(rhs[key]))) return acc; // return no diff
        acc[key] = difference; // return updated key
        return acc; // return updated key
    }, deletedValues);
};
const __TURBOPACK__default__export__ = diff;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/added.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/utils.js [app-ssr] (ecmascript)");
;
const addedDiff = (lhs, rhs)=>{
    if (lhs === rhs || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(lhs) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(rhs)) return {};
    return Object.keys(rhs).reduce((acc, key)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwnProperty"])(lhs, key)) {
            const difference = addedDiff(lhs[key], rhs[key]);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(difference) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmpty"])(difference)) return acc;
            acc[key] = difference;
            return acc;
        }
        acc[key] = rhs[key];
        return acc;
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeObjectWithoutPrototype"])());
};
const __TURBOPACK__default__export__ = addedDiff;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/deleted.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/utils.js [app-ssr] (ecmascript)");
;
const deletedDiff = (lhs, rhs)=>{
    if (lhs === rhs || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(lhs) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(rhs)) return {};
    return Object.keys(lhs).reduce((acc, key)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwnProperty"])(rhs, key)) {
            const difference = deletedDiff(lhs[key], rhs[key]);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(difference) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmpty"])(difference)) return acc;
            acc[key] = difference;
            return acc;
        }
        acc[key] = undefined;
        return acc;
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeObjectWithoutPrototype"])());
};
const __TURBOPACK__default__export__ = deletedDiff;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/updated.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/utils.js [app-ssr] (ecmascript)");
;
const updatedDiff = (lhs, rhs)=>{
    if (lhs === rhs) return {};
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(lhs) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(rhs)) return rhs;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDate"])(lhs) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDate"])(rhs)) {
        if (lhs.valueOf() == rhs.valueOf()) return {};
        return rhs;
    }
    return Object.keys(rhs).reduce((acc, key)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwnProperty"])(lhs, key)) {
            const difference = updatedDiff(lhs[key], rhs[key]);
            // If the difference is empty, and the lhs is an empty object or the rhs is not an empty object
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(difference) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDate"])(difference) && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(lhs[key]) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(rhs[key]))) return acc; // return no diff
            acc[key] = difference;
            return acc;
        }
        return acc;
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeObjectWithoutPrototype"])());
};
const __TURBOPACK__default__export__ = updatedDiff;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/detailed.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$added$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/added.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$deleted$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/deleted.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$updated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/updated.js [app-ssr] (ecmascript)");
;
;
;
const detailedDiff = (lhs, rhs)=>({
        added: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$added$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(lhs, rhs),
        deleted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$deleted$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(lhs, rhs),
        updated: (0, __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$updated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(lhs, rhs)
    });
const __TURBOPACK__default__export__ = detailedDiff;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$diff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/diff.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$added$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/added.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$deleted$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/deleted.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$updated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/updated.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$detailed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/detailed.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/diff.js [app-ssr] (ecmascript) <export default as diff>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "diff",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$diff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$heroes_guess_dapp$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$node_modules$2f$deep$2d$object$2d$diff$2f$mjs$2f$diff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deep-object-diff/mjs/diff.js [app-ssr] (ecmascript)");
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/picocolors/picocolors.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

let p = process || {}, argv = p.argv || [], env = p.env || {};
let isColorSupported = !(!!env.NO_COLOR || argv.includes("--no-color")) && (!!env.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env.TERM !== "dumb" || !!env.CI);
let formatter = (open, close, replace = open)=>(input)=>{
        let string = "" + input, index = string.indexOf(close, open.length);
        return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
let replaceClose = (string, close, replace, index)=>{
    let result = "", cursor = 0;
    do {
        result += string.substring(cursor, index) + replace;
        cursor = index + close.length;
        index = string.indexOf(close, cursor);
    }while (~index)
    return result + string.substring(cursor);
};
let createColors = (enabled = isColorSupported)=>{
    let f = enabled ? formatter : ()=>String;
    return {
        isColorSupported: enabled,
        reset: f("\x1b[0m", "\x1b[0m"),
        bold: f("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m"),
        dim: f("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m"),
        italic: f("\x1b[3m", "\x1b[23m"),
        underline: f("\x1b[4m", "\x1b[24m"),
        inverse: f("\x1b[7m", "\x1b[27m"),
        hidden: f("\x1b[8m", "\x1b[28m"),
        strikethrough: f("\x1b[9m", "\x1b[29m"),
        black: f("\x1b[30m", "\x1b[39m"),
        red: f("\x1b[31m", "\x1b[39m"),
        green: f("\x1b[32m", "\x1b[39m"),
        yellow: f("\x1b[33m", "\x1b[39m"),
        blue: f("\x1b[34m", "\x1b[39m"),
        magenta: f("\x1b[35m", "\x1b[39m"),
        cyan: f("\x1b[36m", "\x1b[39m"),
        white: f("\x1b[37m", "\x1b[39m"),
        gray: f("\x1b[90m", "\x1b[39m"),
        bgBlack: f("\x1b[40m", "\x1b[49m"),
        bgRed: f("\x1b[41m", "\x1b[49m"),
        bgGreen: f("\x1b[42m", "\x1b[49m"),
        bgYellow: f("\x1b[43m", "\x1b[49m"),
        bgBlue: f("\x1b[44m", "\x1b[49m"),
        bgMagenta: f("\x1b[45m", "\x1b[49m"),
        bgCyan: f("\x1b[46m", "\x1b[49m"),
        bgWhite: f("\x1b[47m", "\x1b[49m"),
        blackBright: f("\x1b[90m", "\x1b[39m"),
        redBright: f("\x1b[91m", "\x1b[39m"),
        greenBright: f("\x1b[92m", "\x1b[39m"),
        yellowBright: f("\x1b[93m", "\x1b[39m"),
        blueBright: f("\x1b[94m", "\x1b[39m"),
        magentaBright: f("\x1b[95m", "\x1b[39m"),
        cyanBright: f("\x1b[96m", "\x1b[39m"),
        whiteBright: f("\x1b[97m", "\x1b[39m"),
        bgBlackBright: f("\x1b[100m", "\x1b[49m"),
        bgRedBright: f("\x1b[101m", "\x1b[49m"),
        bgGreenBright: f("\x1b[102m", "\x1b[49m"),
        bgYellowBright: f("\x1b[103m", "\x1b[49m"),
        bgBlueBright: f("\x1b[104m", "\x1b[49m"),
        bgMagentaBright: f("\x1b[105m", "\x1b[49m"),
        bgCyanBright: f("\x1b[106m", "\x1b[49m"),
        bgWhiteBright: f("\x1b[107m", "\x1b[49m")
    };
};
module.exports = createColors();
module.exports.createColors = createColors;
}),
"[project]/heroes_guess_dapp/node_modules/@vanilla-extract/css/node_modules/deepmerge/dist/cjs.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
    return !!value && typeof value === 'object';
}
function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
}
// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
    });
}
function getMergeFunction(key, options) {
    if (!options.customMerge) {
        return deepmerge;
    }
    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
    }) : [];
}
function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
    try {
        return property in object;
    } catch (_) {
        return false;
    }
}
// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
     && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
     && Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
    ;
}
function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
    }
    getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
            return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
            destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
    });
    return destination;
}
function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
    } else {
        return mergeObject(target, source, options);
    }
}
deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
        throw new Error('first argument should be an array');
    }
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
    }, {});
};
var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;
}),
];

//# sourceMappingURL=0cc17_%40vanilla-extract_0d71be95._.js.map