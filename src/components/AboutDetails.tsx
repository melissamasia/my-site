import React from "react";
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";

export const AboutDetails: React.FC = () => {
    return(
        <>
            <Title id="about-me-title">About me</Title>
            <Content>
                 <StyledImage src="../images/about.png" alt="about" />
                 <TextContent>
                     <p>
                        I'm a senior full stack engineer at Zocdoc with a love of project leadership. I've been at Zocdoc since graduating
                        from Vanderbilt University with a B.S. in Computer science and a minor in engineering management.
                     </p>
                     <Subtitle>
                         Technologies I've been working with lately
                     </Subtitle>
                     <Detail>React + Typescript, for building beautiful UIs</Detail>
                     <Detail>C# + .NET Core for webservers + APIs</Detail>
                     <Detail>AWS services for hosting + the data layer</Detail>
                     <Subtitle>
                         Outside of work, you can find me
                     </Subtitle>
                     <Detail>Exploring NYC (perhaps also sipping bubble tea)</Detail>
                     <Detail>Practicing yoga</Detail>
                     <Detail>Planning my next trip</Detail>
                 </TextContent>
            </Content>
        </>
    );
};

const Title = styled.h3`
    margin: auto;
    width: 100%;
    text-align: center;
    margin-bottom: 16px;
    padding-top: 24px;
`;

const Content = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 48px;
`;

const StyledImage = styled(StaticImage)`
`;

const TextContent = styled.div`
    max-width: 700px;
`;

const Subtitle = styled.div`
    font-weight: bold;
    margin-bottom: 8px;
`;

const Detail = styled.p`
    line-height: 14px;
    font-size: 14px;
`;