import React from 'react';
import styled, { css } from 'styled-components';

export const Squiggle: React.FC<{className?: string}> = props => {
    return (
        <div className={props.className}>
            <CircleOne/>
            <CircleTwo/>
        </div>
    );
};

const CircleCss = css`
    position: absolute;
    width: 100%;
    height: 20px;
    background: radial-gradient(16px, transparent, transparent 4px, black 4px, black 10px, transparent 11px);
    background-size: 30px 40px;
`;

const CircleOne = styled.div`
    ${CircleCss};
`;

const CircleTwo = styled.div`
    ${CircleCss};
    position: relative;
    top: 20px;
    left: 15px;
    background-position: 0px -20px;
`;