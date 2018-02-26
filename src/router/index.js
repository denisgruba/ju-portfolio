import Vue from 'vue'
import Router from 'vue-router'

const HomePage      = () => Promise.resolve(import('../components/HomePage'));
const About = () => Promise.resolve(import('../components/About'));
const PortfolioList = () => Promise.resolve(import('../components/PortfolioList'));
const PortfolioItem = () => Promise.resolve(import('../components/PortfolioItem'));

Vue.use(Router);

export default new Router({
  mode:   'history',
  routes: [
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
  ]
})
