// 文件名 为 vite.config.js 若使用vue.config.js 不生效

const path = require('path')

module.exports = {
  // 模块路径别名必须以 / 开头和结尾，否则 vite 无法识别。
  alias: {
    '/@/': path.resolve(__dirname, './src') // 使用 @ 不生效
  },
  // hostname: '0.0.0.0', // 默认是 localhost
  port: '8000', // 默认是 3000 端口
  open: true, // 浏览器自动打开
  https: false, // 是否开启 https
  ssr: false, // 服务端渲染
  base: './', // 生产环境下的 公共路径
  output: 'dist', // 打包构建输出路径，默认 dist，如果路径存在，构建之前会被删除
  proxy: { // 本地开发环境 通过代理 实现跨域，生产环境使用 nginx 转发
    '/api': {
      target: 'http://127.0.0.1:7001', // 后端服务实际地址
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }

  }
}