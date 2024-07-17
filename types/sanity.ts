// src/types/sanity.ts
export interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Block {
  _key: string;
  _type: string;
  children: Array<{
    _key: string;
    _type: string;
    text: string;
  }>;
}

export interface CourseContentProps {
  content: Block[];
  image: Image;
}

export interface Lesson {
  _id: string;
  title: string;
  description: string;
  image?: Image;
  slug: {
    current: string;
  };
  section?: {
    _ref: string;
  };
  content: Block[];
}

export interface Section {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  lessons: Lesson[];
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  content: Block[];
  image: { asset: { _ref: string; _type: string } };
  slug: {
    current: string;
  };
  sections: Section[];
}
