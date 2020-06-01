import React from "react";
import styled from 'styled-components';
import { Layout } from "../components/Layout";
import SEO from "../components/seo";

const ContentPage = () => (
    <Layout>
      <SEO title="Content" />
      <ContentContainer>
        <h1>Content + Projects</h1>
          <h3>Coming soon.</h3>
      </ContentContainer>
    </Layout>
  );

const ContentContainer = styled.div`
  height: 700px;
  @media only screen and (max-width: 375px) {
    height: 500px;
  }
`;

export default ContentPage;