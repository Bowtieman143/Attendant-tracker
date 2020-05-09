import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../../services/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  console.log("thsi is initiated")
  console.log(isLoggedIn())

  if (!isLoggedIn() && location.pathname !== `/login`) {
    navigate("/login")
    return null
  }

  console.log("You are logged in")

  return <Component {...rest} />
}

export default PrivateRoute
