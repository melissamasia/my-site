import React from 'react';
import styled from 'styled-components';
import { Squiggle } from "../components/Squiggle";
import { VIEWPORT_BREAKPOINTS } from '../constants';

export const ContentBlock: React.FC = props => {
    return (
        <div>
            <Squiggle/>
            <ContentContainer>
                {props.children}
            </ContentContainer>
        </div>
    )
}

const ContentContainer = styled.div`
    padding: 32px 16px 32px 16px;

    @media(max-width:${VIEWPORT_BREAKPOINTS.XSMALL}){
        padding: 16px;
    }
`;