const { POSTCSS_MODES } = require("@craco/craco");
const CracoAlias = require("craco-alias");

module.exports = {
    style: {
        postcss: {
            mode: POSTCSS_MODES.file
        }
    },
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                // baseUrl SHOULD be specified
                // plugin does not take it from tsconfig
                baseUrl: "./src",
                // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
                tsConfigPath: "./tsconfig.extend.json"
            }
        }
    ]
};