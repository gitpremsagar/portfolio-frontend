import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return <section className={className}>{children}</section>;
};

export default Section;
