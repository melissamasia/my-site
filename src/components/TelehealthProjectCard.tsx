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
        subtitle={<p>At the beginning of the coronavirus pandemic in the US, my team responded by building a telehealth solution within Zocdoc.</p>}
        href={'"https://www.protocol.com/zocdoc-coronavirus-telehealth-pivot'}
        hrefText="Read more on Protocol."
    />
};
