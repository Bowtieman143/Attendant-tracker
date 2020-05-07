import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState()
  const [path, setPath] = useState()

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem("isAuthenticated")))
    if (!isAuthenticated && window.location.pathname !== `/login`) {
      // If we’re not logged in, redirect to the home page.
      navigate(`/portal/login`)
      return null
    }
  }, [])

  return <Component {...rest} />
}

export default PrivateRoute
