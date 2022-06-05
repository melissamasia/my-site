import React from "react";
import styled from 'styled-components';

export const AboutDetails: React.FC = () => (
    <Container>
        <TechnologiesContent>
            <h1>Lately, I've been working with</h1>
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

const TechnologiesContent = styled.div`
`;


const InterestsContent = styled.div`
`;