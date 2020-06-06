import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

type ExternalLinkProps = {
    buttonText: string;
    href: string;
    opensNewTab: boolean;
};

export const ExternalLink: React.FC<ExternalLinkProps> = ({
    buttonText,
    href,
    opensNewTab,
}) => {
    return (
        <StyledButton href={href} target={opensNewTab ? '_blank' : '_self'}>
            {buttonText}
        </StyledButton>
    );
};

const StyledButton = styled.a`
    font-size: 24px;
    color: ${colors.oracle};
    letter-spacing: 0;
    :hover {
        border-top: 1px solid ${colors.charm};
        border-bottom: 1px solid ${colors.charm};
        letter-spacing: 2px;
        color: ${colors.pickledBluewood};
    }
`;
