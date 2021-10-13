import React from "react"
import styled from "styled-components"
// import big from "../assets/images/big.jpg"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <>
      <Wrapper>
        <article>
          <h4>constrained</h4>
          <StaticImage
            src="../assets/images/recipe-1.jpeg"
            alt="food"
            placeholder="tracedSVG"
            layout="constrained"
            className="exemple-img"
            as="section"
          />
        </article>
        <article>
          <h4>fixed</h4>
          <StaticImage
            src="../assets/images/recipe-1.jpeg"
            alt="food"
            placeholder="blurred"
            layout="fixed"
            width={200}
            className="exemple-img"
            as="div"
          />
        </article>
        <article>
          <h4>fullWidth</h4>
          <StaticImage
            src="../assets/images/recipe-1.jpeg"
            alt="food"
            placeholder="dominantColor"
            layout="fullWidth"
            className="exemple-img"
            as="article"
          />
        </article>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .exemple-img {
    border-radius: 1rem;
    height: 300px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    .exemple-img {
      height: 200px;
    }
  }
`

export default Images
