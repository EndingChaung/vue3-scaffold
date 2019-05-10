<script>
export default {
  name: 'Footer',
  data() {
    return {
      dialogFormVisible2: false,
      form: {
        numCode: '',
      },
    };
  },
  created() {
  },
  mounted() {
    // this.fetchMessage();
  },
  methods: {
    goPage(val) {
      this.$router.push(val);
    },
    goBack() {
      window.location.href = this.$configs.homeUrl;
    },
    goWcPage() {
      this.dialogFormVisible2 = !this.dialogFormVisible2;
    },
    async sendMessage() {
      try {
        const { data } = await this.$apis.business.sendMessage();
        if (data.Code === 200) {
          this.$message({
            showClose: true,
            message: '验证码发送成功',
            type: 'success',
          });
        }
      } catch (error) {
        this.$message({
          showClose: true,
          message: '验证码发送失败',
          type: 'error',
        });
      }
    },
    pushWc(state) {
      if (state === 2) {
        this.$router.push('/wcLoading');
      } else {
        this.$router.push('/wcFail');
      }
    },
  },
};
</script>

<template lang="pug">
.footer-container
  .w
    .w-left
      .back-home(@click="goBack")
        i.iconfont &#xe657;
        span 返回首页
      .nethome(@click="pushWc(2)")
        i.iconfont &#xe61e;
        span 进入保全
      .nethome(@click="pushWc(2)")
        i.iconfont &#xe64f;
        span 进入网裁
    .link-slogen.float-right 一站式互联网信息的保险库
</template>

<style lang="stylus" scoped>
.w
  display flex
  justify-content space-between
  width $main-container-width
  margin-left auto
  margin-right auto
  line-height 36px
  font-size 12px
  .back-home, .nethome
    display inline-block
    color $theme-main-color
    cursor pointer
    &:hover
      color $theme-main-text-visited-color
    span
      padding-left 5px
  .link-slogen
    color #ffffff
  .nethome
    margin-left 30px
.make-sure-btn
  background $theme-main-text-focus-color
  color #ffffff
  border-color $theme-main-text-focus-color
</style>
