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

const ProjectRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    &:not(:last-child){
        margin-bottom:
    }
`;

const Title = styled.h1`
    margin-top: 0px;
    margin-bottom: 16px;
    text-align: center;
`;