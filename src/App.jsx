import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import * as actions from './redux/actions/explain-actions'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppBar from './components/AppBar'

import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import Filter from './components/Filter'
import ContactsView from './redux/views/ContactsView'
import HomeView from './redux/views/HomeView'
import RegisterView from './redux/views/RegisterView'
import LoginView from './redux/views/LoginView'
import Container from './components/Container'
import authOperations from './redux/operations/auth-operations'
console.log('authOperations >>', authOperations)

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser())
  }, [dispatch])

  return (
    <>
      <AppBar />
      <Container>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/register">
            <RegisterView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/contacts">
            <ContactsView />
          </Route>
          <Redirect to="/" />
          <Route></Route>
        </Switch>

        <ToastContainer position="top-center" autoClose={2000} />
      </Container>
    </>
  )
}

export default App
