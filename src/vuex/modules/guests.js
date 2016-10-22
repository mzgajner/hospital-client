const state = {
  list: []
}

const mutations = {
  UPDATE_GUESTS (state, newGuests) {
    state.list = newGuests
  }
}

export default {
  state,
  mutations
}
