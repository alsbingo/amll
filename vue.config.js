// const path = require('path');
// module.exports={
//   chainWebpack: config => {
//     // svg rule loader
//     const svgRule = config.module.rule('svg') // 找到svg-loader
//     svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
//     svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
//     svgRule // 添加svg新的loader处理
//       .test(/\.svg$/)
//       .use('svg-sprite-loader')
//       .loader('svg-sprite-loader')
//       .options({
//         symbolId: 'icon-[name]',
//       })
//       // const fileRule = config.module.rule('file');
//       // fileRule.uses.clear();
//       // fileRule
//       //   .test(/\.svg$/)
//       //   .exclude.add(path.resolve(__dirname, './src/assets/img'))
//       //   .end()
//       //   .use('file-loader')
//       //   .loader('file-loader');

//   }

// }

module.exports = {
  pluginOptions: {
      svgSprite: {
          /*
           * The directory containing your SVG files.
           */
          dir: 'src/assets/img',
          /*
           * The reqex that will be used for the Webpack rule.
           */
          test: /\.(svg)(\?.*)?$/,
          /*
           * @see https://github.com/kisenka/svg-sprite-loader#configuration
           */
          loaderOptions: {
              extract: true,
              spriteFilename: 'img/icons.[hash:8].svg' // or 'img/icons.svg' if filenameHashing == false
          },
          /*
           * @see https://github.com/kisenka/svg-sprite-loader#configuration
           */
          pluginOptions: {
              plainSprite: true
          }    
      }    
  } ,
  chainWebpack: config => {
    config.module
        .rule('svg-sprite')
        .use('svgo-loader')
        .loader('svgo-loader');
},
// devServer:{
//   host:'0.0.0.0',
//   port:8000
// }
};
