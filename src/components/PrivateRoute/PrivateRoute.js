import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import authSelectors from '../../redux/selectors/auth-selectors'

/**
 *  1. Он должен повторять API Route
 *  2. Он должен рендерить Route
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на redirectTo
 */
// PrivateRoute - это обертка для маршрута.
// children это дети, т.е. все, что находиться внутри PrivateRoute, т.е. <ContactsView />
// routeProps - это пропсы для Route (передаем в path='' <PrivateProps path='/contacts'></PrivateProps>)
const PrivateRoute = ({ children, redirectTo = '/', ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  )
}

export default PrivateRoute
