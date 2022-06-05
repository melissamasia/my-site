import React from "react";
import { SEO } from "../components/SEO";
import { Greeting } from '../components/Greeting';
import { AboutDetails } from '../components/AboutDetails';
import { ContentBlock } from "../components/ContentBlock";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <br/>
    <ContentBlock>
      <Greeting/>
    </ContentBlock>
    <ContentBlock>
      <AboutDetails/>
    </ContentBlock>
    <ContentBlock>
    </ContentBlock>
    <ContentBlock>
    </ContentBlock>
  </>
);

export default IndexPage
