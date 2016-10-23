<template>
  <entity-list
    :columns="[
      { id: 'hotel', label: 'Hotel', type: String },
      { id: 'size', label: 'Size', type: Number },
      { id: 'price', label: 'Price', type: String }
    ]"/>
</template>

<script>
import { mapMutations } from 'vuex'

import EntityList from './_EntityList.vue'

export default {
  name: 'RoomTypes',
  components: { EntityList },
  methods: mapMutations({ updateCurrentEntity: 'UPDATE_CURRENT_ENTITY' }),
  created() {
    this.updateCurrentEntity('roomTypes')
  }
}
</script>
