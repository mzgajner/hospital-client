const state = {
  currentEntity: 'guests',
  formVisible: false,
  saving: false,
  selectedId: null,

  events: [],
  guests: [],
  payers: [],
  rooms: [],
  roomTypes: [],
  transports: []
}

const mutations = {
  UPDATE_CURRENT_ENTITY (state, newEntity) {
    state.currentEntity = newEntity
  },
  TOGGLE_FORM_ON (state) {
    state.formVisible = true
  },
  TOGGLE_FORM_OFF (state) {
    state.formVisible = false
  },
  TOGGLE_SAVING_ON (state) {
    state.saving = true
  },
  TOGGLE_SAVING_OFF (state) {
    state.saving = false
  },
  UPDATE_SELECTED_ID (state, newId) {
    state.selectedId = newId
  },

  UPDATE_EVENTS (state, newEvents) {
    state.events = newEvents
  },
  UPDATE_GUESTS (state, newGuests) {
    state.guests = newGuests
  },
  UPDATE_PAYERS (state, newPayers) {
    state.payers = newPayers
  },
  UPDATE_ROOMS (state, newRooms) {
    state.rooms = newRooms
  },
  UPDATE_ROOMTYPES (state, newRoomTypes) {
    state.roomTypes = newRoomTypes
  },
  UPDATE_TRANSPORTS (state, newRoomTypes) {
    state.transports = newRoomTypes
  }
}

export default {
  state,
  mutations
}
