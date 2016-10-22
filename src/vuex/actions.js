import Vue from 'vue'

export const fetchCurrentEntity = ({ commit, state }) => {
  Vue.http.get(state.general.currentEntity).then((response) => {
    commit(`UPDATE_${state.general.currentEntity.toUpperCase()}`, response.body)
  })
}

export const createEntity = ({ state, commit, dispatch }, entity) => {
  commit('TOGGLE_SAVING_ON')

  Vue.http.post(state.general.currentEntity, entity).then((response) => {
    dispatch('fetchCurrentEntity')
    commit('TOGGLE_SAVING_OFF')
  })
}

export const removeEntity = ({ state, dispatch }, id) => {
  Vue.http.delete(`${state.general.currentEntity}/${id}`).then(() => {
    dispatch('fetchCurrentEntity')
  })
}

export const updateEntity = ({ state, dispatch }, entity) => {
  Vue.http.put(`${state.general.currentEntity}/${state.general.selectedId}`, entity).then(() => {
    dispatch('fetchCurrentEntity')
  })
}
