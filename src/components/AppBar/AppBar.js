import { useSelector } from 'react-redux'
import Navigation from '../Navigation'
import AuthNav from '../AuthNav/AuthNav'
import UserMenu from '../UserMenu'
import { Header } from './AppBar.styled'
import authSelectors from '../../redux/selectors/auth-selectors'

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  )
}
export default AppBar
