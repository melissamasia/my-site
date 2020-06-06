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
        © {new Date().getFullYear()}
      </StyledFooter>
    </>
  )
}

const SiteBody = styled.main`
  margin: 0 1.5em;
  max-width: 1000px;
  max-height: 700px;
`;


const StyledFooter = styled.footer`
  margin-left: 1.5em;
  @media only screen and (max-width: 375px) {
    margin-left: 1em;
  }
`;

