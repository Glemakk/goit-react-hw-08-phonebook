import { combineReducers, createReducer } from '@reduxjs/toolkit'
import { changeFilter } from '../actions/contacts-actions'
import {
  fetchContacts,
  addItem,
  deleteItem,
} from '../operations/contacts-operations'

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addItem.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteItem.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
})

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
})

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
})

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
})

export default combineReducers({
  items,
  isLoading,
  error,
  filter,
})
