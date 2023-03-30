import React from 'react';
import styled, { keyframes } from 'styled-components';
import HandWave from "../assets/hand-wave.svg";
import { VIEWPORT_BREAKPOINTS } from '../constants';
import { colors } from '../styles/colors';
import { StaticImage } from "gatsby-plugin-image";
import { Page } from '../pages/index';

export const Home: React.FC<{ onChangePage: (newPage: Page) => void; className?: string}> = props => {

    const onClickAboutMe = () => {
        props.onChangePage('ABOUT');
    };

    return (
        <IntroContent className={props.className}>
            <Intro>
            <StaticImage src="../images/me.jpg" alt="headshot" width={285} aspectRatio={0.95}  layout="constrained" imgStyle={{ borderRadius: '80%' }} />
                <TitleContainer>
                    <StyledHandwave/>
                    <Title>Hey! I'm Melissa.</Title>
                </TitleContainer>
                <Subtitle>I'm a full stack software engineer currently based in NYC. Right now, I'm on the Practice tools team at
                    <Link href="https://www.zocdoc.com/" target="_blank" rel="noopener noreferer"> Zocdoc</Link>.
                </Subtitle>
                <Subtitle>
                    <Link onClick={onClickAboutMe}>about me</Link>
                    <Divider>⸱</Divider>
                    <Link href="https://www.linkedin.com/in/melissa-masia/">linkedin</Link>
                    <Divider>⸱</Divider>
                    <Link href="https://github.com/melissamasia">github</Link>
                </Subtitle>
            </Intro>
        </IntroContent>
    );
};

const IntroContent = styled.div`
    margin-top: 32px;
    margin-bottom: 16px;
    text-align: center;

    @media(max-width:${VIEWPORT_BREAKPOINTS.XSMALL}){
        margin-top: 16px;
    }
`;

const Intro = styled.div`
    max-width: 700px;
    margin: auto;
`;

const TitleContainer = styled.div`
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

const Subtitle = styled.h3`
    margin-top: 8px;
    line-height: 28px;
    font-weight: 100;
    color: ${colors.bunker};
`;

const waveAnimation = keyframes`
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;


const StyledHandwave = styled(HandWave)`
    height: 50px;
    width: auto;
    align-self: center;
    margin-right: 8px;
    :hover {
        animation-name: ${waveAnimation};
        -webkit-transform-origin: bottom center;
        transform-origin: bottom center;
        -webkit-animation-name: ${waveAnimation};
        animation-duration: 2s;
    }
`;

const Divider = styled.span`
    margin-right: 8px;
    margin-left: 8px;
`;

const Link = styled.a`
    color: ${colors.easternBlue};
    :hover {
        color: ${colors.frenchRose};
    }
`;