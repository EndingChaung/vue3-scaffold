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
  },
  methods: {
  },
};
</script>

<template lang="pug">
.nav-bar
  .nav-system
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
</style>
