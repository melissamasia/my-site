import React from 'react';
import styled from 'styled-components';
import { Headshot } from './Headshot';
import HandWave from "../assets/hand-wave.svg";

export const Greeting: React.FC = () => {
    return (
        <IntroContent>
            <Intro>
                <TitleContainer>
                    <StyledHandwave/>
                    <Title>Hey! I'm Melissa.</Title>
                </TitleContainer>
                <Subtitle>I'm a full stack software engineer currently based in NYC. Right now, I'm on the Practice tools team at
                    <a href="https://www.zocdoc.com/" target="_blank" rel="noopener noreferer"> Zocdoc</a>.
                </Subtitle>
            </Intro>
            <StyledImage/>
        </IntroContent>
    );
};

const IntroContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`;

const TitleContainer = styled.h1`
    margin-top: 32px;
    margin-bottom: 0px;
    display: flex;
    flex-direction: row;
`;

const Title = styled.h1`
    margin: auto;
    margin-left: 16px;
`;

const Subtitle = styled.h2`
    margin-top: 8px;
    line-height: 28px;
`;

const Intro = styled.div`
    max-width: 500px;
    margin-right: 8px;
`;

const StyledImage = styled(Headshot)`
    max-width: 200px;
`;

const StyledHandwave = styled(HandWave)`
    height: 50px;
    width: auto;
`;