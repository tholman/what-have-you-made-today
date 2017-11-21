var webpack = require("webpack");
var path = require("path");

// Naming and path settings
var appName = "app";
var entryPoint = "./src/main.js";
var exportPath = path.resolve(__dirname, "./build");

// Enviroment flag
var plugins = [];
var env = process.env.WEBPACK_ENV;

// Differ settings based on production flag
if (env === "production") {
  // var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
  // plugins.push(new UglifyJsPlugin({ minimize: true }));
  plugins.push(
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    })
  );

  appName = appName + ".min.js";
} else {
  appName = appName + ".js";
}

// Main Settings config
module.exports = {
  entry: entryPoint,
  output: {
    path: exportPath,
    filename: appName
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "build/",
              outputPath: "assets/"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      assets: path.resolve(__dirname, "./src/assets")
    }
  },
  plugins
};
