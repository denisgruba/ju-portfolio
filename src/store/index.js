import Vue from 'vue';
import Vuex from 'vuex';
import portfolioItems from './portfolioItems';
import homeContent from './homeContent';
import aboutContent from './aboutContent';

Vue.use(Vuex);

const store = new Vuex.Store({
  state:     {
    pageColors: {
      secondary: '#ffffff',
      error:     '#ff0041'
    },
    sideNav:    false,
  },
  getters:   {
    getPageColors:   state => {
      return state.pageColors;
    },
    getSideNavState: state => {
      return state.sideNav;
    }
  },
  actions:   {},
  mutations: {
    setPageColors(state, payload) {
      state.pageColors = payload;
    },
    setSideNav(state, payload) {
      state.sideNav = payload;
    }
  },
  modules:   {
    portfolioItems,
    homeContent,
    aboutContent,
  }
});


export default store;
