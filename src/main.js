import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import vueScroller from 'vue-scroller'
import axios from 'axios'


FastClick.attach(document.body)
Vue.use(vueScroller)
// Vue.use(axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
