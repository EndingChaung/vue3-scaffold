<template lang="pug">
  .home
    a-button(type="primary") 项目管理工具首页
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  created() {
    this.getHeadInfo();
  },
  methods: {
    async getHeadInfo() {
      try {
        const { data } = await this.$apis.model.GetRecentStatisticalData();
        console.log(data);
      } catch (error) {
        this.$message.error('获取数据异常', 3);
      }
    },
  },
};
</script>
