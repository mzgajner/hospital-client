import moment from 'moment'
import _ from 'lodash'
import { mapGetters } from 'vuex'

export default {
  name: 'Formatter',
  computed: {
    ...mapGetters(['getAllEntities'])
  },
  methods: {
    isValidObjectId (string) {
      if (typeof string === 'string') {
        return string.length === 24 && new RegExp('^[0-9a-fA-F]{24}$').test(string)
      }
      return false
    },
    generateLabelForObject (item) {
      if (!item) return
      switch (item.entityType) {
        case 'roomTypes':
          return `${item.hotel} - ${item.size} persons (${item.price})`
        case 'transports':
          return `${item.type} - ${moment(item.time).format('M. D. YYYY')} (${item.ticketId})`
        default:
          return item.name
      }
    },
    formatValue (value, type) {
      if (value === null) {
        return value
      } else if (Array.isArray(value)) {
        return value
          .map((singleValue) => this.formatValue(singleValue, type))
          .join(', ')
      } else if (this.isValidObjectId(value)) {
        return this.generateLabelForObject(_.find(this.getAllEntities[type], { _id: value }))
      }
      return value
    },
    formatValueForForm (value, type) {
      if (moment(value, 'YYYY-MM-DDTHH:mm:ss.SSSZ', true).isValid()) {
        return moment(value).format('YYYY-MM-DDTHH:mm:ss.SSS')
      }
      return this.formatValue(value, type)
    },
    formatValueForTable (value, type) {
      if (moment(value, 'YYYY-MM-DDTHH:mm:ss.SSSZ', true).isValid()) {
        return moment(value).format('DD. MM. YYYY, HH:mm')
      }
      return this.formatValue(value, type)
    }
  }}
