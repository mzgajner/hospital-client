<style lang="sass">
</style>

<template>
  <div id="app">
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-center">
          <router-link class="nav-item is-tab" to="/guests">Guests</router-link>
          <router-link class="nav-item is-tab" to="/events">Events</router-link>
          <router-link class="nav-item is-tab" to="/transports">Transports</router-link>
          <router-link class="nav-item is-tab" to="/rooms">Rooms</router-link>
          <router-link class="nav-item is-tab" to="/payers">Payers</router-link>
          <router-link class="nav-item is-tab" to="/roomTypes">Room Types</router-link>
        </div>
      </div>
    </nav>

    <section class="section">
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: mapActions(['fetchAll']),
  mounted() {
    this.fetchAll()
  }
}
</script>
