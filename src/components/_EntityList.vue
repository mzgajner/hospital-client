<style lang="sass">
</style>

<template>
  <div>
    <h2 class="title is-3">{{ title }}</h2>

    <custom-table
      :columns="columns"
      :items="getCurrentEntityList"
      :edit="showEditForm"
      :remove="removeEntity"
    />

    <hr>

    <button class="button is-primary is-large" @click.prevent="showAddForm">
      Add {{ getCurrentEntity }}
    </button>

    <form-popup
      :close="toggleFormOff"
      :loading="getSaving"
      :submit="createOrUpdate"
      :title="`${getSelected ? 'Edit' : 'Add'} ${getCurrentEntity}`"
      :visible="getFormVisible"
      :fields="columns"
    />
  </div>
</template>

<script>
import _ from 'lodash'
import { mapActions, mapGetters, mapMutations } from 'vuex'

import FormPopup from './_FormPopup.vue'
import Table from './_Table.vue'

export default {
  name: 'EntityList',
  computed: {
    title() {
      return _.capitalize(this.getCurrentEntity)
    },
    ...mapGetters([
      'getCurrentEntity',
      'getCurrentEntityList',
      'getFormVisible',
      'getSaving',
      'getSelected'
    ])
  },
  components: {
    FormPopup,
    CustomTable: Table
  },
  methods: {
    showEditForm(id) {
      this.updateSelectedId(id)
      this.toggleFormOn()
    },
    showAddForm() {
      this.updateSelectedId(null)
      this.toggleFormOn()
    },
    createOrUpdate(event) {
      var formElement = event.currentTarget,
          method = this.getSelected ? this.updateEntity : this.createEntity,
          formData = new FormData(formElement)

      method(formData)
      this.toggleFormOff()
      formElement.reset()
    },
    ...mapMutations({
      toggleFormOn: 'TOGGLE_FORM_ON',
      toggleFormOff: 'TOGGLE_FORM_OFF',
      updateSelectedId: 'UPDATE_SELECTED_ID'
    }),
    ...mapActions([
      'createEntity',
      'updateEntity',
      'removeEntity'
    ])
  },
  props: {
    columns: {
      type: Array,
      required: true
    }
  }
}
</script>
