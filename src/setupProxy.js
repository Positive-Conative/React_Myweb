//1.0.0v 이하부터.
// const proxy = require('http-proxy-middleware');

// module.exports = function(app){
//   app.use(
//       proxy('/api', {
//           target: 'http://localhost:3001/',
//           changeOrigin: true
//       })
//   )
// };

//1.0.0v 이상부터.
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      createProxyMiddleware('/api', {
          target: 'http://localhost:3001/',
          changeOrigin: true
      })
  )
};