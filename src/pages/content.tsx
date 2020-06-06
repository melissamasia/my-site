import React from "react";
import styled from 'styled-components';
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { ConnectLinks } from '../components/ConnectLinks';

const ContentPage = () => (
    <Layout>
      <SEO title="Content" />
      <ContentContainer>
        <h1>Content + Projects</h1>
          <ul>
            <li>A 
              <a href="https://medium.com/zocdoc-engineering/hosting-zocdocs-discount-academy-awards-a6ae2764580f"> discussion </a>
              of a uniquely Zocdoc tradition for Zocdoc's technology blog
            </li>
            <li>
             <a href="https://vimeo.com/user73082396">QuantiPi: Hackathon Amazon Echo Skill</a>
            </li>
          </ul>
          <h4>More coming soon.</h4>
          <ConnectLinks/>
      </ContentContainer>
    </Layout>
  );

const ContentContainer = styled.div`
  @media only screen and (max-width: 375px) {
  }
`;

export default ContentPage;