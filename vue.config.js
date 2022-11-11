const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081,
    host: 'localhost',
    open: true,
    https: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        pathRewrite: {},
        changeOrigin: false
      }
    }
  }
})
