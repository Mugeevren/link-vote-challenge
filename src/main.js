/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import store from './store/Store'
import 'vuetify/dist/vuetify.min.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Notifications from 'vue-notification'

Vue.use(Vuetify)
Vue.use(Notifications)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  beforeCreate() {
	  this.$store.commit('initialiseStore');
  },
});
