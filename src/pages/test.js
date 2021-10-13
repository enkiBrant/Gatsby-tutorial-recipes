import React from "react"
import Gallery from "../exemples/Gallery"
import styled from "styled-components"

const Test = () => {
  return (
    <main>
      <Title>
        <h1>Gallery</h1>
      </Title>
      <Gallery />
    </main>
  )
}

const Title = styled.header`
  text-align: center;
`

export default Test
