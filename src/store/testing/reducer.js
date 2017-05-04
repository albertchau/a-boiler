import { TESTING_FAILURE, TESTING_SUCCESS } from './actions'
// reducer
import { initialState } from './selectors'

export default (state = initialState, action) => {
  switch (action.type) {
    case TESTING_SUCCESS:
      return {
        ...state,
        data: action.data,
      }
    case TESTING_FAILURE:
      return {
        ...state,
        failure: action.failure,
      }
    default:
      return state
  }
}
