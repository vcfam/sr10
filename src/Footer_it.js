import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">Domande? Scrivi a <a href="mailto:sethandraff@gmail.com">sethandraff@gmail.com</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
