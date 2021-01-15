import Vue from "vue";
import App from "./App.vue";
import * as axios from "./utils/contract.js"; //引入封装好的axios

Vue.config.productionTip = false;
Vue.prototype.$base_url = process.env.VUE_APP_BASEURL; //获取请求头地址
Vue.prototype.$axios = axios; //全局使用

new Vue({
  render: (h) => h(App),
}).$mount("#app");
