import React from "react"
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

export const Headshot: React.FC<{className?: string}> = props => {
  const data = useStaticQuery(graphql`{
    placeholderImage: file(relativePath: {eq: "me.png"}) {
      childImageSharp {
        gatsbyImageData(width: 300, layout: CONSTRAINED)
      }
    }
  }
`)

  return <StyledImage className={props.className} image={data.placeholderImage.childImageSharp.gatsbyImageData} alt="headshot" />;
};

const StyledImage = styled(GatsbyImage)`
  border-radius: 50%;
`;