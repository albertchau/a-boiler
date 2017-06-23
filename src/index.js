// https://github.com/diegohaz/arc/wiki/Example-app
import "babel-polyfill"
import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { IntlProvider } from "react-intl"
import { ConnectedRouter } from "react-router-redux"
import createHistory from "history/createBrowserHistory"
import { basename } from "config"
import configureStore from "store/configure"
import api from "services/api"
import theme from "./themes/default"
import { injectGlobal, ThemeProvider } from "styled-components"
import AppRoutes from "./routes"
import "box-ui/lib/box-ui.css"

const history = createHistory({ basename })
const store = configureStore({}, history, { api: api.create() })

injectGlobal`
  body {
    margin: 0;
  }
`

const renderApp = () => (
  <IntlProvider locale="en">
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AppRoutes store={store}/>
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  </IntlProvider>
)

const root = document.getElementById('app')
render(renderApp(), root)
//
// if (module.hot) {
//   module.hot.accept('components/App', () => {
//     require('components/App')
//     render(renderApp(), root)
//   })
// }
