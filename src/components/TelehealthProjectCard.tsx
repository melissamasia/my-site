import React from 'react';
import { ProjectCard } from './ProjectCard';
import { useStaticQuery, graphql } from "gatsby"

export const TelehealthProjectCard: React.FC = () => {
    const image = useStaticQuery(graphql`{
        placeholderImage: file(relativePath: {eq: "telehealth.png"}) {
          childImageSharp {
            gatsbyImageData(width: 300, layout: CONSTRAINED)
          }
        }
      }
    `)

    return <ProjectCard 
        image={image.placeholderImage.childImageSharp.gatsbyImageData}
        title="Zocdoc Video Service"
        subtitle={<p>How my team at Zocdoc responded to the coronavirus pandemic</p>}
        href={'"https://www.protocol.com/zocdoc-coronavirus-telehealth-pivot'}
        hrefText="Read more on Protocol."
    />
};
