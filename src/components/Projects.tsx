import React from 'react';
import styled from 'styled-components';
import { ZvaProjectCard } from './ZvaProjectCard';

export const Projects: React.FC = () => {
    return (
        <>
        <ProjectRow>
            <ZvaProjectCard/>
        </ProjectRow>
        </>
    )
};

const ProjectRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;