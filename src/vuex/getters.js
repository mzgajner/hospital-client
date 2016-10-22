import _ from 'lodash'

export const getSaving = state => state.general.saving
export const getFormVisible = state => state.general.formVisible
export const getCurrentEntity = state => state.general.currentEntity
export const getCurrentEntityList = state => state[state.general.currentEntity].list
export const getCurrentEntitySingular = state => state.general.currentEntity.slice(0, -1)
export const getSelected = state => _.find(state[state.general.currentEntity].list, { _id: state.general.selectedId })

export const getGuests = state => state.guests.list
export const getEvents = state => state.events.list
