import React from 'react';
import styled from 'styled-components';
import { ExternalLink } from './ExternalLink';

type ConnectLink = {
    name: string;
    href: string;
};

export const ConnectLinks: React.FC = () => {
    const connectLinks: ConnectLink[] = [
        {
            name: 'Email',
            href: 'mailto:melissamasia@gmail.com',
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/melissa-masia/',
        },
        {
            name: 'Github',
            href: 'https://github.com/melissamasia',
        },
    ];

    return (
        <LinkContainer>
            {connectLinks.map((link: ConnectLink) => (
                <ExternalLink
                    key={link.name}
                    buttonText={link.name}
                    href={link.href}
                    opensNewTab={true}
                />
            ))}
        </LinkContainer>
    );
};

const LinkContainer = styled.div`
    position: fixed;
    padding: 25px 0px;
    bottom: 0px;
    background-color: white;
    & > a:not(:last-of-type) {
        margin-right: 20px;
    }
`;
