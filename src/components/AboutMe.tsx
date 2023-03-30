import React from 'react';
import styled from 'styled-components';
import { VIEWPORT_BREAKPOINTS } from '../constants';
import { colors } from '../styles/colors';
import { StaticImage } from "gatsby-plugin-image";
import { Page } from '../pages/index';

export const AboutMe: React.FC<{ onChangePage: (newPage: Page) => void; className?: string}> = props => {
    const onClickBackToHome = () => {
        props.onChangePage('HOME');
    };

    return (
        <ContentContainer className={props.className}>
            <Content>
                <Row>
                    <HeadshotContainer>
                        <StaticImage src="../images/me2.jpg" alt="headshot" aspectRatio={0.95}  layout="constrained" imgStyle={{ borderRadius: '80%' }} />
                    </HeadshotContainer>
                    <DetailContainer>
                        <SubHeader>
                            About me
                        </SubHeader>
                        <LargerDetail>I'm a Senior full stack engineer at Zocdoc. I work on tools for doctors and practice office staff. Before Zocdoc, I graduated from Vanderbilt University with a B.S. in Computer science and a minor in engineering management.</LargerDetail>
                    </DetailContainer>
                </Row>
                <Row>
                    <DetailContainer>
                        <SubHeader>
                            Technologies I've been working with lately
                        </SubHeader>
                        <Detail>React + Typescript for UIs</Detail>
                        <Detail>C# / .NET Core for webservers + APIs</Detail>
                        <Detail>Various AWS services for hosting + data</Detail>
                    </DetailContainer>
                    <DetailContainer>
                        <SubHeader>
                            Outside of work, you can find me
                        </SubHeader>
                        <Detail>Exploring NYC (perhaps while sipping bubble tea)</Detail>
                        <Detail>Crafting on my latest art project</Detail>
                        <Detail>Diving into my tech-adjacent interests like DALLE-2 or my
                            <Link href="https://codepen.io/melissamasia" target="_blank" rel="noopener noreferer"> css art course</Link>.
                        </Detail>
                        <Detail>Planning my next trip</Detail>
                    </DetailContainer>
                </Row>
            </Content>
            <Link onClick={onClickBackToHome}>back to home</Link>
        </ContentContainer>
    );
};

const ContentContainer = styled.div`
    margin-top: 32px;
    margin-bottom: 16px;
    text-align: center;

    @media(max-width:${VIEWPORT_BREAKPOINTS.XSMALL}){
        margin-top: 16px;
    }
`;

const HeadshotContainer = styled.div`
    max-width: 300px;
    margin: auto;
`;

const Content = styled.div`
    max-width: 900px;
    margin: auto;
    text-align: left;
`;

const Row = styled.div`
    display: flex;
    margin-bottom: 48px;
    flex-direction: row;
    justify-content: space-around;
    padding-right: 16px;
    padding-left: 16px;

    @media(max-width:${VIEWPORT_BREAKPOINTS.SMALL}){
        flex-direction: column;
        margin-bottom: 24px;
        padding-right: 0px;
        padding-left: 0px;
    }
`;

const SubHeader = styled.div`
    font-weight: bold;
    margin-bottom: 16px;
    margin-top: 16px;
`;

const DetailContainer = styled.div`
    margin: auto;
    margin-top: 0px;
    width: 50%;
    padding-right: 8px;
    padding-left: 8px;

    @media(max-width:${VIEWPORT_BREAKPOINTS.SMALL}){
        margin-bottom: 24px;
        width: 100%;
        padding-right: 16px;
        padding-left: 16px;
    }
`;

const LargerDetail = styled.p`
    font-size: 20px;
    margin-bottom: 16px;
`;


const Detail = styled.p`
    line-height: 16px;
    font-size: 16px;
    margin-bottom: 16px;
`;

const Link = styled.a`
    margin-top: 8px;
    line-height: 28px;
    font-weight: bold;
    color: ${colors.easternBlue};
    :hover {
        color: ${colors.frenchRose};
    }
`;