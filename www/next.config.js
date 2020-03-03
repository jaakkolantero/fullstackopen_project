const withCSS = require("@zeit/next-css");
require("./env.js");

module.exports = withCSS({
  target: "serverless",
  env: {
    GRAPHQL_API: "http://localhost:3000/api/graphql",
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_PUBLIC_API_KEY: process.env.FIREBASE_PUBLIC_API_KEY,
    //NOT NEEDED AT BUILDTIME
    // FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
    // SESSION_SECRET_CURRENT: process.env.SESSION_SECRET_CURRENT,
    // SESSION_SECRET_PREVIOUS: process.env.SESSION_SECRET_PREVIOUS,
  },
});
