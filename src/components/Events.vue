<template>
  <entity-list
    :columns="[
      { id: 'name', label: 'Name', type: String },
      { id: 'location', label: 'Location', type: String },
      { id: 'date', label: 'Date', type: Date }
    ]"/>
</template>

<script>
import EntityList from './_EntityList.vue'

export default {
  name: 'Events',
  components: { EntityList },
  beforeCreate() {
    this.$store.commit('UPDATE_CURRENT_ENTITY', 'events')
  }
}
</script>
