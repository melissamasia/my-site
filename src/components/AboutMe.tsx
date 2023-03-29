import React from 'react';
import styled from 'styled-components';
import { VIEWPORT_BREAKPOINTS } from '../constants';
import { colors } from '../styles/colors';
import { StaticImage } from "gatsby-plugin-image";
import { Page } from '../pages/index';

export const AboutMe: React.FC<{ onChangePage: (newPage: Page) => void;}> = props => {
    const onClickBackToHome = () => {
        props.onChangePage('HOME');
    };

    return (
        <ContentContainer>
            <Content>
                <Row>
                    <StaticImage src="../images/me2.jpg" alt="headshot" width={285} aspectRatio={0.95}  layout="constrained" imgStyle={{ borderRadius: '80%' }} />
                    <TextContent>
                        I'm a Senior full stack engineer at Zocdoc. I particularly thrive when leading complex projects. Before Zocdoc, I graduated from Vanderbilt University with a B.S. in Computer science and a minor in engineering management.
                    </TextContent>
                </Row>
                <Row>
                    <DetailContainer>
                        <SubHeader>
                            Technologies I've been working with lately
                        </SubHeader>
                        <Detail>React + Typescript for UIs</Detail>
                        <Detail>C# / .NET Core for webservers + APIs</Detail>
                        <Detail>Various AWS services for hosting + data</Detail>
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
                    <StaticImage src="../images/art.png" alt="headshot" width={285} aspectRatio={0.95}  layout="constrained" imgStyle={{ borderRadius: '80%' }} />
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

const Content = styled.div`
    max-width: 700px;
    margin: auto;
    text-align: left;
`;

const Row = styled.div`
    display: flex;
    margin-bottom: 24px;
    flex-direction: row;
    @media(max-width:${VIEWPORT_BREAKPOINTS.SMALL}){
        flex-direction: column;
    }
`;

const TextContent = styled.div`
    color: ${colors.bunker};
    max-width: 45%;
    margin: auto;
    font-size: 16px;
`;

const SubHeader = styled.div`
    font-weight: bold;
    margin-bottom: 8px;
`;

const DetailContainer = styled.div`
    margin: auto;
    max-width: 52%;
`;

const Detail = styled.p`
    line-height: 14px;
    font-size: 14px;
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