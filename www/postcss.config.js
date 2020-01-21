const tailwindcss = require("tailwindcss");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    require("postcss-easy-import"),
    tailwindcss("./tailwind.config.js"),
    ...(process.env.NODE_ENV !== "development"
      ? [
          require("@fullhuman/postcss-purgecss")({
            content: [
              "./components/**/*.js",
              "./pages/**/*.js",
              "./components/**/*.tsx",
              "./pages/**/*.tsx",
            ],
            defaultExtractor: content =>
              content.match(/[A-Za-z0-9-_:/]+/g) || [],
          }),
          require("autoprefixer"),
          require("cssnano"),
        ]
      : []),
  ],
};
