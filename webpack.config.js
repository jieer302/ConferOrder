
var webpack = require('webpack');

module.exports = {//注意这里是exports不是export
    devtool: 'eval-source-map',//生成Source Maps,这里选择eval-source-map
    entry: ['webpack/hot/dev-server', __dirname + '/src/main.js'],//唯一入口文件,__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    output: {//输出目录
        path: __dirname + "/build",//打包后的js文件存放的地方
        filename: "bundle.js"//打包后的js文件名
    },

    module: {
        //加载器
        rules: [
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader',//loader的名称（必须）
                query: {
                    presets: ['es2015', 'react','stage-0']
                }
            },
            {
                // test 表示测试什么文件类型
                test:/\.(css|less)$/,
                // 使用 'style-loader','css-loader'
                use:['style-loader','css-loader']
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
    ],

    //webpack-dev-server配置
    devServer: {
        contentBase: './build',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        historyApiFallback: true,
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 8080,//设置默认监听端口，如果省略，默认为"8080"
    },

   performance: {
        hints: false
    }
};
