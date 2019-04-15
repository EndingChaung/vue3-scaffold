const path = require('path')
module.exports = {
  chainWebpack: (config) => {
    config.module.rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end();
  },
  css: {
    loaderOptions: {
      stylus: {
        import: path.resolve(__dirname, './src/assets/styles/variables.styl')
      },
    }
  }
};
