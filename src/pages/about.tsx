import React from "react";
import styled from 'styled-components';
import { Image } from '../components/image';
import { Layout } from "../components/Layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Image/>
    <AboutMeBlurb>
      <h2>About Me</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum
      </p>
    </AboutMeBlurb>
  </Layout>
)

const Photo = styled(Image)`
    height: 300px;
    width: 280px;
    border-radius: 50%;
`;

const AboutMeBlurb = styled.div`
    max-width: 500px;
    margin: auto;
    margin-top: 20px;
`;


export default AboutPage;

