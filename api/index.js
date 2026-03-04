const serverless = require("serverless-http");
const app = require("./apps/api/dist/index.js");

module.exports = serverless(app);
