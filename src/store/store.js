import Vue from 'vue'
import Vuex from 'vuex'
import API from '../utils/api.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      sites: []
    },
    mutations: {
      SET_SITES(state, data) {
        state.sites = data;
      }
    },
    actions: {
      init({commit}) {
        const data = API.getTopSites(function(data) {
          commit('SET_SITES', data);
        });
      }
    }
});

store.dispatch('init');

export default store;