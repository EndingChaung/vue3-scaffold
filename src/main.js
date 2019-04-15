import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import apis from '@/apis';
import utils from '@/plugins/utils';

Vue.use(Antd);

Vue.config.productionTip = false;
Vue.prototype.$apis = apis;
Vue.prototype.$utils = utils;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
