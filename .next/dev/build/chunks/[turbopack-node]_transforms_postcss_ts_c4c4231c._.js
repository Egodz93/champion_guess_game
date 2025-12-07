module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/heroes_guess_dapp/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/0cc17_postcss_f4f449f7._.js",
  "chunks/[root-of-the-server]__ef3d24e6._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/heroes_guess_dapp/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];