const Home = r => require.ensure([], () => r(require('./Home.vue')), 'auth');

export default [{
  path: '/',
  name: 'homeIndex',
  component: Home,
}];
