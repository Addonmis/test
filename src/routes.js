import Vue from 'vue';
import Router from 'vue-router';

import Screen from './pages/Screen_page.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
    	path: '/',
    	component: Screen
    },
    {
      path: '/screen1',
      component: Screen
    },
    {
      path: '/screen2',
      component: Screen
    }
  ]
})
