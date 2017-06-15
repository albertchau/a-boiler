import { call, fork, put, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

export function* fetchRequestPage(api) {
  try {
    const values = yield call([api, api.get], '/intake-values')
    const form = yield call([api, api.get], '/intake-form')
    // console.log(values, form)
    // debugger
    yield put(actions.requestPageLoadSuccess(values, form))
  } catch (e) {
    yield put(actions.requestPageLoadFailure(e))
  }
}

export function* watchRequestPageLoad(api) {
  yield takeEvery(actions.REQUEST_PAGE_LOAD_REQUEST, fetchRequestPage, api)
}

export default function*({ api }) {
  yield fork(watchRequestPageLoad, api)
}
