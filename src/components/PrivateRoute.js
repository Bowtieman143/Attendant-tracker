import React from "react"
import { navigate } from "gatsby"

const isAuthenticated = () => {
  if (JSON.parse(window.localStorage.getItem("isAuthenticated"))) {
    return true
  } else {
    return false
  }
}

// import ...
const PrivateRoute = ({ component: Component, ...rest }) => {
  if (!isAuthenticated() && window.location.pathname !== `/login`) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/portal/login`)
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
