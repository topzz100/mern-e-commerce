 
// const webpack = require('webpack'); 
// module.exports = function override(config) { 
// 		const fallback = config.resolve.fallback || {}; 
// 		Object.assign(fallback, { 
//       "util": require.resolve("util"),
//     	//"crypto": require.resolve("crypto-browserify"), 
//       "stream": require.resolve("stream-browserify"), 
//       "path": require.resolve("path-browserify"), 
//       // "http": require.resolve("stream-http"), 
//       // "https": require.resolve("https-browserify"), 
//       "os": require.resolve("os-browserify"), 
//       // "url": require.resolve("url") 
//       "fs": false,
//       "child_process" : false 
//       }) 
//    config.resolve.fallback = fallback; 
//    config.plugins = (config.plugins || []).concat([ 
//    	new webpack.ProvidePlugin({ 
//     	process: 'process/browser', 
//       Buffer: ['buffer', 'Buffer'] 
//     }) 
//    ]) 
//    return config; }
