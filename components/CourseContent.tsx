// src/components/CourseContent.tsx
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { CourseContentProps } from '../types/sanity';
import { urlFor } from '../lib/createClient';

// Define serializers for custom rendering of Sanity block content
const serializers = {
  types: {
    block: (props: any) => {
      const { style = 'normal' } = props.node;

      switch (style) {
        case 'h1':
          return <h1>{props.children}</h1>;
        case 'h2':
          return <h2>{props.children}</h2>;
        case 'h3':
          return <h3>{props.children}</h3>;
        case 'blockquote':
          return <blockquote>{props.children}</blockquote>;
        default:
          return <p>{props.children}</p>;
      }
    },
    image: (props: any) => {
      return <img src={urlFor(props.node.asset).url()} alt={props.node.alt} />;
    }
  },
  list: (props: any) => {
    const { type } = props;
    const bullet = type === 'bullet';
    return bullet ? <ul>{props.children}</ul> : <ol>{props.children}</ol>;
  },
  listItem: (props: any) => <li>{props.children}</li>
};

const CourseContent: React.FC<CourseContentProps> = ({ content, image }) => {
  const imageUrl = image && image.asset?._ref ? urlFor(image).url() : '/placeholder.png';
  const altText = content?.[0]?.children?.[0]?.text || 'Course image';

  return (
    <section className="mb-8">
      <img src={imageUrl} alt={altText} className="mb-4" />
      {content ? (
        <BlockContent blocks={content} serializers={serializers} />
      ) : (
        <p>No content available</p>
      )}
    </section>
  );
}

export default CourseContent;
