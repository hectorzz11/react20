//donde se ubica el proyecto
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//configuraciones para el proyecto
module.exports = {
    //el punto de entrada de la aplicación
	entry: './src/index.js',
    //cuando este preparado el proyecto va a quedar en :
	output: {
		path: path.resolve(__dirname, 'dist'),
        //nombre del empaquetado que se va a crear
		filename: 'bundle.js',
		publicPath:'/',
	},
	mode:'development',
    //extensiones que se van a utilizar dentro del proyecto
	resolve: {
		extensions: ['.js', '.jsx'],
		alias:{
			'@components': path.resolve(__dirname, 'src/components/'),
			'@containers': path.resolve(__dirname, 'src/containers/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@icons': path.resolve(__dirname, 'src/assets/icons/'),
			'@logos': path.resolve(__dirname, 'src/assets/logos/'),
		}
	},
    //aqui se trabajan las reglas 
	module: {
		rules: [
			{
                //elementos con los cuales se trabajara
				test: /\.(js|jsx)$/,
                //se excluye lo que no se quiera que se lea en este modulo                
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
                //trabajar con html 
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test:/\.(css|scss)$/,
				use:[
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test:/\.(png|svg|jpg|gif)$/,
				type:'asset'

			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename:'[name].css'
		}),		
	],
	devServer:{
		historyApiFallback:true,
			
		//contentBase: path.join(__dirname, 'dist'),
		/*allowedHosts: path.join(__dirname, 'dist'),
		compress:true,
		port:3005,*/

	}
}