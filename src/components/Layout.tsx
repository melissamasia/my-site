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
    </>
  )
}

const SiteBody = styled.main`
  margin: 0 1.5em;
  max-width: 1000px;
  height: 90vh;
`;
