// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import api from './api/index.js'
Vue.use(iView)
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.url = "http://127.0.0.1/workphp"


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
