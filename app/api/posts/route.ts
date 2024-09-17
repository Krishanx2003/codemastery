import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/auth';
import { connectDB } from '@/utils/mongodb';
import Post from '@/models/Post';

// Define Zod schema for post validation
const postSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  summary: z.string().min(1, { message: "Summary is required" }),
  content: z.string().min(1, { message: "Content is required" }),
  cover: z.string().url().optional(),
  categories: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  published: z.boolean(),
});

// POST /api/posts - Create a post
export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const body = await request.json();

    // Validate the request body using Zod schema
    const result = postSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(result.error.errors, { status: 400 });
    }

    const { title, summary, content, cover, categories, tags, published } = result.data;

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

    return NextResponse.json({ message: 'Post created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ message: 'Error creating post' }, { status: 500 });
  }
}

// GET /api/posts - Fetch all posts
export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find({}).sort({ createdAt: -1 }).exec();
    return NextResponse.json(posts.map(post => ({ ...post.toObject(), _id: post._id.toString() })), { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ message: 'Error fetching posts' }, { status: 500 });
  }
}

// PUT /api/posts/:id - Update a post
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const body = await request.json();

    // Validate the request body using Zod schema
    const result = postSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(result.error.errors, { status: 400 });
    }

    const post = await Post.findById(id);
    if (!post || post.userId.toString() !== session.user.id) {
      return NextResponse.json({ message: post ? 'Forbidden' : 'Post not found' }, { status: post ? 403 : 404 });
    }

    const updatedPost = await Post.findByIdAndUpdate(id, result.data, { new: true });
    return updatedPost ? NextResponse.json(updatedPost.toObject(), { status: 200 }) : NextResponse.json({ message: 'Post not found' }, { status: 404 });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json({ message: 'Error updating post' }, { status: 500 });
  }
}

// DELETE /api/posts/:id - Delete a post
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const post = await Post.findById(id);

    if (!post || post.userId.toString() !== session.user.id) {
      return NextResponse.json({ message: post ? 'Forbidden' : 'Post not found' }, { status: post ? 403 : 404 });
    }

    await Post.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Post deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ message: 'Error deleting post' }, { status: 500 });
  }
}
