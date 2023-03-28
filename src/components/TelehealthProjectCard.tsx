import React from 'react';
import { ProjectCard } from './ProjectCard';

export const TelehealthProjectCard: React.FC = () => {
    return <ProjectCard 
        imagePath="../images/telehealth.png"
        title="Zocdoc Video Service"
        subtitle={<p>At the beginning of the coronavirus pandemic in the US, my team responded by building a telehealth solution within Zocdoc.</p>}
        href={'"https://www.protocol.com/zocdoc-coronavirus-telehealth-pivot'}
        hrefText="Read more on Protocol."
    />
};
