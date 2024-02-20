const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "client", "root.jsx"),
  output: {
    path: path.resolve(__dirname, "client", "src", "dist"),
    publicPath: "/",
    filename: "bundle.js",
    assetModuleFilename: "assets/[hash][ext][query]"
  },
  devServer: {
    static: [
    {
      directory: path.resolve(__dirname, "client", "src", "dist"),
    }
    ],
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      // babel loaders here
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["module:react-native-dotenv"]
          }
        }
      },
      // css loaders here
      {
        test: /\.(css)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
        ]
      },
      {
        test: /\.(pdf|png|jpe?g|gif|svg|md|html)$/i,
        type: 'asset/resource',
      },
    ]
  },

}