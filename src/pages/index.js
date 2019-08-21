import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Coming soon<br />Are you ready?<br />12<sup>th</sup> December</h1>
        <p>Taarangan is the most awaited intercollegiate festival celebrated annually by TCSC</p>
        <Link to="/page-2/">Watch the video</Link>
        <svg width='100%' height='172' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path fill='white' >
          <animate repeatCount="indefinite" fill="freeze" attributeName='d' dur='10s' 
          values = "M0 95.654C277.431 -69.1705 408 11.654 720 95.654C1032 179.654 1207.5 144.328 1440 95.654V387.654H0V95.654Z; M0 51.8168C277 169.163 433 131.471 720 51.8168C1007 -27.8372 1199 -5.83717 1440 51.8168V343.817H0V51.8168Z; M0 69.3411C342 69.3411 652 -51.313 994 25.687C1336 102.687 1354 103.687 1440 69.3411V361.341H0V69.3411Z; M0 95.654C277.431 -69.1705 408 11.654 720 95.654C1032 179.654 1207.5 144.328 1440 95.654V387.654H0V95.654Z"
          />
          </path>
        </svg>
      </div>
    </div>
  </Layout>
)



export default IndexPage
