<script>
export default {
  name: 'NavBar',
  data() {
    return {
      activeIndex2: '1',
    };
  },
  created() {
  },
  mounted() {
    this.matchRouter();
  },
  methods: {
    goPage(val) {
      this.$router.push(val);
    },
    matchRouter() {
      const path = this.$route.matched[0].path.split('/')[1];
      switch (path) {
        case 'about': {
          this.activeIndex2 = '1';
          break;
        }
        case 'arbitration': {
          this.activeIndex2 = '2';
          break;
        }
        case 'account': {
          this.activeIndex2 = '3';
          break;
        }
        case 'guide': {
          this.activeIndex2 = '4';
          break;
        }
        case 'message': {
          this.activeIndex2 = '5';
          break;
        }
        default: {
          break;
        }
      }
    },
    handleSelect(key, keyPath) { // eslint-disable-line
      // eslint-disable-next-line
      // console.log(key, keyPath);
    },
    go() {
      this.$message.warning('开发中');
    },
    goHomePage() {
      window.location.href = this.$configs.homeUrl;
    },
  },
};
</script>

<template lang="pug">
.nav-bar
  .logo(@click="goHomePage" exact)
    img.logo-icon(src="../assets/images/logo.svg")
  .nav-system
    i.iconfont &#xe66d;
    span 项目管理工具
</template>

<style lang="stylus" scoped>
.nav-bar
  display flex
  min-width $main-container-width
  height 60px
  background $theme-main-bg-dark-color
  box-sizing border-box
  color $theme-main-text-dark-color
  .logo
    cursor pointer
    width 120px
    height 60px
    display flex
    align-items center
    .logo-icon
      width 80px
    .tclogo-icon
      width 34px
    .h-line
      line-height 67px
      font-size 22px
      color rgba(255, 255, 255, 0.2)
      padding 0 16px
    .title
      font-size 20px
      font-weight bold
      margin-left 10px
      color #ffffff
  .nav-system
    min-width 130px
    line-height 67px
    font-size 20px
    overflow hidden
    & > .iconfont
      font-size 18px
      color $theme-main-color
    & > span
      display inline-block
      margin-left 5px
      color $theme-main-color
  .nav-items
    width 100%
    min-width 500px
    height 60px
    box-sizing border-box
    background $theme-main-bg-dark-color
    .el-menu-demo
      padding-left 240px
      i
        padding-right 8px
    .menus
      float right
      box-sizing border-box
      list-style none
      outline none
      li
        display inline-block
        position relative
        cursor pointer
        a, span
          display inline-block
          box-sizing border-box
          text-decoration none
          padding 0 10px
          height 60px
          line-height 60px
          color $theme-main-bg-light-color
          cursor pointer
          vertical-align middle
          &:hover .go-wc
            opacity 1
          .fa
            margin-right 6px
          .iconfont
            font-size 15px !important
            vertical-align middle
          .go-wc
            opacity 1
            padding 0
            height 100%
            margin-left 10px
            vertical-align middle
          .item
            display inline !important
      li:last-child
        .iconfont
          font-size 20px !important
          vertical-align middle
        span
          color rgba(255, 255, 255, 0.2)
        label
          cursor pointer
        span,a
          .iconfont
            padding-right 0
      .activeItem
        color $theme-main-color
.make-sure-btn
  background $theme-main-text-focus-color
  color #ffffff
  border-color $theme-main-text-focus-color

</style>
