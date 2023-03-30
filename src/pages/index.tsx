import React, { useState } from "react";
import { Home } from '../components/Home';
import styled, { keyframes } from "styled-components";
import { VIEWPORT_BREAKPOINTS } from '../constants';
import { Head as SeoHead } from '../components/Head';
import { StaticImage } from "gatsby-plugin-image";
import { AboutMe } from "../components/AboutMe";

export type Page = 'HOME' | 'ABOUT';

const IndexPage = () => {
  const [page, setPage] = useState<Page>('HOME');

  const onChangePage = (newPage: Page) => {
    setPage(newPage);
  };

  return (
    <Container>
      <StaticImage src="../images/icon.png" alt="logo" width={50} />
      {page === 'HOME' && <AnimatedHome onChangePage={onChangePage}/>}
      {page === 'ABOUT' && <AnimatedAboutMe onChangePage={onChangePage}/>}
    </Container>
  )
}

export const Head = () => <SeoHead title="Home"/>

const Container = styled.div`
  padding: 16px 16px 32px 16px;

  @media(max-width:${VIEWPORT_BREAKPOINTS.XSMALL}){
      padding: 16px;
  }
`;

const aboutAnimation = keyframes`
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

const AnimatedAboutMe = styled(AboutMe)`
  animation-name: ${aboutAnimation};
  animation-duration: 0.5s;
`;

const homeAnimation = keyframes`
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

const AnimatedHome = styled(Home)`
  animation-name: ${homeAnimation};
  animation-duration: 0.5s;
`;


export default IndexPage
