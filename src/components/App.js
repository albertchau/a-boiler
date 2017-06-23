// // import "antd/dist/antd.css"
// import React from "react"
// import { Route, Switch } from "react-router-dom"
// import { injectGlobal, ThemeProvider } from "styled-components"
// import HomePage from "./pages/home-page/HomePage"
// import { LocaleProvider } from "antd"
// import enUS from "antd/lib/locale-provider/en_US"
//
// import theme from "../themes/default"
// import RequestPage from "./RequestPage"
// import { requestPageLoadRequest } from "../store/intake/actions"
//
// injectGlobal`
//   body {
//     margin: 0;
//   }
// `
//
// const App = ({ store }) => {
//   return (
//     <LocaleProvider locale={enUS}>
//       <ThemeProvider theme={theme}>
//         <Switch>
//           <Route path="/" component={HomePage} exact/>
//           <Route path="/overview/new" exact render={props => {
//             store.dispatch(requestPageLoadRequest)
//             // debugger
//             return <RequestPage {...props}/>
//           }}/>
//         </Switch>
//       </ThemeProvider>
//     </LocaleProvider>
//   )
// }
//
// export default App
