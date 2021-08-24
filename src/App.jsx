// import { useState, useEffect } from 'react'
// import { connect } from 'react-redux'
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
// import { v4 as uuidv4 } from 'uuid'

const App = () => {
  return (
    <>
      <AppBar />
      <Container>
        {/* <h1>Phonebook</h1> */}
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
