import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import router from './router';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routers = new VueRouter({
  mode: 'history',
  routes: router
})

new Vue({
  router: routers,
  render: h => h(App),
}).$mount('#app')
