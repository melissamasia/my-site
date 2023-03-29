import React, { useState } from "react";
import { Home } from '../components/Home';
import styled from "styled-components";
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
      {page === 'HOME' && <Home onChangePage={onChangePage}/>}
      {page === 'ABOUT' && <AboutMe onChangePage={onChangePage}/>}
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

export default IndexPage
