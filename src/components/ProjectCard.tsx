import React, { useState } from "react"
import styled from 'styled-components';
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import Arrow from '../assets/arrow.svg';

type ProjectCardProps = {
    image: IGatsbyImageData;
    title: string;
    subtitle: React.ReactElement;
    href: string;
    hrefText: string;
    className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = props => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const toggleFocus = () => {
        setIsFocused(currentVal => !currentVal);
    };

    return (
      <Card onClick={toggleFocus}>
              <StyledImage className={props.className} image={props.image} alt={`${props.title}-picture`}/>
              <Banner isFocused={isFocused}>
                  <Row>
                    <Title>{props.title}</Title>
                    <StyledArrow isFocused={isFocused} />
                  </Row>
                  {isFocused && <Subtitle>{props.subtitle}</Subtitle>}
                  {isFocused && <Link href={props.href}>{props.hrefText}</Link>}
              </Banner>
      </Card>
  );
};
const Card = styled.div`
    margin: auto;
    max-height: 300px;
    margin-bottom: 24px;
    box-shadow: 0 14px 26px rgba(0,0,0,0.04);
    border-radius: 10px;
`;

const Banner = styled.div`
    position: relative;
    background-color: rgba(255, 255, 255, 0.9);
    height: ${(props: {isFocused: boolean}) => props.isFocused ? `300px` : `50px`};
    transform: translateY(-100%);
    border-radius: 10px;
    max-width: 300px;
    padding: 12px;
    transition: height 0.3s ease-out;
`;

const StyledImage = styled(GatsbyImage)`
    border-radius: 10px;
    max-height: 300px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Title = styled.p`
    font-weight: bold;
`;

const Subtitle = styled.p`
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 16px;
`;

const Link = styled.a`
    font-size: 24px;
    line-height: 14px;
`;

const StyledArrow = styled(Arrow)`
    transform: ${(props: {isFocused: boolean}) => props.isFocused ? `rotate(180deg) scale(0.5)` : `rotate(0deg) scale(0.5)`};
    transition: transform 0.3s ease-out;
    height: 100%;
`;