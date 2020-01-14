const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
  target: "serverless",
  env: {
    GRAPHQL_API: "http://localhost:3000/api/graphql",
  },
});
