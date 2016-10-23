import Vue from 'vue'

export const fetchEntity = ({ commit }, entityType) => {
  Vue.http.get(entityType).then((response) => {
    var entityList = response.body.map((entity) => ({
      ...entity,
      entityType
    }))
    commit(`UPDATE_${entityType.toUpperCase()}`, entityList)
  })
}

export const fetchAll = ({ dispatch, state }) => {
  Promise
    .all(['events', 'guests', 'payers', 'rooms', 'roomTypes', 'transports']
    .map((entity) => dispatch('fetchEntity', entity)))
}

export const fetchCurrentEntity = ({ dispatch, state }) => {
  dispatch('fetchEntity', state.currentEntity)
}

export const createEntity = ({ state, commit, dispatch }, entity) => {
  commit('TOGGLE_SAVING_ON')

  Vue.http.post(state.currentEntity, entity).then((response) => {
    dispatch('fetchCurrentEntity')
    commit('TOGGLE_SAVING_OFF')
  })
}

export const removeEntity = ({ state, dispatch }, id) => {
  Vue.http.delete(`${state.currentEntity}/${id}`).then(() => {
    dispatch('fetchCurrentEntity')
  })
}

export const updateEntity = ({ state, dispatch }, entity) => {
  Vue.http.put(`${state.currentEntity}/${state.selectedId}`, entity).then(() => {
    dispatch('fetchCurrentEntity')
  })
}
