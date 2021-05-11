module.exports = {
    devServer: {
        // 自动打开浏览器
        open: true,
        port: 8000,
        autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
         '/api': {
              target: 'http://39.104.71.38:8000',
              changeOrigin: true,
              pathRewrite: {
                '^/api': '/' 
              }
            }
    }
    }
}
