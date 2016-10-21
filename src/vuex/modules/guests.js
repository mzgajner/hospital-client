const state = {
  formVisible: false,
  list: [],
  saving: false,
  selectedId: null
}

const mutations = {
  UPDATE_GUESTS (state, newGuests) {
    state.list = newGuests
  },
  UPDATE_SELECTED_GUEST_ID (state, newGuestId) {
    state.selectedId = newGuestId
  },
  TOGGLE_GUEST_SAVING_ON (state) {
    state.saving = true
  },
  TOGGLE_GUEST_SAVING_OFF (state) {
    state.saving = false
  },
  TOGGLE_GUEST_FORM_ON (state) {
    state.formVisible = true
  },
  TOGGLE_GUEST_FORM_OFF (state) {
    state.formVisible = false
  }
}

export default {
  state,
  mutations
}
