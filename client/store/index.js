import {createStore, combineReducers} from 'redux'
import user from './user'

const reducer = combineReducers({
  user: user,
})
const store = createStore(reducer)

export default store
export * from './user'
