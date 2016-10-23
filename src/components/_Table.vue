<style lang="sass">
</style>

<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="column in columns">{{ column.label }}</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items">
        <td v-for="column in columns">{{ formatValueForTable(item[column.id], column.reference) }}</td>
        <td class="is-icon">
          <a href="#" @click.prevent="edit(item._id)">
            <i class="fa fa-pencil-square-o"></i>
          </a>
          <a href="#" @click.prevent="remove(item._id)">
            <i class="fa fa-trash"></i>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'

import Formatter from './_Formatter'

export default {
  name: 'Table',
  mixins: [Formatter],
  props: {
    columns: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    edit: {
      type: Function,
      required: true
    },
    remove: {
      type: Function,
      required: true
    }
  }
}
</script>
