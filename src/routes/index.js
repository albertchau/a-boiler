import React from "react"
import { Route, Switch } from "react-router-dom"
// import HomePage from "../components/pages/home-page/HomePage"
import { getRequestPage } from "../components/pages/request-page/async"

const routes = ({ store }) => {
  return (
    <Switch>
      <Route path="/overview/new" exact render={props => getRequestPage(props, store)}/>
    </Switch>
  )
}

export default routes
