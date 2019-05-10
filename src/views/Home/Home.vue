<template lang="pug">
  .home 项目首页
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  mounted() {
    this.getHeadInfo();
  },
  methods: {
    async getHeadInfo() {
      try {
        const { data } = await this.$apis.model.GetRecentStatisticalData();
        // eslint-disable-next-line
        console.log(data);
      } catch (error) {
        this.$message.error('获取数据异常', 3);
      }
    },
    async goApi() {
      try {
        const { data } = await this.$apis.model.getApi();
        // eslint-disable-next-line
        console.log(data);
      } catch (error) {
        this.$message.error('获取数据异常1', 2);
      }
    },
  },
};
</script>
