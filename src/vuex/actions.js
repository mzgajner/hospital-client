import Vue from 'vue'

export const fetchGuests = ({ commit }) => {
  Vue.http.get('guests').then((response) => {
    commit('UPDATE_GUESTS', response.body)
  })
}

export const addGuest = ({ commit, dispatch }, guest) => {
  commit('TOGGLE_GUEST_SAVING_ON')

  Vue.http.post('guests', guest).then((response) => {
    dispatch('fetchGuests')
    commit('TOGGLE_GUEST_SAVING_OFF')
  })
}

export const removeGuest = ({ commit, dispatch }, id) => {
  Vue.http.delete(`guests/${id}`).then(() => {
    dispatch('fetchGuests')
  })
}

export const fetchEvents = ({ commit }) => {
  Vue.http.get('events').then((response) => {
    commit('UPDATE_EVENTS', response.body)
  })
}
