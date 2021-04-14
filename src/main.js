import "element-ui/lib/theme-chalk/index.css";

import App from "./App.vue";
import ElementUI from "element-ui";
import Vue from "vue";
// Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
