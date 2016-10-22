import 'bulma'
import 'babel-polyfill'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import App from './App.vue'
import Guests from './components/Guests.vue'
import Events from './components/Events.vue'

import * as actions from './vuex/actions.js'
import * as getters from './vuex/getters.js'
import general from './vuex/modules/_general.js'
import events from './vuex/modules/events.js'
import guests from './vuex/modules/guests.js'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:8080'

const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    general,
    events,
    guests
  }
})

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'is-active',
  routes: [
    { path: '/', redirect: '/guests' },
    { path: '/guests', component: Guests },
    { path: '/events', component: Events }
  ]
})

new Vue({
  router,
  store,
  el: '#app',
  strict: process.env.NODE_ENV !== 'production',
  render: h => h(App)
})
