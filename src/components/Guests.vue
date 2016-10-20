<style lang="sass">
</style>

<template>
  <div class="">
    <h2 class="title is-3">Guests</h2>

    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Events</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="guest in getGuests">
          <td>{{ guest.name }}</td>
          <td>{{ guest.events.map((event) => event.location).join(', ') }}</td>
          <td class="is-icon">
            <a href="#" @click.prevent="removeGuest(guest._id)">
              <i class="fa fa-trash"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <hr>

    <h2 class="title is-3">Add guest</h2>

    <form @submit.prevent="create" id="myForm">
      <label class="label" for="name">Name</label>
      <p class="control">
        <input id="name" name="name" class="input" type="text" placeholder="Enter name">
      </p>
      <p class="control">
        <button type="submit" class="button is-primary"
        :class="{ 'is-loading': getGuestSaving }">Submit</button>
      </p>
    </form>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Guests',
  computed: mapGetters([
    'getGuests',
    'getGuestSaving'
  ]),
  methods: {
    create(event) {
      var formElement = event.currentTarget

      this.addGuest(new FormData(formElement))
      formElement.reset()
    },
    ...mapActions(['fetchGuests', 'addGuest', 'removeGuest'])
  },
  mounted() {
    this.fetchGuests()
  }
}
</script>
