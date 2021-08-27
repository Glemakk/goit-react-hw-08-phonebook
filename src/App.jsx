import { useEffect, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import * as actions from './redux/actions/explain-actions'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppBar from './components/AppBar'

// import ContactForm from './components/ContactForm'
// import ContactList from './components/ContactList'
// import Filter from './components/Filter'

// import ContactsView from './redux/views/ContactsView'
// import HomeView from './redux/views/HomeView'
// import RegisterView from './redux/views/RegisterView'
// import LoginView from './redux/views/LoginView'

import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import PublicRoute from './components/PublicRoute/PublicRoute'
import Container from './components/Container'
import Loader from './components/Loader'
import authOperations from './redux/operations/auth-operations'
import authSelectors from './redux/selectors/auth-selectors'
console.log('authOperations >>', authOperations)
console.log('PrivateRoute >>', PrivateRoute)

const HomeView = lazy(
  async () =>
    await import('./redux/views/HomeView' /*webpackChunkName: "home-view"*/),
)

const RegisterView = lazy(
  async () =>
    await import(
      './redux/views/RegisterView' /*webpackChunkName: "register-view"*/
    ),
)

const LoginView = lazy(
  async () =>
    await import('./redux/views/LoginView' /*webpackChunkName: "login-view"*/),
)

const ContactsView = lazy(
  async () =>
    await import(
      './redux/views/ContactsView/ContactsView' /*webpackChunkName: "contacts-view"*/
    ),
)

const App = () => {
  const dispatch = useDispatch()
  const getFetchedCurrentUser = useSelector(authSelectors.getFetchedCurrentUser)

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser())
  }, [dispatch])

  return (
    <>
      {!getFetchedCurrentUser && (
        <>
          {' '}
          <AppBar />
          <Container>
            <Suspense fallback={<Loader />}>
              <Switch>
                <PublicRoute exact path="/">
                  <HomeView />
                </PublicRoute>
                <PublicRoute exact path="/register" restricted>
                  <RegisterView />
                </PublicRoute>
                <PublicRoute
                  exact
                  path="/login"
                  restricted
                  redirectTo="/contacts"
                >
                  <LoginView />
                </PublicRoute>
                <PrivateRoute path="/contacts" redirectTo="/login">
                  <ContactsView />
                </PrivateRoute>
                <Redirect to="/" />
                <Route></Route>
              </Switch>
            </Suspense>

            <ToastContainer position="top-center" autoClose={2000} />
          </Container>
        </>
      )}
    </>
  )
}

export default App
