import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import user from './user'

const reducer = combineReducers({
  user: user,
})
const store = configureStore({reducer})
store.subscribe(() => {})

export default store
export * from './user'
