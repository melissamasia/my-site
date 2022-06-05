import React from 'react';
import { ProjectCard } from './ProjectCard';
import { useStaticQuery, graphql } from "gatsby"

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
        subtitle={<p>I recently finished <a href="https://www.udemy.com/share/104ibiBUoacFhRRHo=/">this css art course on Udemy.</a></p>}
        href={'https://codepen.io/melissamasia'}
        hrefText="Check out the drawings on my Codepen profile."
    />
};
