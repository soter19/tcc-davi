import React from "react"
import { ConnectedRouter } from "connected-react-router"
import { Switch, Route } from "react-router-dom"
import Login from "../Login"
import Signup from "../Signup"
import Dashboard from "../Dashboard"
import Actions from '../Actions'

export const routes = {
  root: '/', // login
  signup: '/signup',
  dashboard: '/dashboard',
  actions: '/actions' 
}

export default function Router(props){
  return(
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.signup} component={Signup}/>
        <Route exact path={routes.root} component={Login}/>
        <Route exact path={routes.dashboard} component={Dashboard}/>
        <Route exact path={routes.actions} component={Actions}/>
      </Switch>
    </ConnectedRouter>
  )
}