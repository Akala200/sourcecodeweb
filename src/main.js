/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import Axios from 'axios'
import store from './store'

import routes from './routes'
import app from './App.vue'

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)

Vue.prototype.$http = Axios

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

const main = new Vue({
  el: '#app',
  components: { app },

  render: function (createElement) {
    return createElement(app)
  },

  router,
  store
})
