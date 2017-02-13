module.exports={
   entry:"./index.js",
   output:"bundle.js",
   module:{
        loaders:[{
            test:/\.js[x]?$/,
            exclude:/node_modules/,
            loader:"babel-loader",
            query:{
                presets:["es2015","react"]
            }
        }]
   }
}