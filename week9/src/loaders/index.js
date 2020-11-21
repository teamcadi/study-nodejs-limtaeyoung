const loadErrorHandling = require("./err.loader");
const loadMiddleware = require("./mw.loader");
const loadRouter = require("./router.loader");

const loaders = (app) => {
  // 1. load application middleware
  loadMiddleware(app);
  // 2. load router
  loadRouter(app);
  // 3. error handling
  loadErrorHandling(app);
};

module.exports = loaders;
