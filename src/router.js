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
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
