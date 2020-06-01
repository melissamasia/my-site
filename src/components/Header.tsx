import React from "react"
import styled from 'styled-components';
import { Nav } from './Nav';

type HeaderProps = {
  siteTitle: string;
}

export const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <StyledHeader>
    <Nav/>
  </StyledHeader>
)

const StyledHeader = styled.header` 
  marginBottom: 1.45rem,
`;

