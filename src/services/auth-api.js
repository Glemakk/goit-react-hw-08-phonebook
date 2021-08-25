import axios from 'axios'
//name: qwertyqwerty
//email: qwertyqwerty@mail.com

//name: ghjghjghj
//email: ghjghjghj@mail.com
//ghjghjghj123
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

// axios за нас уже делает JSON.stringify (НЕ ЗАБЫВАТЬ!!! если не используем axios)
export const signUpUser = async (newUserData) => {
  const { data } = await axios.post(`/users/signup`, newUserData)
  return data
}

export const logInUser = async (userData) => {
  const { data } = await axios.post('/users/login', userData)
  return data
}

export const logOutUser = async () => {
  const { data } = await axios.post('/users/logout')
  return data
}
