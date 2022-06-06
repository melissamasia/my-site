import React from 'react';
import styled from 'styled-components';
import { ArtProjectCard } from './ArtProjectCard';
import { BlogProjectCard } from './BlogProjectCard';
import { ZvaProjectCard } from './ZvaProjectCard';
import { TelehealthProjectCard } from './TelehealthProjectCard';

export const Projects: React.FC = () => {
    return (
        <>
        <Title>Projects</Title>
        <ProjectRow>
            <ArtProjectCard/>
            <BlogProjectCard/>
            <TelehealthProjectCard/>
            <ZvaProjectCard/>
        </ProjectRow>
        </>
    )
};

const Title = styled.h3`
    margin: auto;
    margin-bottom: 32px;
    width: 100%;
    text-align: center;
`;

const ProjectRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    &:not(:last-child){
        margin-bottom:
    }
`;
