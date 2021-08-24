import React from 'react'
// import { NavLink } from 'react-router-dom'
import { Link } from '../Navigation/Navigation.styled'

const AuthNav = () => {
  return (
    <div>
      <Link
        to="/register"
        activeClassName="activeLink"
        exact
        // style={styles.link}
        // activeStyle={styles.activeLink}
      >
        Registration
      </Link>
      <Link
        className="link"
        activeClassName="activeLink"
        to="/login"
        exact
        // style={styles.link}
        // activeStyle={styles.activeLink}
      >
        Log In
      </Link>
    </div>
  )
}

export default AuthNav
