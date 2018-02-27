// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueMatchHeights from 'vue-match-heights';
import App from './App';
import router from './router';
import store from './store';
import VueProgressBar from 'vue-progressbar';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';
import './style.scss';
import {mapGetters} from 'vuex';


Vue.use(VueMatchHeights, {});

Vue.use(VueProgressBar, {
  color:       '#2196F3',
  failedColor: '#874b4b',
  thickness:   '5px',
  transition:  {
    speed:       '0.2s',
    opacity:     '0.6s',
    termination: 300,
  },
  autoRevert:  true,
  location:    'top',
  inverse:     false,
});

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary:   colors.lightBlue.base,
    accent:    colors.indigo.base,
    secondary: '#F7FFE0',
    error:     '#ff0041'
  },
});

/* eslint-disable no-new */
export const app = new Vue({
  el:         '#app',
  router,
  store,
  computed:   {
    ...mapGetters({
      getListOfPortfolioItems: 'getListOfPortfolioItems',
      homeColors: 'getHomeColors'
    })
  },
  components: {App},
  template:   '<App/>'
});
