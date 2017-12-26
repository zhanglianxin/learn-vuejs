import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
    // The third argument, savedPosition, is only available if this is a
    // `popstate` navigation (triggered by the browser's back/forward buttons).
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return {
                selector: to.hash,
            };
        }
    },
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
