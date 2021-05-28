import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      borderColor: 'lightslategray',
      borderStyle: 'solid 5px',
      background: `lightslategray`,
    }}
  >
    <div
      style={{
        // height: '5vw',
        // marginLeft: '42vw',
        // borderRadius: '40px',
        top: '100px',
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingTop: '1vw'

      }}
    >
      <h2 >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Home.
        </Link>
      </h2>
      <h2 >
        <Link
          to="/commercial"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Commercial.
        </Link>
      </h2>
      <h2 >
        <Link
          to="/residential"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Residential.
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
