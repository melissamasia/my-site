import React from 'react';
import styled from 'styled-components';
import { ProjectCard } from './ProjectCard';
import { useStaticQuery, graphql } from "gatsby"
import { colors } from '../styles/colors';

export const ArtProjectCard: React.FC = () => {
    const image = useStaticQuery(graphql`{
        placeholderImage: file(relativePath: {eq: "art.png"}) {
          childImageSharp {
            gatsbyImageData(width: 300, layout: CONSTRAINED)
          }
        }
      }
    `)

    return <ProjectCard 
        image={image.placeholderImage.childImageSharp.gatsbyImageData}
        title="CSS Art on Codepen"
        subtitle={<p>I recently finished <Link href="https://www.udemy.com/share/104ibiBUoacFhRRHo=/">this introductory css art course on Udemy.</Link></p>}
        href={'https://codepen.io/melissamasia'}
        hrefText="Check out the drawings on my Codepen profile."
    />
};

const Link = styled.a`
  color: ${colors.blueRibbon};
`;