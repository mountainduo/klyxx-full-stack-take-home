import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavbarComponent from "./navbar";

const Header = ({ siteTitle }) => (
  <header className="sticky-top">
    <NavbarComponent siteTitle={siteTitle}/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
