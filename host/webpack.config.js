const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { FederatedTypesPlugin } = require('@module-federation/typescript');

const deps = require("./package.json").dependencies;


const federationConfig = {
  name: "host",
  filename: "remoteEntry.js",
  remotes: {
    // vueButton: `vueButton@https://chang-ch.github.io/mf-source/remoteEntry.js`,
    vueButton: `vueButton@https://chang-ch.github.io/mf-source/VueButton/remoteEntry.js`,
    reactButton: `reactButton@https://chang-ch.github.io/mf-source/ReactButton/remoteEntry.js`,
  },

  exposes: {},
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
}


module.exports = (_, argv) => ({
  output: {
    publicPath: "https://chang-ch.github.io/mf-source/",
  },

  infrastructureLogging: {
    level: 'log'
  },
  


  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
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
