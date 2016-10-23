<template>
  <entity-list
    :columns="[
      { id: 'name', label: 'Name', type: String }
    ]"/>
</template>

<script>
import EntityList from './_EntityList.vue'

export default {
  name: 'Payers',
  components: { EntityList },
  beforeCreate() {
    this.$store.commit('UPDATE_CURRENT_ENTITY', 'payers')
  }
}
</script>
