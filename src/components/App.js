import "antd/dist/antd.css"
import React from "react"
import { Route, Switch } from "react-router-dom"
import { injectGlobal, ThemeProvider } from "styled-components"
import HomePage from "./HomePage"

import theme from "./themes/default"
import RequestPage from "./RequestPage"

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/overview/new" component={RequestPage} exact/>
      </Switch>
    </ThemeProvider>
  )
}

export default App
