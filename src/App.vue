<template lang="pug">
  #app
    router-view
</template>
<style lang="stylus">
@import './assets/styles/global.styl'

@font-face {
  font-family: 'iconfont';  /* project id 1048899 */
  src: url('//at.alicdn.com/t/font_1048899_znje5337urm.eot');
  src: url('//at.alicdn.com/t/font_1048899_znje5337urm.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1048899_znje5337urm.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1048899_znje5337urm.woff') format('woff'),
  url('//at.alicdn.com/t/font_1048899_znje5337urm.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1048899_znje5337urm.svg#iconfont') format('svg');
}

#app
  font-family PingFangSC-Regular, 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

.iconfont
  font-family "iconfont" !important
  font-size 16px
  font-style normal
  -webkit-font-smoothing antialiased
  -webkit-text-stroke-width 0.2px
  -moz-osx-font-smoothing grayscale

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
