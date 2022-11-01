const path=require('path')

module.exports = {
    entry: './src/index.mjs',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode:'production'
}