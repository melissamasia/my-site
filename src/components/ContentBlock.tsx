import React from 'react';
import styled from 'styled-components';
import { Squiggle } from "../components/Squiggle";
import { VIEWPORT_BREAKPOINTS } from '../constants';

export const ContentBlock: React.FC = props => {
    return (
        <Container>
            <Squiggle/>
            <ContentContainer>
                {props.children}
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 32px 16px 32px 16px;

    @media(max-width:${VIEWPORT_BREAKPOINTS.XSMALL}){
        padding: 8px;
    }

`;