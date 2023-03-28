import React from "react";
import { Greeting } from '../components/Greeting';
import { AboutDetails } from '../components/AboutDetails';
import { Projects } from '../components/Projects';
import styled from "styled-components";
import { VIEWPORT_BREAKPOINTS } from '../constants';
import { Head as SeoHead } from '../components/Head';

const IndexPage = () => (
  <Container>
      <Greeting/>
      <AboutDetails/>
      <Projects/>
  </Container>
);

export const Head = () => <SeoHead title="Home"/>

const Container = styled.div`
  padding: 32px 16px 32px 16px;

  @media(max-width:${VIEWPORT_BREAKPOINTS.XSMALL}){
      padding: 16px;
  }
`;

export default IndexPage
