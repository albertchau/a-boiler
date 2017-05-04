import { call, fork, put, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

export function* fetchTesting(api) {
  try {
    const data = yield call([api, api.get], '/api/')
    yield put(actions.testingSuccess(data))
  } catch (e) {
    yield put(actions.testingFailure(e))
  }
}

export function* watchFetchTesting(api) {
  yield takeEvery(actions.TESTING_REQUEST, fetchTesting, api)
}

export default function*({ api }) {
  yield fork(watchFetchTesting, api)
}
