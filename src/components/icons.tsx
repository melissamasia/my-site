import React from 'react';
import styled, { css } from 'styled-components';
import AwsSvg from "../assets/aws.svg";
import CSharpSvg from "../assets/c-sharp.svg";
import ReactSvg from "../assets/react.svg";
import TypescriptSvg from "../assets/typescript.svg";

type IconProps = {
    height?: number;
}

export const ReactIcon: React.FC<IconProps> = props => (<StyledReactIcon height={props.height} />);
export const AwsIcon: React.FC<IconProps> = props => (<StyledAwsIcon height={props.height} />);
export const TypescriptIcon: React.FC<IconProps> = props => (<StyledTypescriptIcon height={props.height} />);
export const CSharpIcon: React.FC<IconProps> = props => (<StyledCSharptIcon height={props.height} />);

const IconCSS = css`
    height: ${(props: {height?: number}) => props.height ? `${props.height}px`: `100px`};
    width: auto;
`;

const StyledReactIcon = styled(ReactSvg)`
   ${IconCSS};
`;

const StyledAwsIcon = styled(AwsSvg)`
   ${IconCSS};
`;

const StyledTypescriptIcon = styled(TypescriptSvg)`
   ${IconCSS};
`;

const StyledCSharptIcon = styled(CSharpSvg)`
   ${IconCSS};
`;