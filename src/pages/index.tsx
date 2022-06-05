import React from "react";
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { Greeting } from '../components/Greeting';
import { Squiggle } from "../components/Squiggle";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Squiggle/>
    <Greeting/>
  </>
);

const HomeContainer = styled.div`
  max-width: 1000px;
`;

const Title = styled.h1`
  margin-top: 80px !important;
  font-weight: 400;
  font-size: 48px;
`;

const Subtitle = styled.h3`
  margin-top: 10px;
  font-weight: normal;
  font-size: 30px;
  width: 900px;
  @media only screen and (max-width: 415px) {
    max-width: 300px;
  }
`;

const ZocdocLink = styled.a`
  color: ${colors.oracle}
`;


export default IndexPage
