const state = {
  list: []
}

const mutations = {
  UPDATE_EVENTS (state, newEvents) {
    state.list = newEvents
  }
}

export default {
  state,
  mutations
}
