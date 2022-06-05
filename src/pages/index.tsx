import React from "react";
import { SEO } from "../components/SEO";
import { Greeting } from '../components/Greeting';
import { AboutDetails } from '../components/AboutDetails';
import { ContentBlock } from "../components/ContentBlock";
import { Projects } from '../components/Projects';

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
      <Projects/>
    </ContentBlock>
  </>
);

export default IndexPage
