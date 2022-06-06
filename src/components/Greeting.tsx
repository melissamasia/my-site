import React from 'react';
import styled, { keyframes }from 'styled-components';
import { Headshot } from './Headshot';
import HandWave from "../assets/hand-wave.svg";
import { VIEWPORT_BREAKPOINTS } from '../constants';
import Arrow from '../assets/arrow.svg';
import { colors } from '../styles/colors';

export const Greeting: React.FC = () => {

    const onClickArrow =  () => {
        var aboutMeTitle = document.getElementById("about-me-title");
        if (aboutMeTitle){
            aboutMeTitle.scrollIntoView({
                behavior: "smooth"
            });
        }
    }

    return (
        <IntroContent>
            <Intro>
            <StyledImage/>
                <TitleContainer>
                    <StyledHandwave/>
                    <Title>Hey! I'm Melissa.</Title>
                </TitleContainer>
                <Subtitle>I'm a full stack software engineer currently based in NYC. Right now, I'm on the Practice tools team at
                    <Link href="https://www.zocdoc.com/" target="_blank" rel="noopener noreferer"> Zocdoc</Link>.
                </Subtitle>
                <Subtitle>
                <Link href="mailto:melissamasia@gmail.com">email</Link>
                <Divider>⸱</Divider>
                <Link href="https://www.linkedin.com/in/melissa-masia/">linkedIn</Link>
                </Subtitle>
            </Intro>
            <StyledArrow onClick={onClickArrow}/>
        </IntroContent>
    );
};

const IntroContent = styled.div`
    margin-top: 32px;
    text-align: center;
    height: 100vh;
    margin-bottom: 16px;
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
    color: ${colors.bunker};
    align-self: center;
    margin: 0px;

    @media(max-width:${VIEWPORT_BREAKPOINTS.XSMALL}){
        font-size: 28px;
    }
`;

const Subtitle = styled.h2`
    margin-top: 8px;
    line-height: 28px;
    color: ${colors.bunker};
`;


const StyledHandwave = styled(HandWave)`
    height: 50px;
    width: auto;
    align-self: center;
    margin-right: 8px;
`;

const Divider = styled.span`
    margin-right: 8px;
    margin-left: 8px;
`;

const bounceAnimation = keyframes`
  0% {
    transform: scale(1) rotate(180deg);
  }
  50% {
    transform: scale(1.25) rotate(180deg);
  }
  100% { 
    transform: scale(1.5) rotate(180deg);
  }
`;


const StyledArrow = styled(Arrow)`
    margin-top: 128px;
    transform: rotate(180deg);
    animation-duration: 1.5s;
    animation-name: ${bounceAnimation};
    animation-direction: alternate;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    color: ${colors.mediumRedViolet};
`;

const Link = styled.a`
    color: ${colors.blueRibbon};
    :hover {
        color: ${colors.mediumRedViolet};
    }
`;