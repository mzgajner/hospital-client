<template>
  <entity-list
    :columns="[
      { id: 'type', label: 'Type', type: String, values: ['Plane', 'Train', 'Bus', 'Car'] },
      { id: 'ticketId', label: 'Ticket ID', type: String },
      { id: 'time', label: 'Time', type: Date },
      { id: 'pickup', label: 'Pickup', type: String, values: ['Animateka', 'GoOpti', 'Own/None'] },
      { id: 'payer', label: 'Payer', type: Object, reference: 'payers' }
    ]"/>
</template>

<script>
import { mapMutations } from 'vuex'

import EntityList from './_EntityList.vue'

export default {
  name: 'Transports',
  components: { EntityList },
  methods: mapMutations({ updateCurrentEntity: 'UPDATE_CURRENT_ENTITY' }),
  created() {
    this.updateCurrentEntity('transports')
  }
}
</script>
