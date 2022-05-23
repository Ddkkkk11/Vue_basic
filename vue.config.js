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
  lintOnSave:false //关闭语法检查
}