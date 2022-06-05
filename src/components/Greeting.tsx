import React from 'react';
import styled, { keyframes }from 'styled-components';
import { Headshot } from './Headshot';
import HandWave from "../assets/hand-wave.svg";
import { VIEWPORT_BREAKPOINTS } from '../constants';

export const Greeting: React.FC = () => {
    return (
        <IntroContent>
            <Intro>
            <StyledImage/>
                <TitleContainer>
                    <StyledHandwave/>
                    <Title>Hey! I'm Melissa.</Title>
                </TitleContainer>
                <Subtitle>I'm a full stack software engineer currently based in NYC. Right now, I'm on the Practice tools team at
                    <a href="https://www.zocdoc.com/" target="_blank" rel="noopener noreferer"> Zocdoc</a>.
                </Subtitle>
                <Subtitle>
                <a href="mailto:melissamasia@gmail.com">email</a>
                <Divider>⸱</Divider>
                <a href="https://www.linkedin.com/in/melissa-masia/">linkedIn</a>
                </Subtitle>
            </Intro>
        </IntroContent>
    );
};

const IntroContent = styled.div`
    text-align: center;
`;

const Intro = styled.div`
    margin: auto;
    max-width: 700px;
`;

const StyledImage = styled(Headshot)`
    */ I have to use important to override built in GatsbyImage styles */
    display: block !important;
    max-width: 200px;
    margin: auto;
`;

const TitleContainer = styled.h1`
    margin-top: 32px;
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
`;

const Title = styled.h1`
    align-self: center;
    margin: 0px;

    @media(max-width:${VIEWPORT_BREAKPOINTS.XSMALL}){
        font-size: 28px;
    }
`;

const Subtitle = styled.h2`
    margin-top: 8px;
    line-height: 28px;
`;

const waveAnimation = keyframes`
to {
    transform: rotate(70deg);
  }
`;

const StyledHandwave = styled(HandWave)`
    height: 50px;
    width: auto;
    align-self: center;
    margin-right: 8px;
    animation-name: ${waveAnimation};
    animation-duration: 0.5s;
    animation-direction: alternate;
    animation-timing-function: linear;
    animation-iteration-count: 4;
`;

const Divider = styled.span`
    margin-right: 8px;
    margin-left: 8px;
`;