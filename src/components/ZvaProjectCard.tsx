import React from 'react';
import { ProjectCard } from './ProjectCard';

export const ZvaProjectCard: React.FC = () => {
    return <ProjectCard 
        imagePath="../images/zva.png"
        title="Zocdoc Value Awards"
        subtitle={<p>I weighed on a uniquely Zocdoc culture event for the Zocdoc tech blog.</p>}
        href={'https://medium.com/zocdoc-engineering/hosting-zocdocs-discount-academy-awards-a6ae2764580f'}
        hrefText="Check out the post on the Zocdoc Medium blog."
    />
};
