/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import Axios from 'axios'
import store from './store'
import VueSimpleAlert from "vue-simple-alert";
import VueToast from "vue-toast-notification";
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-sugar.css";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import routes from './routes'
import app from './App.vue'
const options = {
  // You can set your default options here
};
 
Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(VueSimpleAlert, { reverseButtons: true });
Vue.use(VueToast);
Vue.use(Toast, options);

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
