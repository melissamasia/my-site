import React from 'react';
import styled from 'styled-components';

export const Projects: React.FC = () => {
    return (
        <>
        <ProjectRow></ProjectRow>
        <ProjectRow></ProjectRow>
        </>
    )
};

const ProjectRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;