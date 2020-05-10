import React from "react"
import { Router } from "@reach/router"
import Profile from "../private-pages/Profile"
import Dashboard from "../private-pages/Dashboard"
import PrivateRoute from "../components/PrivateRoute"

const Portal = () => {
  return (
    <Router basepath="/portal">
      <PrivateRoute path="/" component={Profile} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Router>
  )
}

export default Portal
