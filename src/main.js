import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import BoostrapVue from 'bootstrap-vue'
Vue.use(BoostrapVue)

import money from 'v-money'
Vue.use(money, {precision: 4})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
