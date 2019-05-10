// template.js
module.exports = {
  vueTemplate: compoenntName => {
    return `<script>
  export default {
    name: '${compoenntName}',
    data() {
      return {
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
.${compoenntName}
  | ${compoenntName}组件
<style lang="stylus" scoped>
</style>
`
  },
  entryTemplate: `import Main from './main';

export default Main;
`,
  routeTemplate: compoenntName => {
    return `const ${compoenntName} = r => require.ensure([], () => r(require('./${compoenntName}.vue')), 'auth');

export default [{
  path: '/${compoenntName}',
  name: '${compoenntName}Index',
  component: ${compoenntName},
}];
`},
};
