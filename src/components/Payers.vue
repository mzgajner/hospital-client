<template>
  <entity-list
    :columns="[
      { id: 'name', label: 'Name', type: String }
    ]"/>
</template>

<script>
import { mapMutations } from 'vuex'

import EntityList from './_EntityList.vue'

export default {
  name: 'Payers',
  components: { EntityList },
  methods: mapMutations({ updateCurrentEntity: 'UPDATE_CURRENT_ENTITY' }),
  created() {
    this.updateCurrentEntity('payers')
  }
}
</script>
