import Vue from 'vue'
import Router from 'vue-router'
import {app} from '../main'

const HomePage      = () => Promise.resolve(import('../components/HomePage'));
const About         = () => Promise.resolve(import('../components/About'));
const PortfolioList = () => Promise.resolve(import('../components/PortfolioList'));
const PortfolioItem = () => Promise.resolve(import('../components/PortfolioItem'));

Vue.use(Router);

const router = new Router({
  saveScrollPosition: true,
  mode:               'history',
  routes:             [
    {
      path:      '/',
      name:      'Home',
      component: HomePage
    },
    {
      path:      '/projects',
      name:      'PortfolioList',
      component: PortfolioList,
    },
    {
      path:      '/projects/:id',
      name:      'PortfolioItem',
      component: PortfolioItem
    },
    {
      path:      '/about',
      name:      'About',
      component: About
    },
    {
      path:      '*',
      component: HomePage
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      app.$vuetify.goTo(savedPosition.x, {duration: 300, easing: 'easeInOutCubic'});
    }
    app.$vuetify.goTo(0, {duration: 300, easing: 'easeInOutCubic'});
  },
});

export default router;
