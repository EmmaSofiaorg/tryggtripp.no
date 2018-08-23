// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueHead from 'vue-head';
import VueStash from 'vue-stash';
import App from './App';
import router from './router';
import store from './store';

Vue.use(VueStash);
Vue.use(VueHead);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: { store },
  template: '<App/>',
  components: { App },
}).$mount('#app');
