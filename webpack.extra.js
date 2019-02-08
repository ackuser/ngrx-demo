const webpack = require('webpack');
const PacktrackerPlugin = require('@packtracker/webpack-plugin')

module.exports = {
    plugins: [
        new webpack.BannerPlugin('----- NgRx Demo By Kumaran Srinivasan -----'),
        new PacktrackerPlugin({
          project_token: 'a983de47-5d29-4f57-82f0-6e318f67cc8c',
          upload: true,
          fail_build: true
        })
    ]
}
