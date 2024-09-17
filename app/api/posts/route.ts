import { NextRequest, NextResponse } from 'next/server';
import { PostData, PostResponse, UpdatePostData, DeletePostData } from '../../../types/types';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/auth';
import { connectDB } from '@/utils/mongodb';
import Post from '@/models/Post';

// POST /api/posts
export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const { title, summary, content, cover, categories, tags, published }: PostData = await request.json();

    // Log received data for debugging
    console.log('Received data:', { title, summary, content, cover, categories, tags, published });

    // Validate required fields
    if (!title || !summary || !content || !session.user.id) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Create the post and associate it with the logged-in user
    const post = new Post({
      title,
      summary,
      content,
      cover,
      categories,
      tags,
      published,
      userId: session.user.id,
    });

    await post.save();

    const response: PostResponse = { ...post.toObject(), _id: post._id.toString() };
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ message: 'Error creating post' }, { status: 500 });
  }
}

// GET /api/posts
export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find({}).sort({ createdAt: -1 }).exec(); // Fetch all posts and sort by creation date

    const response: PostResponse[] = posts.map(post => ({
      ...post.toObject(),
      _id: post._id.toString(),
    }));

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ message: 'Error fetching posts' }, { status: 500 });
  }
}
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const body: UpdatePostData = await request.json();

    // Log received data for debugging
    console.log('Received data for update:', body);

    // Validate required fields
    if (!body.title || !body.summary || !body.content) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Find the post and check ownership
    const post = await Post.findById(id);

    if (!post) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    if (post.userId.toString() !== session.user.id) {
      return NextResponse.json({ message: 'Forbidden: You are not the owner of this post' }, { status: 403 });
    }

    // Update the post
    const updatedPost = await Post.findByIdAndUpdate(id, body, { new: true });

    if (!updatedPost) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    const response: PostResponse = { ...updatedPost.toObject(), _id: updatedPost._id.toString() };
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json({ message: 'Error updating post' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    
    // Find the post and check ownership
    const post = await Post.findById(id);

    if (!post) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    if (post.userId.toString() !== session.user.id) {
      return NextResponse.json({ message: 'Forbidden: You are not the owner of this post' }, { status: 403 });
    }

    // Delete the post
    await Post.findByIdAndDelete(id);

    return NextResponse.json({ message: 'Post deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ message: 'Error deleting post' }, { status: 500 });
  }
}