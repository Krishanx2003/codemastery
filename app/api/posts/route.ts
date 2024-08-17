import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import Post from '../../../models/Post';

// GET all posts or a specific post by slug
export async function GET(request: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (slug) {
      const post = await Post.findOne({ slug });
      if (!post) {
        return NextResponse.json({ success: false, message: 'Post not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, data: post });
    }

    const posts = await Post.find({});
    return NextResponse.json({ success: true, data: posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch posts' }, { status: 500 });
  }
}

// POST a new blog post
export async function POST(request: Request) {
  try {
    await dbConnect();

    const { title, description, content, image, category } = await request.json();
    const slug = title.toLowerCase().replace(/ /g, '-');

    const post = await Post.create({
      title,
      description,
      content,
      image,
      slug,
      category,
      publishDate: new Date(),
    });

    return NextResponse.json({ success: true, data: post }, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ success: false, message: 'Failed to create post' }, { status: 500 });
  }
}

// PUT (update) an existing blog post by ID
export async function PUT(request: Request) {
  try {
    await dbConnect();

    const { id, title, description, content, image, category, publishDate } = await request.json();
    const slug = title.toLowerCase().replace(/ /g, '-');

    const post = await Post.findByIdAndUpdate(
      id,
      { title, description, content, image, slug, category, publishDate },
      { new: true }
    );

    if (!post) {
      return NextResponse.json({ success: false, message: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: post });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json({ success: false, message: 'Failed to update post' }, { status: 500 });
  }
}

// DELETE a blog post by ID
export async function DELETE(request: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      return NextResponse.json({ success: false, message: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: post });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ success: false, message: 'Failed to delete post' }, { status: 500 });
  }
}
