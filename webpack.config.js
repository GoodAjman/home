const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const publicPath = '/';
const getHTMLplugin = (name)=>({
        template:'./src/view/'+name+'.html',
        filename:name+'.html',
        inject:true,
        chunks:['common',name]
    });

//导出配置
module.exports = {
	//模式
	mode:'development',
	//指定入口文件
	entry:{
    common:'./src/pages/common/index.js',
    index:'./src/pages/index/index.js',
    login:'./src/pages/login/index.js',
  },
	//指定出口
	output:{
		//出口文件名称
		filename:'js/[name].js',
		//出口文件存储路径
		path:path.resolve(__dirname,'dist'),
    publicPath:publicPath,

	},
  resolve: {
    alias: {
      util: path.resolve(__dirname, './src/util/'),
      api: path.resolve(__dirname, './src/api/'),
      common:path.resolve(__dirname, './src/common/'),
      pages:path.resolve(__dirname,'./src/pages')
    }
  },
  externals: {
    jquery: 'window.jQuery'
  },
	//配置loader
  module: {
    rules: [
    	//处理css文档的loader
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
            }
          },
          "css-loader"
        ]
      },
      //处理图片loader
	    {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
    	},
      {
        test:/\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
               presets: ['env','es2015','react','stage-3'],
                //antd 按需加载
                plugins: [
                  ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] 
                ]                
            }
        }               
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
         use: [
          {
            loader: 'url-loader'
          }
        ]
      }             
    ]
  },
  plugins: [
  	new HtmlWebpackPlugin(getHTMLplugin('index')),
    new HtmlWebpackPlugin(getHTMLplugin('login')),
  	new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    })
  ],
  devServer: {
    contentBase: './dist',
    port:3001,
    historyApiFallback:true
  }
};