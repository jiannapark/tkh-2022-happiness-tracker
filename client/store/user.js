// import axios from 'axios'

// /**
//  * ACTION TYPES
//  */
// const GET_USER = 'GET_USER'

// /**
//  * INITIAL STATE
//  */
const defaultUser = {}

// /**
//  * ACTION CREATORS
//  */
// const getUser = user => ({type: GET_USER, user})

// /**
//  * THUNK CREATORS
//  */
// export const me = () => async dispatch => {
//   try {
//     const res = await axios.get('/auth/me')
//     dispatch(getUser(res.data || defaultUser))
//   } catch (err) {
//     console.error(err)
//   }
// }

// export const auth = (
//   method,
//   email,
//   password,
//   firstName,
//   lastName
// ) => async dispatch => {
//   let res
//   try {
//     res = await axios.post(`/auth/${method}`, {
//       email,
//       password,
//       firstName,
//       lastName
//     })
//   } catch (authError) {
//     return dispatch(getUser({error: authError}))
//   }

//   try {
//     dispatch(getUser(res.data))
//   } catch (e) {
//     console.error(e)
//   }
// }

// export const logout = () => async dispatch => {
//   try {
//     await axios.post('/auth/logout')
//     dispatch(removeUser())
//     history.push('/')
//   } catch (err) {
//     console.error(err)
//   }
// }

// /**
//  * REDUCER
//  */
export default function(state = defaultUser, action = {}) {
  switch (action.type) {
    // case GET_USER:
    //   return action.user
    // case REMOVE_USER:
    //   return defaultUser
    default:
      return state
  }
}
