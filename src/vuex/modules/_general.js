const state = {
  currentEntity: 'guests',
  formVisible: false,
  saving: false,
  selectedId: null
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
  }
}

export default {
  state,
  mutations
}
