import Container from '../Container'
import { Link, HeaderTitle, Nav, Navlogo } from './Navigation.styled'

const styles = {
  link: {
    color: 'rgb(91 169 236)',
  },
}

const Navigation = () => {
  return (
    <Nav>
      <div>
        <Navlogo exact to="/">
          <span style={styles.link}>Phone</span>book
        </Navlogo>
      </div>
      <div>
        <Link activeClassName="activeLink" exact to="/">
          Home
        </Link>
        <Link className="link" activeClassName="activeLink" to="/contacts">
          Contacts
        </Link>
      </div>
    </Nav>
  )
}
export default Navigation
