import { Schema, Document, model, models } from 'mongoose';

export interface IPost extends Document {
  title: string;
  content: string;
  summary: string;
  cover?: string;
  userId: Schema.Types.ObjectId;
  categories: string[];
  tags: string[];
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema<IPost>({
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true, trim: true },
  summary: { type: String, required: true, maxlength: 200, trim: true },
  cover: { type: String, trim: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  categories: [{ type: String, trim: true }],
  tags: [{ type: String, trim: true }],
  published: { type: Boolean, default: false },
  publishedAt: { type: Date },
}, { timestamps: true });

postSchema.pre('save', function(next) {
  if (this.isModified('published') && this.published && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  next();
});

const Post = models.Post || model<IPost>('Post', postSchema);

export default Post;
