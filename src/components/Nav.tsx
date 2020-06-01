import React from 'react';
import styled from 'styled-components';
import { InternalLink } from './InternalLink';

export const Nav: React.FC = () => {
    return (
        <LinkContainer>
            <InternalLink linkText="Home" pageName="/" />
            <InternalLink linkText="About" pageName="/about" />
            <InternalLink linkText="Work" pageName="/work" />
        </LinkContainer>
    );
};

const LinkContainer = styled.div`
    & > a:not(:last-of-type) {
        margin-right: 20px;
    }
`;
