import React from "react";
import styled, { css } from 'styled-components';
import { DetailLineItem } from './DetailLineItem';
import CSharpIcon from "../assets/c-sharp.svg";
import AWSIcon from "../assets/aws.svg";
import ReactIcon from '../assets/react-icon.svg';

export const AboutDetails: React.FC = () => (
    <Container>
        <TechnologiesContent>
            <h1>Lately, I've been working with</h1>
            <DetailLineItem text="React + Typescript, creating beatiful UIs">
                <StyledReactIcon/>
            </DetailLineItem>
            <DetailLineItem text="C#, for creating webservers + APIs">
                <StyledCSharpIcon/>
            </DetailLineItem>
            <DetailLineItem text="AWS services to host, and for the data layer">
                <StyledAwsIcon/>
            </DetailLineItem>
            <ul></ul>
        </TechnologiesContent>
        <InterestsContent>
            <h1>You can likely find me</h1>
        </InterestsContent>
    </Container>
);

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const IconCss = css`
    height: 25px;
    width: auto;
    margin-right: 4px;
`;

const StyledReactIcon = styled(ReactIcon)`
    ${IconCss};
`;

const StyledCSharpIcon = styled(CSharpIcon)`
    ${IconCss};
`;

const StyledAwsIcon = styled(AWSIcon)`
    ${IconCss};
`;

const TechnologiesContent = styled.div`
`;


const InterestsContent = styled.div`
`;