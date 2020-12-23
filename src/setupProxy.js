const proxy = require('http-proxy-middleware');

// TODO
// 封装请求fetch
// redux
console.log(process.env.NODE_ENV);

module.exports = function (app) {
  app.use(
    '/api',
    proxy.createProxyMiddleware({
      target: 'http://baidu.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}