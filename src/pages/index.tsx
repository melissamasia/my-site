import React from "react";
import { SEO } from "../components/SEO";
import { Greeting } from '../components/Greeting';
import { AboutDetails } from '../components/AboutDetails';
import { Projects } from '../components/Projects';
import styled from "styled-components";
import { VIEWPORT_BREAKPOINTS } from '../constants';

const IndexPage = () => (
  <Container>
    <SEO title="Home" />
      <Greeting/>
      <AboutDetails/>
      <Projects/>
  </Container>
);

const Container = styled.div`
  padding: 32px 16px 32px 16px;

  @media(max-width:${VIEWPORT_BREAKPOINTS.XSMALL}){
      padding: 16px;
  }
`;

export default IndexPage
