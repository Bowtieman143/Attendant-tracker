import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../../services/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  console.log("thsi is initiated")
  console.log(isLoggedIn())

  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    navigate("/portal/login")
    return null
  }

  console.log("You are logged in")

  return <Component {...rest} />
}

export default PrivateRoute
