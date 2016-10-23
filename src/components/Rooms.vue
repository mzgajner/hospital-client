<template>
  <entity-list
    :columns="[
      { id: 'name', label: 'Name', type: String },
      { id: 'type', label: 'Room Type', type: Object, reference: 'roomTypes' }
    ]"/>
</template>

<script>
import { mapMutations } from 'vuex'

import EntityList from './_EntityList.vue'

export default {
  name: 'Rooms',
  components: { EntityList },
  methods: mapMutations({ updateCurrentEntity: 'UPDATE_CURRENT_ENTITY' }),
  created() {
    this.updateCurrentEntity('rooms')
  }
}
</script>
