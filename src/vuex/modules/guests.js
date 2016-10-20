const state = {
  list: [],
  saving: false
}

const mutations = {
  UPDATE_GUESTS (state, newGuests) {
    state.list = newGuests
  },
  TOGGLE_GUEST_SAVING_ON (state) {
    state.saving = true
  },
  TOGGLE_GUEST_SAVING_OFF (state) {
    state.saving = false
  }
}

export default {
  state,
  mutations
}
