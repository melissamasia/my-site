import React from 'react';
import styled from 'styled-components';
import { InternalLink } from './InternalLink';

export const Nav: React.FC = () => {
    return (
        <NavBar>
            <SiteTitle>Melissa Masia</SiteTitle>
            <LinkContainer>
                <InternalLink linkText="Home" pageName="/" />
                <InternalLink linkText="About" pageName="/about" />
                <InternalLink linkText="Work" pageName="/work" />
            </LinkContainer>
        </NavBar>
    );
};

const NavBar = styled.div`
    margin-top: 1.5em;
    display: flex;
    flex-direction: row;
`;

const LinkContainer = styled.div`
    & > a:not(:last-of-type) {
        margin-right: 20px;
    }
`;

const SiteTitle = styled.h1`
    margin: 0px 1em;
`;