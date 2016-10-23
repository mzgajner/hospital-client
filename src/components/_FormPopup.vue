<style scoped lang="sass">
select[multiple]
  border: 1px solid #dbdbdb
  border-radius: 3px
  padding: 8px
  font-size: 14px
  display: flex
  option
    color: #363636
    display: flex
  &:hover
    border-color: #b5b5b5
  &:active, &:focus
    border-color: #00d1b2
    outline: none
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
          <label class="label" :for="field.id">{{ field.label }}</label>
          <p class="control">
            <span v-if="field.type !== Array && (field.values || field.reference)"
              class="select">
              <select
                :id="field.id"
                :name="field.id">
                <option value=""></option>
                <template v-if="field.values">
                  <option
                    v-for="value in field.values"
                    :selected="getSelected ? getSelected[field.id] === value : false">
                    {{ value }}
                  </option>
                </template>
                <template v-else>
                  <option
                    v-for="item in getAllEntities[field.reference]"
                    :value="item._id"
                    :selected="getSelected ? (getSelected[field.id] === item._id) : false">
                    {{ generateLabelForObject(item) }}
                  </option>
                </template>
              </select>
            </span>
            <template v-else>
              <select multiple v-if="field.type === Array"
                :id="field.id"
                :name="`${field.id}`"
                :size="getAllEntities[field.reference].length">
                <option
                  v-for="item in getAllEntities[field.reference]"
                  :value="item._id"
                  :selected="getSelected ? getSelected[field.id].indexOf(item._id) > -1 : false">
                  {{ generateLabelForObject(item) }}
                </option>
              </select>
              <input v-else
              :value="getSelected ? formatValueForForm(getSelected[field.id]) : ''"
              :id="field.id"
              :name="field.id"
              class="input"
              :type="{[String]: 'text', [Number]: 'number', [Date]: 'datetime-local'}[field.type]"
              >
            </template>
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
import moment from 'moment'
import { mapGetters } from 'vuex'

import Formatter from './_Formatter'

export default {
  name: 'FormPopup',
  mixins: [Formatter],
  computed: {
    ...mapGetters([
      'getSelected',
      'getAllEntities'
    ])
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
