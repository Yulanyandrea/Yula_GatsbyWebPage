import * as React from "react"
import Home from "./home/Home"
import { unset } from "lodash"

const pageStyles = {
  backgroundColor:"#9370db",
  margin: unset
}


const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Home/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Eunoia Sound</title>
