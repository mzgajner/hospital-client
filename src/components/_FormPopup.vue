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
            <span v-if="field.values || field.reference"
              class="select">
              <select
                :id="field.id"
                :name="field.id">
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
                    :selected="getSelected ? getSelected[field.id] === item._id : false">
                    {{ generateLabelForObject(item) }}
                  </option>
                </template>
              </select>
            </span>
            <input v-else
              :value="getSelected ? formatValueForDisplay(getSelected[field.id]) : ''"
              :id="field.id"
              :name="field.id"
              class="input"
              :type="{[String]: 'text', [Number]: 'number', [Date]: 'datetime-local'}[field.type]"
            >
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
