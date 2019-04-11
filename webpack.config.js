const path = require('path');

module.exports = {
    entry: './lib/game.js',
    output: {
        filename: './bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", "*"]
    }
};