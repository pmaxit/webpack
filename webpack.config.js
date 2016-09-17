var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports={
	entry: './app/main.js',
	output:{
		path: __dirname + "/build",
		filename: "bundle.js"
	},
	module:{
		loaders:[
			{
				test: /\.json$/,   // test to check the file
				loader: "json"     // loader name

			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style','css?modules!postcss')
			}
		]
	},
	plugins:[
		new webpack.BannerPlugin("Copyright Flying Unicorns Inc"),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('style.css')
	],

	devServer:{
		contentBase: "./",
		colors: true,
		inline: true,
		historyApiFallback: true,
		hot:true
	}
}
