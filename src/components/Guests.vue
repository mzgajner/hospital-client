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
      { id: 'accomodation', label: 'Accomodation', reference: 'rooms' },
      { id: 'events', label: 'Events', reference: 'events' }
    ]"/>
</template>

<script>
import { mapMutations } from 'vuex'

import EntityList from './_EntityList.vue'

export default {
  name: 'Guests',
  components: { EntityList },
  methods: mapMutations({ updateCurrentEntity: 'UPDATE_CURRENT_ENTITY' }),
  created() {
    this.updateCurrentEntity('guests')
  }
}
</script>
