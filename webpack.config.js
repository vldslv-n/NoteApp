const CopyWebpack = require('copy-webpack-plugin')

const config = {
    entry: {
        app: __dirname + "/src/index.jsx",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    resolve: {
        modules: ["node_modules", __dirname + "/src"],
        extensions: ['.js', '.jsx', '.css']
    },
    plugins: [
        new CopyWebpack([
            {
                from: __dirname + "/public/index.html"
            }
        ])
    ]
}
module.exports = config