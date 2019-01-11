const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy("/weather", { target: "http://localhost:8000", changeOrigin: true, "secure": false}));
};
