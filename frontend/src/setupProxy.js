const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/analysis",
    createProxyMiddleware({
      target: process.env.REACT_APP_ANALYZE_DOMAIN,
      changeOrigin: true,
    })
  );
};
