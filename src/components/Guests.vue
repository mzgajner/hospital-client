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
            <a href="#" @click.prevent="showEditForm(guest._id)">
              <i class="fa fa-pencil-square-o"></i>
            </a>
            <a href="#" @click.prevent="removeGuest(guest._id)">
              <i class="fa fa-trash"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <hr>

    <button class="button is-primary is-large" @click.prevent="showAddForm">
      Add guest
    </button>

    <form-popup
      :close="toggleGuestFormOff"
      :loading="getGuestSaving"
      :submit="createOrUpdate"
      :title="getGuestSelected ? 'Edit guest' : 'Add guest'"
      :visible="getGuestFormVisible"
    >
      <label class="label" for="name">Name</label>
      <p class="control">
        <input :value="getGuestSelected ? getGuestSelected.name : ''" id="name" name="name" class="input" type="text" placeholder="Enter name">
      </p>
    </form-popup>

  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

import FormPopup from './_FormPopup.vue'

export default {
  name: 'Guests',
  computed: mapGetters([
    'getGuests',
    'getGuestSaving',
    'getGuestFormVisible',
    'getGuestSelected'
  ]),
  components: {
    FormPopup
  },
  methods: {
    createOrUpdate(event) {
      var formElement = event.currentTarget,
          guestMethod = this.getGuestSelected ? this.updateGuest : this.addGuest

      guestMethod(new FormData(formElement))
      this.toggleGuestFormOff()
      formElement.reset()
    },
    showEditForm(id) {
      this.updateSelectedGuestId(id)
      this.toggleGuestFormOn()
    },
    showAddForm() {
      this.updateSelectedGuestId(null)
      this.toggleGuestFormOn()
    },
    ...mapMutations({
      toggleGuestFormOn: 'TOGGLE_GUEST_FORM_ON',
      toggleGuestFormOff: 'TOGGLE_GUEST_FORM_OFF',
      updateSelectedGuestId: 'UPDATE_SELECTED_GUEST_ID'
    }),
    ...mapActions([
      'addGuest',
      'fetchGuests',
      'updateGuest',
      'removeGuest'
    ])
  },
  mounted() {
    this.fetchGuests()
  }
}
</script>
