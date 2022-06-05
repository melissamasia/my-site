import React from 'react';
import styled from 'styled-components';

type DetailLineItemProps = {
    text: string;
}

export const DetailLineItem: React.FC<DetailLineItemProps> = props => {
    return (
        <LineItem>
            {props.children}
            <DetailsText>{props.text}</DetailsText>
        </LineItem>
    );
}

const LineItem = styled.div`
    display: flex;
    flex-direction: row;
`;

const DetailsText = styled.p`
    line-height: 24px;
`;