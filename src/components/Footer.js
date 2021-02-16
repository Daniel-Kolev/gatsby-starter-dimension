import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright"><Link to="/rights">Права и условия.</Link> Създаден от <a href="https://www.linkedin.com/in/daniel-kolev-05257316b/">Даниел Колев</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
