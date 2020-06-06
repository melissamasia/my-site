import React from 'react';
import styled from 'styled-components';
import { InternalLink } from './InternalLink';
import { Link } from 'gatsby';

export const Nav: React.FC = () => {
    return (
        <NavBar>
            <SiteTitleLink to="/">MELISSA MASIA</SiteTitleLink>
            <LinkContainer>
                <InternalLink linkText="About" pageName="/about" />
                <InternalLink linkText="More" pageName="/content" />
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

const SiteTitleLink = styled(Link)`
    margin: 0px 1em;
    font-weight: bold;
    color: black;
    font-size: 24px;
    @media only screen and (max-width: 415px) {
        width: 120px;
        margin-right: 10px;
    }
`;