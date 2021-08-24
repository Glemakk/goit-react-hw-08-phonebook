import Navigation from '../Navigation'
import AuthNav from '../AuthNav/AuthNav'
import UserMenu from '../UserMenu'
import { Header } from './AppBar.styled'

const AppBar = () => {
  return (
    <Header>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </Header>
  )
}
export default AppBar
