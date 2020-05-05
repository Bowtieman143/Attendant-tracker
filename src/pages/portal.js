import React, { Fragment } from "react"
import { Router } from "@reach/router"
import Profile from "../private-pages/Profile"
import Login from "../private-pages/Login"
import PrivateRoute from "../components/PrivateRoute"

const Portal = () => {
  return (
    <Router basepath="/portal">
      <PrivateRoute path="/profile" component={Profile} />
      <Login path="/login" />
    </Router>
  )
}

export default Portal
