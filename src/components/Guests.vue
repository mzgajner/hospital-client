<template>
  <entity-list
    :columns="[
      { id: 'name', label: 'Name', type: String },
      { id: 'email', label: 'Email', type: String },
      { id: 'phone', label: 'Phone', type: String },
      { id: 'country', label: 'Country', type: String },
      { id: 'organisation', label: 'Organisation', type: String },
      { id: 'arrival', label: 'Arrival', reference: 'transports' },
      { id: 'departure', label: 'Departure', reference: 'transports' },
      { id: 'accommodation', label: 'Accommodation', reference: 'rooms' },
      { id: 'events', label: 'Events', type: Array, reference: 'events' }
    ]"/>
</template>

<script>
import EntityList from './_EntityList.vue'

export default {
  name: 'Guests',
  components: { EntityList },
  beforeCreate() {
    this.$store.commit('UPDATE_CURRENT_ENTITY', 'guests')
  }
}
</script>
