import _ from 'lodash'

export const getSaving = state => state.saving
export const getFormVisible = state => state.formVisible
export const getCurrentEntity = state => state.currentEntity
export const getCurrentEntityList = state => state[state.currentEntity]
export const getCurrentEntitySingular = state => state.currentEntity.slice(0, -1)
export const getSelected = state => _.find(state[state.currentEntity], { _id: state.selectedId })

export const getAllEntities = state => ({
  events: state.events,
  guests: state.guests,
  payers: state.payers,
  rooms: state.rooms,
  roomTypes: state.roomTypes,
  transports: state.transports
})
