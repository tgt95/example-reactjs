const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: ["file-loader"]
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        use: ["file-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(s[ac]ss|css)$/, // duyệt các file sass || scss || css
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', // dùng import 'filename.css' trong file tsx, ts
            options: { sourceMap: true } // Hiển thị sourcemap ở môi trường dev cho dễ debug
          },
          {
            loader: 'sass-loader', // biên dịch sass sang css
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  devServer: {
    hot: true, // enable Hot Module Replacement, kiểu như reload nhanh
    // port: 3000, // Chạy port 3000 khi dev
    historyApiFallback: true, // Phải set true nếu không khi bạn dùng lazyload module React thì sẽ gặp lỗi không load được file.
    // Cấu hình phục vụ file html trong public
    static: {
      directory: path.resolve(__dirname, 'public', 'index.html'),
      serveIndex: true,
      watch: true // khi thay đổi content trong index.html thì cũng sẽ reload
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin()
  ]
};
