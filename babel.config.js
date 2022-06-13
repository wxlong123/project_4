module.exports = {
    //将来webpack在调用babel-loader的时候，会先加载plugins插件来进行使用
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }]
    ]
}