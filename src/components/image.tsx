import React from "react"
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

export const Image = () => {
  const data = useStaticQuery(graphql`{
  placeholderImage: file(relativePath: {eq: "me.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
}
`)

  return <StyledImage image={data.placeholderImage.childImageSharp.gatsbyImageData} alt="headshpt" />;
};

const StyledImage = styled(GatsbyImage)`
  border-radius: 50%;
  height: 300px;
  width: 300px;
  margin: auto;
`;