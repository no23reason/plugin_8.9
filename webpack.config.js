// (C) 2007-2021 GoodData Corporation
/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { DefinePlugin, EnvironmentPlugin, ProvidePlugin } = require("webpack");
const path = require("path");
const { URL } = require("url");
const deps = require("./package.json").dependencies;
const peerDeps = require("./package.json").peerDependencies;
const Dotenv = require("dotenv-webpack");
require("dotenv").config();

const { MODULE_FEDERATION_NAME } = require("./src/metadata.json");

const PORT = 3001;
const DEFAULT_BACKEND_URL = "https://live-examples-proxy.herokuapp.com";

// add all the gooddata packages that absolutely need to be shared and singletons because of contexts
// allow sharing @gooddata/sdk-ui-dashboard here so that multiple plugins can share it among themselves
// this makes redux related contexts work for example
const gooddataSharePackagesEntries = [...Object.entries(deps), ...Object.entries(peerDeps)]
    .filter(([name]) => name.startsWith("@gooddata"))
    .reduce((acc, [name, version]) => {
        acc[name] = {
            requiredVersion: false,
            version: version.replace(/\^/, ""),
        };
        return acc;
    }, {});

module.exports = (_env, argv) => {
    const isProduction = argv.mode === "production";

    const effectiveBackendUrl = process.env.BACKEND_URL || DEFAULT_BACKEND_URL;
    const protocol = new URL(effectiveBackendUrl).protocol;

    const proxy = {
        "/api": {
            changeOrigin: true,
            cookieDomainRewrite: "127.0.0.1",
            secure: false,
            target: effectiveBackendUrl,
            headers: {
                host: effectiveBackendUrl.replace(/^https?:\/\//, ""),
                // This is essential for Tiger backends. To ensure 401 flies when not authenticated and using proxy
                "X-Requested-With": "XMLHttpRequest",
            },
            onProxyReq(proxyReq) {
                // changeOrigin: true does not work well for POST requests, so remove origin like this to be safe
                proxyReq.removeHeader("origin");
                proxyReq.setHeader("accept-encoding", "identity");
            },
        },
    };

    const commonConfig = {
        mode: isProduction ? "production" : "development",
        // support IE11 only in production, in dev it is not necessary and it also would prevent hot reload
        target: isProduction ? ["web", "es5"] : "web",
        devtool: isProduction ? false : "eval-cheap-module-source-map",
        output: {
            publicPath: "auto",
            uniqueName: MODULE_FEDERATION_NAME,
        },
        resolve: {
            // Allow to omit extensions when requiring these files
            extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],

            alias: {
                // fixes tilde imports in CSS from sdk-ui-* packages
                "@gooddata/sdk-ui-dashboard": path.resolve("./node_modules/@gooddata/sdk-ui-dashboard"),
                "@gooddata/sdk-ui-ext": path.resolve("./node_modules/@gooddata/sdk-ui-ext"),
            },

            // Prefer ESM versions of packages to enable tree shaking
            mainFields: ["module", "browser", "main"],

            // polyfill "process" and "util" for lru-cache, webpack 5 no longer does that automatically
            // remove this after IE11 support is dropped and lru-cache can be finally upgraded
            fallback: {
                process: require.resolve("process/browser"),
                util: require.resolve("util/"),
            },
        },
        module: {
            rules: [
                // TS source files in case TS is used
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: "babel-loader",
                        },
                        {
                            loader: "ts-loader",
                            options: {
                                transpileOnly: true,
                            },
                        },
                    ],
                },
                // JS source files in case JS is used
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/preset-react"],
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(eot|woff|ttf|svg|jpg|jpeg|gif)/,
                    type: "asset/resource",
                },
                !isProduction && {
                    test: /\.js$/,
                    enforce: "pre",
                    include: path.resolve(__dirname, "src"),
                    use: ["source-map-loader"],
                },
            ].filter(Boolean),
        },
        plugins: [
            new CaseSensitivePathsPlugin(),
            // provide bogus process.env keys that lru-cache, pseudomap and util packages use unsafely for no reason...
            new EnvironmentPlugin({
                npm_package_name: "",
                npm_lifecycle_script: "",
                _nodeLRUCacheForceNoSymbol: "",
                TEST_PSEUDOMAP: "",
                NODE_DEBUG: "",
            }),
        ],
    };

    return [
        {
            ...commonConfig,
            entry: "./src/index",
            name: "harness",
            devServer: {
                contentBase: path.join(__dirname, "dist"),
                port: PORT,
                proxy,
                host: "127.0.0.1",
                https: protocol === "https:",
            },
            plugins: [
                ...commonConfig.plugins,
                new ProvidePlugin({
                    process: "process/browser",
                }),
                new DefinePlugin({
                    PORT: JSON.stringify(PORT),
                }),
                new Dotenv({
                    silent: true,
                    systemvars: true,
                }),
                new Dotenv({
                    path: ".env.secrets",
                    silent: true,
                    systemvars: true,
                }),
                new HtmlWebpackPlugin({
                    template: "./src/harness/public/index.html",
                }),
            ],
        },
        {
            ...commonConfig,
            entry: `./src/${MODULE_FEDERATION_NAME}/index`,
            name: "dashboardPlugin",
            output: { ...commonConfig.output, path: path.join(__dirname, "dist", "dashboardPlugin") },
            plugins: [
                ...commonConfig.plugins,
                new ModuleFederationPlugin({
                    name: MODULE_FEDERATION_NAME, // this is used to put the plugin on the target window scope by default
                    exposes: {
                        /**
                         * this is the main entry point providing info about the engine and plugin
                         * this allows us to only load the plugin and/or engine when needed
                         */
                        [`./${MODULE_FEDERATION_NAME}_ENTRY`]: {
                            import: `./src/${MODULE_FEDERATION_NAME}_entry`,
                            name: `./${MODULE_FEDERATION_NAME}_ENTRY`,
                        },
                        /**
                         * this is the entry to the plugin itself
                         */
                        [`./${MODULE_FEDERATION_NAME}_PLUGIN`]: {
                            import: `./src/${MODULE_FEDERATION_NAME}`,
                            name: `./${MODULE_FEDERATION_NAME}_PLUGIN`,
                        },
                        /**
                         * this is the entry to the engine
                         */
                        [`./${MODULE_FEDERATION_NAME}_ENGINE`]: {
                            import: `./src/${MODULE_FEDERATION_NAME}_engine`,
                            name: `./${MODULE_FEDERATION_NAME}_ENGINE`,
                        },
                    },

                    // adds react as shared module
                    // version is inferred from package.json
                    // there is no version check for the required version
                    // so it will always use the higher version found
                    shared: {
                        react: {
                            import: "react", // the "react" package will be used a provided and fallback module
                            shareKey: "react", // under this name the shared module will be placed in the share scope
                            singleton: true, // only a single version of the shared module is allowed
                            requiredVersion: deps.react,
                        },
                        "react-dom": {
                            singleton: true,
                            requiredVersion: deps["react-dom"],
                        },
                        // add all the packages that absolutely need to be shared and singletons because of contexts
                        ...gooddataSharePackagesEntries,
                    },
                }),
            ],
        },
    ];
};
