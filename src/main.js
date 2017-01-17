// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import 'vue-material/dist/vue-material.css'

import Hello from './components/Hello.vue'
import AboutUs from './components/AboutUs.vue'

/* iniciar o material */
Vue.use(VueMaterial)
/* iniciar as rotas */
Vue.use(VueRouter)

/* tema default */
Vue.material.registerTheme({ Primary: { color: 'indigo', hue: 'A200' } })

/* configurando rotas */
const routers = [
    { path: '/', redirect: '/hello' },
    { path: '/hello', component: Hello },
    { path: '/about-us', component: AboutUs }
]

/* mode: 'history' (serve para tirar o /#/ da url) */
const router = new VueRouter({
  mode: 'history',
  routes: routers })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
