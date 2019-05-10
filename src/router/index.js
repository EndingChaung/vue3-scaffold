import Vue from 'vue';
import Router from 'vue-router';
import HomeLayout from '@/layouts/HomeLayout';
import Home from '@/views/Home/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomeLayout,
      children: [
        ...Home,
      ],
    },
  ],
});
