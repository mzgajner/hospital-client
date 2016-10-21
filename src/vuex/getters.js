import _ from 'lodash'

export const getGuests = state => state.guests.list
export const getGuestSaving = state => state.guests.saving
export const getGuestFormVisible = state => state.guests.formVisible
export const getGuestSelected = state => _.find(state.guests.list, { _id: state.guests.selectedId })

export const getEvents = state => state.events.list
