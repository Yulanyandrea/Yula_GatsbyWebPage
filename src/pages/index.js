import * as React from "react"
import Home from "./home/Home"


const pageStyles = {
  backgroundColor:"#9370db"
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
