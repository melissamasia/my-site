import React from "react"
import styled from 'styled-components';
import { ConnectLinks } from './ConnectLinks';
import { Nav } from './Nav';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav/>
      <SiteBody>{children}</SiteBody>
      <ConnectLinks/>
      <StyledFooter>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </StyledFooter>
    </>
  )
}

const SiteBody = styled.main`
  margin: 0 1.5em;
  maxWidth: 960;
  padding: 0 1.0875rem 1.45rem;
`;


const StyledFooter = styled.footer`
  margin-left: 1.5em;
`;