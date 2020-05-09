import React from "react"
import { Router } from "@reach/router"
import Profile from "../private-pages/Profile"
import PrivateRoute from "../components/PrivateRoute"

const Portal = () => {
  return (
    <Router basepath="/portal">
      <PrivateRoute path="/" component={Profile} />
      <PrivateRoute path="/profile" component={Profile} />
    </Router>
  )
}

export default Portal
