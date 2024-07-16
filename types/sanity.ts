
export interface Section {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  lessons: Lesson[];
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  content: any; // Adjust this type according to your actual content structure
  image: any; // Adjust this type according to your actual image structure
  slug: {
    current: string;
  };
  sections: Section[];
}

export interface Lesson {
  _id: string;
  title: string;
  description: string;
  image?: any; // or the appropriate type for image
  slug: {
    current: string;
  };
  section?: {
    _ref: string;
  };
  content: any; // or a more specific type if you have one for block content
}
// types/sanity.ts
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
