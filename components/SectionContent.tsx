import React from 'react';
import { PortableText } from '@portabletext/react';
import { Section } from '../types/sanity';

interface SectionContentProps {
  section: Section;
}

const SectionContent: React.FC<SectionContentProps> = ({ section }) => {
  return (
    <div>
      <h2>{section.title}</h2>
      <PortableText value={section.content} />
    </div>
  );
};

export default SectionContent;
