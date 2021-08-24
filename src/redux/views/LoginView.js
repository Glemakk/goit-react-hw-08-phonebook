import { useState } from 'react'
import { useDispatch } from 'react-redux'

const LoginView = () => {
  const dispatch = useDispatch()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  return (
    <form>
      <div>
        <label>
          login <input type="text" name="login" value={login}></input>
        </label>
      </div>
      <div>
        <label>
          password <input type="text" name="password" value={password}></input>
        </label>
      </div>
      <button type="button">Log in</button>
    </form>
  )
}

export default LoginView
