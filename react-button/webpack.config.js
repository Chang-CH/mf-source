const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { FederatedTypesPlugin } = require('@module-federation/typescript');

const deps = require("./package.json").dependencies;

const federationConfig = {
  name: "reactButton",
  filename: "remoteEntry.js",
  remotes: {},
  exposes: {
    "./ReactButton": "./src/components/ReactButton", // This is impt
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};

module.exports = (_, argv) => ({
  output: {
    publicPath: "https://chang-ch.github.io/mf-source/ReactButton/",
  },

  infrastructureLogging: {
    level: 'log'
  },
  

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8081,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
        }
      }
    ],
  },

  plugins: [
    new ModuleFederationPlugin(federationConfig),
    new FederatedTypesPlugin({
      federationConfig,
      // ...
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
