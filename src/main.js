// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import MintUI from 'mint-ui'
import 'element-ui/lib/theme-chalk/index.css';
import "./common/css/reset.css";
import "./common/js/flexble";
import "./assets/iconfont/iconfont.css";
import store from "./store";
import 'mint-ui/lib/style.css';

Vue.use(ElementUI)
Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
