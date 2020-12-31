import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-paint-brush"></span>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/" state={{ fromHeader: true }}><button>Home</button></Link>
        </li>
        <li>
          <Link to="/work"><button>Work</button></Link>
        </li>
        <li>
          <Link to="/about"><button>About</button></Link>
        </li>
        <li>
          <Link to="/contact"><button>Contact</button></Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  timeout: PropTypes.bool,
}

export default Header
