<template>
  <entity-list
    :columns="[
      { id: 'name', label: 'Name', type: String },
      { id: 'type', label: 'Room Type', type: Object, reference: 'roomTypes' }
    ]"/>
</template>

<script>
import EntityList from './_EntityList.vue'

export default {
  name: 'Rooms',
  components: { EntityList },
  beforeCreate() {
    this.$store.commit('UPDATE_CURRENT_ENTITY', 'rooms')
  }
}
</script>
