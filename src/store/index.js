import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as types from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    loading: false,
  },
  mutations: {
    [types.SET_LOADING](state, payload) {
      state.loading = payload;
    },
    [types.SET_TOKEN](state, payload) {
      state.token = payload;
    },
  },
  actions: {

  },
  getters: {

  },
  plugins: [
    createPersistedState({
      paths: ['token'],
    }),
  ],
});
