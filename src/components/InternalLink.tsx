import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { Link } from 'gatsby';

type InternalLinkProps = {
    linkText: string;
    pageName: string;
};

export const InternalLink: React.FC<InternalLinkProps> = ({
    linkText,
    pageName
}) => {
    return (
        <StyledGatsbyLink to={pageName}>
            {linkText}
        </StyledGatsbyLink>
    );
};

const StyledGatsbyLink = styled(Link)`
    font-size: 24px;
    text-transform: uppercase;
    color: ${colors.pickledBluewood};
    text-decoration: none;
    letter-spacing: 0;
    :hover {
        border-top: 1px solid ${colors.charm};
        border-bottom: 1px solid ${colors.charm};
        letter-spacing: 2px;
        color: ${colors.pickledBluewood};
    }
`;