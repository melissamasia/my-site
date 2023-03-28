import React from "react"
import { StaticImage } from "gatsby-plugin-image";

export const Headshot: React.FC<{className?: string}> = props => {
  return <StaticImage src="../images/me.png" alt="headshot" />;
};

