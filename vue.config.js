const path = require('path');
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
    publicPath: '/app-ydxp',
    indexPath: 'index.html',
    outputDir: process.env.outputDir || 'dist',
    assetsDir: 'static',
    lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
    runtimeCompiler: true,
    productionSourceMap: !IS_PROD,
    parallel: false,
    pwa: {},
    chainWebpack: config => {
        config.resolve.symlinks(true);
        config.plugin("html").tap(args => {
            args[0].chunksSortMode = "none";
            return args;
        });
        config.resolve.alias // 添加别名
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@store', resolve('src/store'));
    },
    css: {
        extract: IS_PROD,
        requireModuleExtension: true,
        loaderOptions: {
            less: {
                globalVars: {
                    primary: '#333'
                }
            }
        }
    },
    devServer: {
        inline: true,
        overlay: {
            warnings: true,
            errors: true
        },
        https: false,
        open: false,
        hotOnly: true,
        proxy: { //配置多个跨域
            "/ydxp": {
                target: process.env.VUE_APP_BASE_API,
                changeOrigin: true,
                // ws: true,//websocket支持
                secure: false,
                pathRewrite: {
                    "^/ydxp": "/"
                }
            }
        }
    }
}