const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = (env, argv) => {
  console.log(`This is the Webpack 4 'mode': ${argv.mode}`);
  return({
      devtool: 'eval-source-map',
      entry: './src/index.ts',
      mode: 'development',
      module: {
        rules: [{
            exclude: /node_modules/,
            include: [path.resolve(__dirname, './src/')],
            resolve: {
              extensions: ['.ts', '.tsx'],
            },
            test: /\.ts|tsx$/,
            use: 'ts-loader',
        }],
      },
      plugins: [new HtmlWebpackPlugin()]
  })
}