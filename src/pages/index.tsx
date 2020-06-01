import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import { Layout } from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <>
      <Title>Hi, I'm Melissa.</Title>
      <Subtitle>
        I'm a full stack software engineer currently based in NYC.
        Right now, I'm on the Provider team @ Zocdoc.
      </Subtitle>
    </>
  </Layout>
)


const Title = styled.h1`
    margin-top: 100px !important;
    font-weight: 400;
    font-size: 48px;
`;

const Subtitle = styled.h3`
    margin-top: 10px;
    font-weight: 400;
    font-size: 32px;
`;


export default IndexPage
