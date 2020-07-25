import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}>
          {siteTitle}
        </Link>
      </a>
      <ul className="navbar-nav mr-auto"></ul>
      <ul className="navbar-nav mr-right">
        <li className="nav-item">
          <a className="nav-link">
            <Link
              to="/cart"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}>
              Cart
            </Link>
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
