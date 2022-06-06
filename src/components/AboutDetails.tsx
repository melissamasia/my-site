import React, { useState } from "react";
import styled, { css } from 'styled-components';
import { DetailLineItem } from './DetailLineItem';
import CSharpIcon from "../assets/c-sharp.svg";
import AWSIcon from "../assets/aws.svg";
import ReactIcon from '../assets/react-icon.svg';
import BobaIcon from "../assets/boba.svg";
import YogaIcon from "../assets/yoga.svg";
import TravelIcon from '../assets/travel.svg';
import CityIcon from "../assets/city.svg";
import { VIEWPORT_BREAKPOINTS } from "../constants";

type Section = "tech" | "find-me";

export const AboutDetails: React.FC = () => {
    const [openSection, setOpenSection] = useState<Section>('tech');

    return(
        <Container>
            {openSection == 'tech' && <TechView/>}
            {openSection == 'find-me' && <FindMeView/>}
        </Container>
    );
};

const TechView =  () => (
    <Subsection>
        <Title>Lately, I've been working with</Title>
        <DetailLineItem text="React + Typescript, creating beatiful UIs">
            <StyledReactIcon/>
        </DetailLineItem>
        <DetailLineItem text="C#, for creating webservers + APIs">
            <StyledCSharpIcon/>
        </DetailLineItem>
        <DetailLineItem text="AWS services for hosting + the data layer">
            <StyledAwsIcon/>
        </DetailLineItem>
    </Subsection>   
);

const FindMeView =  () => (
    <Subsection>
        <Title>You can likely find me</Title>
        <DetailLineItem text="Exploring NYC (I'm always down to try a new restaurant!)">
            <StyledCityIcon/>
        </DetailLineItem>
        <DetailLineItem text="Planning my next trip">
            <StyledTravelIcon/>
        </DetailLineItem>
        <DetailLineItem text="Practicing yoga">
            <StyledYogaIcon/>
        </DetailLineItem>
        <DetailLineItem text="Sipping bubble tea">
            <StyledBobaIcon/>
        </DetailLineItem>
    </Subsection>
);

const Title = styled.h1`
    margin-top: 24px;

    @media(max-width:${VIEWPORT_BREAKPOINTS.SMALL}){
        font-size: 24px;
    }
`;

const Subsection = styled.div`
    margin: auto;
    margin-top: 0px;
    overflow: wrap;
    border: 12px;
    border-radius: 12px;
    background: grey;
    height: 100%;
    padding: 32px;

    @media(max-width:${VIEWPORT_BREAKPOINTS.SMALL}){
        max-width: 360px;
        width: 360px;
    }

    @media(max-width:${VIEWPORT_BREAKPOINTS.XSMALL}){
        max-width: 300px;
        width: 300px;
        margin: auto;
    }
`;

const Container = styled.div`
    height: 500px;
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

const StyledBobaIcon = styled(BobaIcon)`
    ${IconCss};
`;

const StyledCityIcon = styled(CityIcon)`
    ${IconCss};
`;

const StyledTravelIcon = styled(TravelIcon)`
    ${IconCss};
`;

const StyledYogaIcon = styled(YogaIcon)`
    ${IconCss};
`;
