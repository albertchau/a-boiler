// actions
export const TESTING_REQUEST = "TESTING_REQUEST"
export const TESTING_SUCCESS = "TESTING_SUCCESS"
export const TESTING_FAILURE = "TESTING_FAILURE"

export const testingRequest = () => {
  console.log("testingRequest")
  return {
    type: TESTING_REQUEST,
  }
}

export const testingSuccess = (data) => {
  return {
    type: TESTING_SUCCESS,
    data,
  }
}

export const testingFailure = (failure) => {
  return {
    type: TESTING_FAILURE,
    failure,
  }
}
