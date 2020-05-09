import axios from "axios"
import { navigate } from "@reach/router"

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : {}

const setUser = user =>
  window.localStorage.setItem("user", JSON.stringify(user))

export const handleLogin = (
  { username, password },
  redirect = "/portal/profile"
) => {
  const data = {
    identifier: username,
    password,
  }

  axios
    .post("https://attendant-tracker-con.herokuapp.com/auth/local", data)
    .then(response => {
      const { jwt, user } = response.data
      navigate(redirect)
      return setUser({
        jwt,
        user,
      })
    })
    .catch(error => {
      alert(error)
      return false
    })
}

export const isLoggedIn = () => {
  const user = getUser()
  //This checks to make sure you have a jwt
  return !!user.jwt
}

export const logout = callback => {
  setUser({})
  callback()
}
