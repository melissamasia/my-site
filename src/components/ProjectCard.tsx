import React from "react"
import styled from 'styled-components';
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

type ProjectCardProps = {
    image: IGatsbyImageData;
    title: string;
    subtitle: React.ReactElement;
    href: string;
    hrefText: string;
    className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = props => {
  return (
      <div>
              <StyledImage className={props.className} image={props.image} alt="card"/>
              <Banner>
                  <Title>{props.title}</Title>
                  <Subtitle>{props.subtitle}</Subtitle>
                  <Link href={props.href}>{props.hrefText}</Link>
              </Banner>
      </div>
  );
};
const Card = styled.div`

`;

const Banner = styled.div`
    position: relative;
    background-color: rgba(255, 255, 255,0.75);
    height: 25%;
    transform: translateY(-100%);
    border-radius: 10px;
    max-width: 300px;
    padding: 8px;
`;

const StyledImage = styled(GatsbyImage)`
    border-radius: 10px;
`;

const Title = styled.p`
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 8px;
`;

const Subtitle = styled.p`
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 4px;
`;

const Link = styled.a`
    font-size: 12px;
    line-height: 14px;
`;