import {
  FETCH_DATA
} from '../actions'


export default (state = {}, action) => {
  console.log()
  switch (action.type) {
    case (FETCH_DATA):
      return action.payload.data
    default:
      return state
  }
}