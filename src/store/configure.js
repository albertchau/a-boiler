// https://github.com/diegohaz/arc/wiki/Redux-modules
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { isDev, isBrowser } from 'config'
import thunk from 'redux-thunk';
import reducer from './reducer'

const devtools = isDev && isBrowser && window.devToolsExtension
  ? window.devToolsExtension
  : () => fn => fn

const configureStore = (initialState, history, services = {}) => {
  const enhancers = [
    applyMiddleware(
      thunk.withExtraArgument(services),
      routerMiddleware(history)
    ),
    devtools(),
  ]
  return createStore(reducer, initialState, compose(...enhancers))
}

export default configureStore
