import React from 'react'
import {Link} from "gatsby";

const NavbarComponent = ({siteTitle}) =>
  <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <a className="navbar-brand">
      <Link
        to="/"
        style={{
          color: `black`,
        }}>
        {siteTitle}
      </Link>
    </a>
    <ul className="navbar-nav mr-auto"/>
    <ul className="navbar-nav mr-right">
      <li className="nav-item">
        <a className="nav-link">
          <Link
            to="/cart"
            style={{
              color: `black`,
            }}>
            Cart
          </Link>
        </a>
      </li>
    </ul>
  </nav>

export default NavbarComponent
