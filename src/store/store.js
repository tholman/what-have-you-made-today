import Vue from 'vue'
import Vuex from 'vuex'
import API from '../utils/api.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    sites: [],
    config: false
  },
  getters: {
    getTopSites() {
      return this.state.sites;
    }
  },
  mutations: {
    SET_SITES(state, data) {
      state.sites = data;
    },
    SET_SITE(state, data) {
      state.sites[data.index][data.field] = data.value;
    },
    SET_CONFIG(state, data) {
      state.config = data;
    },
  },
  actions: {
    async init({commit}) {
      const data = await API.getTopSites();
      commit('SET_SITES', data);
    },
    set_site({commit}, data) {
      commit('SET_SITE', data);
      API.saveTopSites(JSON.parse(JSON.stringify(this.state.sites)))
    },
    set_config({commit}, data) {
      commit('SET_CONFIG', data);
    }
  }
});

store.dispatch('init');

export default store;