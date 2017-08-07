var path = require('path');
var htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:{
        main:'./src/script/main.js',
        a:'./src/script/a.js',
    },
    output:{
        path:__dirname+'/dist',
        filename:'js/[name]-[chunkhash].js',
    },
}