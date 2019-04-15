<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'HomeLayout',
  components: {
    NavBar,
  },
  data() {
    return {
      Interval: null,
    };
  },
  computed: {
    keepAliveInclude() {
      return [
        'login__index',
      ];
    },
    keepAliveExclude() {
      return [];
    },
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
.fdd-fl-container
  .main-header
    .header-content
      nav-bar.header
  .main-content(ref="scrollMain")
    .main-max-content
      transition
        keep-alive(:include="keepAliveInclude", :exclude="keepAliveExclude")
          router-view
</template>

<style lang="stylus" scoped>
.fdd-fl-container
  display flex
  flex-direction column
  justify-content center
  // background $theme-main-bg-color
  width 100%
  height 100vh
  .main-header, .main-header-one
    width 100%
    background $theme-main-bg-dark-color
    height 60px
    .header-content
      width 100%
      height 60px
      display flex
      flex-direction row
      // justify-content center
      .header
        width $main-container-width
  .main-header-dark, .main-header-light
    color #ffffff
    height 100px
    transition height .5s
    .header-content
      height 100px
  .userInfoNav
    height 0
  .main-header-dark
    background url('../assets/images/headNavBg.png') center no-repeat
    background-size cover
  .main-header-light
    background $theme-main-bg-white-color
  .main-content
    display flex
    flex-direction row
    justify-content center
    width 100%
    height 100%
    // min-height calc(100vh - 200px)
    box-sizing border-box
    overflow auto
    background #F9F9F9
    .main-max-content
      width $main-container-width
  .userInfoNav
    height 0
  .main-footer
    width 100%
    background $theme-main-bg-dark-color
    height 38px
</style>
