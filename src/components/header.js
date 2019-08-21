import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      {/* <Link to="/"><img scr={logo} width="30px"></img></Link> */}
      <Link to="/"></Link>
      <Link to="/courses">Events</Link>
      <Link to="/downloads">Gallery</Link>
      <Link to="/pricing">About</Link>
      <Link to="/signIn">Sponsor</Link>
      <Link to="getProAccess"><button>Contact Us</button></Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
