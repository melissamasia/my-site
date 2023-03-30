import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

export const Head: React.FC<{title: string}> = props => {
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
              }
            }
          }
        `
      );

    const title = `${props.title} | ${site.siteMetadata.title}`;

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={site.siteMetadata.description}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={site.siteMetadata.description}/>
            <meta property="og:type" content="website"/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:creator" content={site.siteMetadata.author}/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={site.siteMetadata.description}/>
        </>
    );
}