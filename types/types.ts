// Updated types.ts with additional fields for posts like coverImage, category, tags, and published.

export interface PostData {
  title: string;
  content: string;
  summary:string;
  author: string; 
  cover?: string;  // Optional field for cover image
  categories?: string;  // Optional field for category
  tags?: string[];    // Optional field for tags
  published?: boolean; // Optional field to mark if post is published
}

export interface PostResponse extends PostData {
  _id: string;
}

export interface UpdatePostData {
  id: string;
  title: string;
  summary:string;
  content: string;
  cover?: string;  // Allow cover image update
  categories?: string;    // Allow category update
  tags?: string[];      // Allow tags update
  published?: boolean;  // Allow published status update
}

export interface DeletePostData {
  id: string;
}
export interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  description: string;
}
