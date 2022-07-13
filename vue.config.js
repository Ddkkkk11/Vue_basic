/* const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
 */
module.exports = {
  pages: {
    index: {
      // page 的入口
      // entry: 'src/index/main.js',
      entry: 'src/main.js',
    },
  },
  lintOnSave: false, //关闭语法检查
  //开启代理服务器 方式1
  /*  devServer: {
       proxy: 'http://localhost:5000'
   }, */
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: {
          '^/api': ''
        },
        ws: true, //用于支持websocket
        changeOrigin: true //用于控制请求头中的host的值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: {
          '^/demo': ''
        },
        ws: true, //用于支持websocket
        changeOrigin: true //用于控制请求头中的host的值
      },


    }
  }
}