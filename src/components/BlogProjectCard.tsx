import React from 'react';
import { ProjectCard } from './ProjectCard';
import { useStaticQuery, graphql } from "gatsby"

export const BlogProjectCard: React.FC = () => {
    const image = useStaticQuery(graphql`{
        placeholderImage: file(relativePath: {eq: "zochopper.png"}) {
          childImageSharp {
            gatsbyImageData(width: 300, layout: CONSTRAINED)
          }
        }
      }
    `)

    return <ProjectCard 
        image={image.placeholderImage.childImageSharp.gatsbyImageData}
        title="GHC 2020 Blog"
        subtitle={<p>I attended Grace Hopper 2020 virtually and wrote about my takeaways</p>}
        href={'https://zocdoc-engineering.medium.com/v-ghc-2020-what-i-learned-while-pretending-to-be-in-orlando-3b9d9a575bbd'}
        hrefText="Check out my post on the Zocdoc Medium blog."
    />
};
