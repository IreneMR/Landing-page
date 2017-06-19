const path = require('path');

 module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
	                loader: "style-loader"
	            }, {
	                loader: "css-loader"
	            }, {
	                loader: "sass-loader"
        		}
            ]
        }, {
    		test: /\.svg$/,
	        use: [{
        		loader: "svg-inline-loader"
	      	}]
        }]
    }
};