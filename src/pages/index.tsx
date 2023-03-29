import React from "react";
import { Home } from '../components/Home';
import styled from "styled-components";
import { VIEWPORT_BREAKPOINTS } from '../constants';
import { Head as SeoHead } from '../components/Head';
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => (
  <Container>
      <StaticImage src="../images/icon.png" alt="logo" width={50} />
      <Home/>
  </Container>
);

export const Head = () => <SeoHead title="Home"/>

const Container = styled.div`
  padding: 16px 16px 32px 16px;

  @media(max-width:${VIEWPORT_BREAKPOINTS.XSMALL}){
      padding: 16px;
  }
`;

export default IndexPage
