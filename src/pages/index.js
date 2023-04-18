import * as React from "react"
import { Helmet } from 'react-helmet';
import Home from "./home/Home"
import icon from '../images/icon.ico'
import { unset } from "lodash"

const pageStyles = {
  backgroundColor:"#9370db",
  margin: unset
}


const IndexPage = () => {
  return (
    <main style={pageStyles}>
       <Helmet>
          <link rel="icon" href={icon} type="image/x-icon" />
          <link rel="shortcut icon" href={icon} type="image/x-icon" />
       </Helmet>

      <Home/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Welcome to Yulany's web site</title>
