/* eslint-disable */
"use strict";

import Vue from 'vue';
import axios from "axios";
import router from '@/router';
import { message } from 'ant-design-vue';

const instance = axios.create({
  baseURL: process.env.BASE_URL,
});
// let loading = null

instance.interceptors.request.use((config) => {
  // 在请求先展示加载框
  // loading = Loading.service({
  //   text: '正在加载中......'
  // })
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
  // 请求响应后关闭加载框
  // if (loading) {
  //   loading.close()
  // }
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
  // 请求响应后关闭加载框
  // if (loading) {
  //   loading.close()
  // }
  // 断网 或者 请求超时 状态
  if (!error.response) {
    // 请求超时状态
    if (error.message.includes('timeout')) {
      console.log('超时了')
      message.error('请求超时，请检查网络是否连接正常')
    } else {
      // 可以展示断网组件
      console.log('断网了')
      message.error('请求失败，请检查网络是否已连接')
    }
    return
  }
  return Promise.reject(error);
});

export default instance;
