// https://github.com/diegohaz/arc/wiki/Reducers
// import camelCase from 'lodash/camelCase'
import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import { requestPageReducer as requestPage } from '../components/pages/request-page'

const reducers = {
  router,
  form,
  requestPage,
}

// const req = require.context('.', true, /\.\/.+\/reducer\.js$/)
//
// req.keys().forEach((key) => {
//   const storeName = camelCase(key.replace(/\.\/(.+)\/.+$/, '$1'))
//   reducers[ storeName ] = req(key).default
// })

export default combineReducers(reducers)
