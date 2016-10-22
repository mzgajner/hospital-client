<template>
  <entity-list
    :columns="[
      'name',
      'events'
    ]"/>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

import EntityList from './_EntityList.vue'

export default {
  name: 'Guests',
  components: { EntityList },
  methods: {
    ...mapMutations({ updateCurrentEntity: 'UPDATE_CURRENT_ENTITY' }),
    ...mapActions(['fetchCurrentEntity'])
  },
  mounted() {
    this.updateCurrentEntity('guests')
    this.fetchCurrentEntity()
  }
}
</script>
