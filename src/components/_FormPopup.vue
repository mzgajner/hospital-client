<style lang="sass">
</style>

<template>
  <div class="modal" :class="{ 'is-active': visible }">
    <div class="modal-background"></div>
    <form @submit.prevent="submit" class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button @click.prevent="close" class="delete"></button>
      </header>
      <section class="modal-card-body">
        <template v-for="field in fields">
          <label class="label" :for="field">{{ capitalize(field) }}</label>
          <p class="control">
            <input :value="getSelected ? getSelected[field] : ''" :id="field" :name="field" class="input" type="text">
          </p>
        </template>
      </section>
      <footer class="modal-card-foot">
        <button
          class="button is-primary"
          :class="{ 'is-loading': loading }"
          type="submit"
        >Save changes</button>
      </footer>
    </form>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'

export default {
  name: 'FormPopup',
  computed: mapGetters(['getSelected']),
  methods: {
    capitalize: _.capitalize
  },
  props: {
    submit: Function,
    close: Function,
    loading: Boolean,
    title: String,
    visible: Boolean,
    fields: Array
  }
}
</script>
