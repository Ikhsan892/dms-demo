const CKEditorWebpackPlugin = require("@ckeditor/ckeditor5-dev-webpack-plugin");
const webpack = require("webpack");
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");
const { styles } = require("@ckeditor/ckeditor5-dev-utils");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const getLoaderByRegex = (loaders, regex) =>
  loaders.find(
    (item) => !Array.isArray(item.test) && String(item.test) === String(regex)
  );

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const CKEditorRegExp = {
  cssExp: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
  svgExp: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
};

const CKEditor5WebpackConfigPlugin = {
  overrideWebpackConfig: ({ webpackConfig, options = {} }) => {
    // Extract the oneOf array from the relevant webpack.module.rules object
    const { oneOf } = webpackConfig.module.rules.find((rule) => rule.oneOf);

    // Add the SVG and CSS loaders to the oneOf array in the first position.
    // As oneOf array uses the first loader that matches the value of test, we need to ensure that
    // SVGs and CSS files from ckeditor5 folder inside node_module, are using the correct loaders
    // provided on documentation: https://ckeditor.com/docs/ckeditor5/latest/installation/advanced/alternative-setups/integrating-from-source.html#webpack-configuration
    oneOf.unshift(
      {
        // ASSET-MODULES replaces raw-loader - https://webpack.js.org/guides/asset-modules/
        test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
        type: "asset/source",
      },
      {
        test: CKEditorRegExp.cssExp,
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "singletonStyleTag",
            },
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: styles.getPostCssConfig({
                themeImporter: {
                  themePath: require.resolve("@ckeditor/ckeditor5-theme-lark"),
                },
                minify: true,
              }),
            },
          },
        ],
      }
    );

    // Make sure cssRegex doesn't use loader for CKEditor5
    getLoaderByRegex(oneOf, cssRegex).exclude = [
      cssModuleRegex,
      CKEditorRegExp.cssExp,
    ];
    // Make sure cssModuleRegex doesn't use loader for CKEditor5
    getLoaderByRegex(oneOf, cssModuleRegex).exclude = [CKEditorRegExp.cssExp];

    return webpackConfig;
  },
};

module.exports = {
  plugins: [
    {
      plugin: CKEditor5WebpackConfigPlugin,
    },
  ],
  webpack: {
    plugins: [
      new CKEditorWebpackPlugin({
        // UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
        // When changing the built-in language, remember to also change it in the editor configuration (src/ckeditor.js).
        language: "en",
        additionalLanguages: "all",
      }),
      new webpack.BannerPlugin({
        banner: [
          "CKEditor 5 with collaboration features is licensed only under a commercial license and is protected by copyright law.",
          "For more details about available licensing options please contact us at" +
            " https://ckeditor.com/contact/.",
        ].join("\n"),
      }),
    ],
  },
};
