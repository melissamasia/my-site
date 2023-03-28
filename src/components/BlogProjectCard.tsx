import React from 'react';
import { ProjectCard } from './ProjectCard';

export const BlogProjectCard: React.FC = () => {
    return <ProjectCard 
        imagePath='../images/zochopper.png'
        title="GHC 2020 Blog"
        subtitle={<p>In 2020, I attended the Grace Hopper Conference and shared some takeaways in a Zocdoc tech blog post.</p>}
        href={'https://zocdoc-engineering.medium.com/v-ghc-2020-what-i-learned-while-pretending-to-be-in-orlando-3b9d9a575bbd'}
        hrefText="Check out my post on the Zocdoc Medium blog."
    />
};
