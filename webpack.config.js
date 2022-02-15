const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
// const eslint = new ESLintPlugin();

module.exports = (env, argv) => {
  console.log(`This is the Webpack 4 'mode': ${argv.mode}`);
  return({
      devtool: 'eval-source-map',
      entry: './src/index.ts',
      mode: 'development',
      options: {
          //eslint options
          cache: true,
          fix: true,
      }
      module: {
        rules: [{
            exclude: /node_modules/,
            include: [path.resolve(__dirname, './src/')],
            resolve: {
              extensions: ['.ts', '.tsx'],
            },
            test: /\.ts|tsx$/,
            use: ['ts-loader', 'eslint-loader'],
        }],
      },
      plugins:
          [new HtmlWebpackPlugin(), new ESLintPlugin(options)]

  })
}