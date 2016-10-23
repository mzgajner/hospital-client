import 'bulma'
import 'babel-polyfill'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import App from './App.vue'
import Events from './components/Events.vue'
import Guests from './components/Guests.vue'
import Payers from './components/Payers.vue'
import Rooms from './components/Rooms.vue'
import RoomTypes from './components/RoomTypes.vue'
import Transports from './components/Transports.vue'

import * as actions from './vuex/actions.js'
import * as getters from './vuex/getters.js'
import state from './vuex/state.js'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:8080'

const store = new Vuex.Store({
  actions,
  getters,
  ...state
})

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'is-active',
  routes: [
    { path: '/', redirect: '/guests' },
    { path: '/events', component: Events },
    { path: '/guests', component: Guests },
    { path: '/payers', component: Payers },
    { path: '/rooms', component: Rooms },
    { path: '/roomTypes', component: RoomTypes },
    { path: '/transports', component: Transports }
  ]
})

new Vue({
  router,
  store,
  el: '#app',
  strict: process.env.NODE_ENV !== 'production',
  render: h => h(App)
})
