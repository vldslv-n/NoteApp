const CopyWebpack = require('copy-webpack-plugin')

const config = {
    entry: {
        app: __dirname + "/src/index.tsx",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-react", "@babel/preset-typescript"
                        ],
                        plugins: ["@babel/plugin-proposal-class-properties",
                            "@babel/plugin-proposal-object-rest-spread"
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
        extensions: ['.ts', '.tsx', '.css', '.js']
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