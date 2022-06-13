const path = require('path')
    //导入一个HTML插件，获得一个构造函数
const HtmlPlugin = require('html-webpack-plugin')
    //导入一个插件
    //左侧的{}表示结构复制
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 示例化一个html对象
const htmlPlugin = new HtmlPlugin({
    // 指定原文件的存放路径
    template: './src/index.html',
    // 指定生成文件的存放路径
    filename: './index.html'
})

module.exports = {
    //代表webpack运行的模式，development和production
    mode: "development",
    // devtool: "eval-source-map",
    //在实际发布的时候建议将devtool的值设置为nosources-source-map
    devtool: "nosources-source-map",

    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "js/bundle.js",
    },
    //通过plugin节点使plugin插件生效
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
    devServer: {
        open: true,
        host: "127.0.0.1",
        port: 80,
    },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
            //处理图片文件的loader
            // 在配置url-loader的时候，多个参数之间使用&符号进行分隔
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=480&outputPath=images' },
            // {
            //     test: /\.jpg|png|gif$/,
            //     use: {
            //         loader: "url-loader",
            //         options: {
            //             limit: 480,
            //             outputPath: "image",
            //         },
            //     },
            // },
            //使用babel-loader处理高级的js语法
            { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
        ],
    },
};