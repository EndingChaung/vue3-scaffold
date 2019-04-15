/* eslint-disable */
"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const instance = axios.create({
  baseURL: process.env.VUE_APP_APIURL,
});

instance.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      Accept: 'application/json',
      withCredentials: true,
    },
  };
}, (error) => {
  return Promise.reject(error);
});

instance.defaults.timeout = 36000000 //设置超时时间

instance.interceptors.response.use((response) => {
  if (response.data.Code === 401) {
    // store.commit('SET_TOKEN', false);
  } else if (response.data.Code === 404 || response.status === 404) {
    router.replace('/404');
  } else {
    // store.commit('SET_TOKEN', true);
    return response;
  }
  // return response;
}, (error) => {
  return Promise.reject(error);
});

// Plugin.install = function(Vue, options) {
//   Vue.axios = instance;
//   window.axios = instance;
//   Object.defineProperties(Vue.prototype, {
//     axios: {
//       get() {
//         return instance;
//       }
//     },
//     $axios: {
//       get() {
//         return instance;
//       }
//     },
//   });
// };

// Vue.use(Plugin)

// export default Plugin;
export default instance;
