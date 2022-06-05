import React from "react";
import styled from 'styled-components';
import { SEO } from "../components/SEO";

const ContentPage = () => (
    <>
      <SEO title="Content" />
      <ContentContainer>
        <h1>Content + Projects</h1>
          <ul>
            <li>
              <a href="https://zocdoc-engineering.medium.com/v-ghc-2020-what-i-learned-while-pretending-to-be-in-orlando-3b9d9a575bbd"> A blog post I wrote for the Zocdoc Engineering blog</a>
              {' '}about my experience at this year's virtual Grace Hopper conference
            </li>
            <li>
              Telehealth pivot:
             <a href="https://www.protocol.com/zocdoc-coronavirus-telehealth-pivot"> How my team at Zocdoc responded to the coronavirus pandemic</a>
            </li>
            <li>A 
              <a href="https://medium.com/zocdoc-engineering/hosting-zocdocs-discount-academy-awards-a6ae2764580f"> discussion </a>
              of a uniquely Zocdoc tradition for Zocdoc's Engineering blog
            </li>
            <li>
             <a href="https://vimeo.com/user73082396">QuantiPi: Hackathon Amazon Echo Skill</a>
            </li>
          </ul>
          <h4>More coming soon.</h4>
      </ContentContainer>
    </>
  );

const ContentContainer = styled.div`
  @media only screen and (max-width: 415px) {
  }
`;

export default ContentPage;