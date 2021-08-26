import Container from '../Container'
import { useSelector } from 'react-redux'
import authSelectors from '../../redux/selectors/auth-selectors'
import { Link, PhoneSpan, BookSpan, Nav, Navlogo } from './Navigation.styled'

// const styles = {
//   link: {
//     color: 'rgb(91 169 236)',
//   },
// }

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  return (
    <Nav>
      <div>
        <Navlogo exact to="/">
          <PhoneSpan>Phone</PhoneSpan>
          <BookSpan>book</BookSpan>
        </Navlogo>
      </div>
      <div>
        <Link activeClassName="activeLink" exact to="/">
          Home
        </Link>
        {isLoggedIn && (
          <Link className="link" activeClassName="activeLink" to="/contacts">
            Contacts
          </Link>
        )}
      </div>
    </Nav>
  )
}
export default Navigation
