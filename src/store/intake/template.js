// // actions
// export const TESTING_REQUEST = "TESTING_REQUEST"
// export const TESTING_SUCCESS = "TESTING_SUCCESS"
// export const TESTING_FAILURE = "TESTING_FAILURE"
//
// export const testingRequest = () => {
//   console.log("testingRequest")
//   return {
//     type: TESTING_REQUEST,
//   }
// }
//
// export const testingSuccess = (data) => {
//   return {
//     type: TESTING_SUCCESS,
//     data,
//   }
// }
//
// export const testingFailure = (failure) => {
//   return {
//     type: TESTING_FAILURE,
//     failure,
//   }
// }
//
// // reducers
// import { TESTING_FAILURE, TESTING_SUCCESS } from './actions'
// import { initialState } from './selectors'
//
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case TESTING_SUCCESS:
//       return {
//         ...state,
//         data: action.data,
//       }
//     case TESTING_FAILURE:
//       return {
//         ...state,
//         failure: action.failure,
//       }
//     default:
//       return state
//   }
// }
//
//
// // selectors
// import { createSelector } from 'reselect'
// export const initialState = {
//   data: {},
// }
//
// export const getTestingData = ({ testing = initialState }) => {
//   return testing.data
// }
//
