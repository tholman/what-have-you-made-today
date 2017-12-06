import Vue from 'vue'
import Vuex from 'vuex'
import API from '../utils/api.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      sites: [],
      config: false
    },
    mutations: {
      SET_SITES(state, data) {
        state.sites = data;
      },
      SET_CONFIG(state, data) {
        state.config = data;
      }
    },
    actions: {
      async init({commit}) {
        const data = await API.getTopSites();
        commit('SET_SITES', data);
      },
      set_config({commit}, data) {
        commit('SET_CONFIG', data)
      }
    }
});

store.dispatch('init');

export default store;