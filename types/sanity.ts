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
  style?: string;  // Make sure this is included and optional
  children?: Array<{
    _key: string;
    _type: string;
    text: string;
  }>;
  code?: string;
  language?: string;
}


export interface CodeBlock extends Block {
  _type: 'codeBlock';
  code: string;
  language: string;
}

export interface CourseContentProps {
  content: Array<Block | CodeBlock>;
  image?: Image;
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
  content: Array<Block | CodeBlock>;
}

export interface Section {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  content: Array<Block | CodeBlock>;
  lessons: Lesson[];
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  content: Array<Block | CodeBlock>;
  image: Image;
  slug: {
    current: string;
  };
  sections: Section[];
}
