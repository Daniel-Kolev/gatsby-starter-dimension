import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import Icon from './Icon/Icon'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <Icon icon='paint-brush' />
    <nav>
      <ul>
      {props.menuLinks.map((menuLink) => (
          <li key={menuLink.name}>
            <Link to={menuLink.link}><button>{menuLink.name}</button></Link>
          </li>
        )
      )}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  timeout: PropTypes.bool,
}

export default Header
