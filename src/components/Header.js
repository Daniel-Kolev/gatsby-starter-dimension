import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import Icon from './Icon/Icon'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <Icon icon='paint-brush' />
    <nav>
      <ul>
        <li>
          <Link to="/"><button>За мен</button></Link>
        </li>
        <li>
          <Link to="/work"><button>Картини</button></Link>
        </li>
        <li>
          <Link to="/contact"><button>Контакти</button></Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  timeout: PropTypes.bool,
}

export default Header
