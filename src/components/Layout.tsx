import React from "react"
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "./Header"
import { Site } from '../types';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data: Site = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <SiteBody>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </SiteBody>
    </>
  )
}

const SiteBody = styled.div`
  margin: 0 auto,
  maxWidth: 960,
  padding: 0 1.0875rem 1.45rem,
`;