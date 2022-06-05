import React from 'react';
import styled from 'styled-components';

type DetailLineItemProps = {
    text: string;
}

export const DetailLineItem: React.FC<DetailLineItemProps> = props => {
    return (
        <LineItem>
            <DetailsText>{props.text}</DetailsText>
            {props.children}
        </LineItem>
    );
}

const LineItem = styled.div`
    display: flex;
    flex-direction: row;
`;

const DetailsText = styled.p`
`;