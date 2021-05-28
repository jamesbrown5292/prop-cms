import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>

    <Seo title="Home" />

    <div
      className="main-img"
      style={{
        border: '5px solid lightslategray',
        position: 'relative'
      }}
    >
      <StaticImage
        src="../images/balcony.png"
        layout={'fullWidth'}
        borderColor='lightslategray'
        borderStyle='solid 5px'
        style={{
          padding: '10px',
          borderColor: 'lightslategray',
          borderStyle: 'solid 5px',
        }}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
      />
      <h1
        style={{
          color: 'black',
          position: "absolute",
          top: "12.5%",
          left: '12.5%',
        }}
      >
        Managing your property site
        <br />
          is now <h1 style={{ color: 'limegreen', display: 'contents' }}>easy</h1>.
      </h1>
    </div>

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>

  </Layout >
)

export default IndexPage
