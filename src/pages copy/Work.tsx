import React from "react";
import styled from 'styled-components';
import { Image } from '../components/image';
import { Layout } from "../components/Layout";
import SEO from "../components/seo";
import { Icon } from '../components/Icon';

const WorkPage = () => (
  <Layout>
    <SEO title="Work" />
    <Image/>
    <h1>What I've been up to lately</h1>
            <>
                <WorkItem
                    title="Full stack software engineer"
                    location="New York, NY"
                    logo={Zocdoc}
                    timeInPosition="August 2019 - Present"
                    company="Zocdoc"
                />
                <WorkItem
                    title="Full stack software engineer"
                    location="Nashville, TN"
                    logo={Alchemantic}
                    timeInPosition="March 2019 - August 2019"
                    company="Alchematic"
                />
                <WorkItem
                    title="B.S. in Computer Science, minor in Engineering Management"
                    logo={Vanderbilt}
                    location="Nashville, TN"
                    timeInPosition="August 2015 - May 2019"
                    company="Vanderbilt University"
                />
                <WorkItem
                    title="Software Engineering Intern"
                    location="New York, NY"
                    logo={Zocdoc}
                    timeInPosition="May 2018 - August 2018"
                    company="Zocdoc"
                />
            </>

            <h1>Content + Projects</h1>
            <h4>Coming soon.</h4>
  </Layout>
);

type WorkItemProps = {
    title: string;
    logo: string;
    timeInPosition: string;
    location: string;
    company: string;
    icon?: string;
};

export const WorkItem: React.FC<WorkItemProps> = ({
    title,
    timeInPosition,
    location,
    company,
    logo,
}) => {
    const isOnMobile = useIsUsingMobileOrTablet();
    return (
        <WorkItemContainer>
            <Logo src={logo} alt="logo" />
            <WorkItemContent>
                <WorkItemTitle>{title}</WorkItemTitle>
                <ContentRow>
                    <Title>{company}</Title>
                    <WorkItemSmallText>{timeInPosition}</WorkItemSmallText>
                </ContentRow>
                {!isOnMobile && (
                    <ContentRow>
                        <p>{location}</p>
                    </ContentRow>
                )}
            </WorkItemContent>
        </WorkItemContainer>
    );
};

const WorkContainer = styled.div`
    padding-top: 40px;
    height: calc(100vh - 150px);
    vertical-align: middle;
    max-width: 1500px;
    min-height: 650px;
    margin-bottom: 20px;
    overflow-y: auto;
`;

const Title = styled.h3`
    font-weight: normal;
    margin-bottom: 5px;
`;

const WorkItemTitle = styled.h2`
    margin: 0px 5px 0px 0px;
    @media screen and (max-width: 600px) {
        font-size: 20px;
    }
`;

const WorkItemSmallText = styled.p`
    margin: 4px 0px 0px 10px;
    @media screen and (max-width: 600px) {
        margin: 0px;
    }
`;

const WorkItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
`;

const WorkItemContent = styled.div`
    margin-left: 20px;
`;

const ContentRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 4px;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const Logo = styled.img`
    width: 100px;
`;

export default WorkPage;

