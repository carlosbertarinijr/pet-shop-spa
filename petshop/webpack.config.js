const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    devServer: {
        open: true, 
        contentBase: "dist"
    },
    entry: "./src/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/clientes.html",
            filename: "index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]                
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.png$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[nome].[ext]"
                    }
                }
            }
        ]
    }
}