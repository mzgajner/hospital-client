<template>
  <entity-list
    :columns="[
      { id: 'hotel', label: 'Hotel', type: String },
      { id: 'size', label: 'Size', type: Number },
      { id: 'price', label: 'Price', type: String }
    ]"/>
</template>

<script>
import EntityList from './_EntityList.vue'

export default {
  name: 'RoomTypes',
  components: { EntityList },
  beforeCreate() {
    this.$store.commit('UPDATE_CURRENT_ENTITY', 'roomTypes')
  }
}
</script>
