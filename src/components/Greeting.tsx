import React from 'react';
import styled from 'styled-components';
import { Image } from '../components/image';
import { VIEWPORT_BREAKPOINTS } from '../constants';

export const Greeting: React.FC = () => {
    return (
        <Container>
            <Intro>
                <h1>Hey! I'm Melissa.</h1>
                <Subtitle>I'm a full stack software engineer currently based in NYC. Right now, I'm on the Practice tools team at
                    <a href="https://www.zocdoc.com/" target="_blank" rel="noopener noreferer"> Zocdoc</a>.
                </Subtitle>
            </Intro>
            <StyledImage/>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    padding: 32px 16px 32px 16px;
    @media(min-width: ${VIEWPORT_BREAKPOINTS.XSMALL}){
        padding: 48px 16px 48px 16px;
    }
`;

const Subtitle = styled.h2`
    margin-top: 8px;
    line-height: 28px;
`;

const Intro = styled.div`
    max-width: 500px;
    margin-right: 8px;
`;

const StyledImage = styled(Image)`
    max-width: 200px;
`;