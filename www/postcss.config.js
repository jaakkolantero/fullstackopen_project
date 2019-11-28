var tailwindcss = require("tailwindcss");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    ...(process.env.NODE_ENV === `production`
      ? [
          require("@fullhuman/postcss-purgecss")({
            content: ["./src/**/*.js"],
            defaultExtractor: content =>
              content.match(/[A-Za-z0-9-_:/]+/g) || [],
          }),
          require("autoprefixer"),
          require("cssnano"),
        ]
      : []),
    require("postcss-easy-import"),
    postcssPresetEnv({
      stage: 0,
    }),
  ],
};
