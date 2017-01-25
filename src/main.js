// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'

import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'

import store from './vuex'
import { sync } from 'vuex-router-sync'

import VueResource from 'vue-resource'
import 'vue-material/dist/vue-material.css'

import { routes } from './router-config'

Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueResource)

/* tema default */
Vue.material.registerTheme({ Primary: { color: 'indigo', hue: 'A200' } })

/* mode: 'history' (serve para tirar o /#/ da url) */
const router = new VueRouter({ routes, mode: 'history' })

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
