const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  target: "serverless",
  env: {
    GRAPHQL_API: "http://localhost:3000/api/graphql",
  },
});
