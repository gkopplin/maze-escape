const path = require('path');

module.exports = {
    entry: './lib/maze_escape.js',
    output: {
        filename: './bundle.js'
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: [".js", "*"]
    }
};