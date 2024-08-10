const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production", // Ensure webpack runs in production mode
  entry: './src/index.js', // Adjust this based on your actual entry point
  output: {
    filename: 'bundle.[contenthash].js', // Use contenthash for cache busting
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the output directory before emitting new files
  },
  module: {
    rules: [
      {
        test: /\.css$/, // For CSS files
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, // For image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images/', // Output to 'dist/images/'
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 75, // Adjust quality as needed
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75, // Convert images to WebP format if supported
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", // CSS file naming with contenthash
      chunkFilename: "[id].[contenthash].css",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
