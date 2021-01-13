import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixin'
import backTop from "./components/common/BackTop/backTop.js"


Vue.prototype.$backTop = backTop
Vue.config.productionTip = false
Vue.mixin(mixins)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
