import React from "react"
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <StyledImage fluid={data.placeholderImage.childImageSharp.fluid} />
};

const StyledImage = styled(Img)`
  border-radius: 50%;
  height: 300px;
  width: 300px;
  margin: auto;
`;