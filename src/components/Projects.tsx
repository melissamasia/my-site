import React from 'react';
import styled from 'styled-components';
import { ArtProjectCard } from './ArtProjectCard';
import { BlogProjectCard } from './BlogProjectCard';
import { ZvaProjectCard } from './ZvaProjectCard';
import { TelehealthProjectCard } from './TelehealthProjectCard';

export const Projects: React.FC = () => {
    return (
        <>
        <ProjectRow>
            <ArtProjectCard/>
            <BlogProjectCard/>
            <TelehealthProjectCard/>
            <ZvaProjectCard/>
        </ProjectRow>
        </>
    )
};

const ProjectRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    &:not(:last-child){
        margin-bottom:
    }
`;
