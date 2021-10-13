import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
        simpleData
        complexData {
          name
          age
        }
      }
    }
  }
`

const FetchData = () => {
  // destrucuring data
  const {
    site: {
      info: { title }, // info = siteMetadata
    },
  } = useStaticQuery(getData)
  return (
    <div>
      {/* <h1>Name : {data.site.siteMetadata.person.name}</h1> */}
      <h2>Site title is : {title}</h2>
    </div>
  )
}

export default FetchData
