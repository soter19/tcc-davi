import axios from 'axios'
import { push } from 'connected-react-router'
import { routes } from '../../containers/Router'

const extractNameFromEmail = (email) => {
  const treatedText = email.match(/([a-zA-Z0-9._-]+@)/gi)

  return treatedText[0].replace("@", "")
}

const baseUrl = "https://desafio-api.devzz.ninja"

export const login = (email, password) => async dispatch => {
  try {
    const payload = {
      email,
      password
    }
  
    const request = await axios.post(
      `${baseUrl}/login`, payload
    )

    const userName = extractNameFromEmail(email)
  
    window.localStorage.setItem("token", request.data.token)
    dispatch(setUserStats(email, userName))
    dispatch(push(routes.dashboard))
  } catch (e) {
    console.log(e)
  }
  
}

export const signup = (name, email, password) => async dispatch => {
  try {
    const payload = {
      name,
      email,
      password
    }

    await axios.post(
      `${baseUrl}/account`, payload
    )


    dispatch(login(email, password))
  } catch (e) {
    console.log(e)
  }
}

export const setUserStats = (email, name) => ({
  type: "SET_USER_STATS",
  payload: {
    email
  }
})