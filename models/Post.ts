import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true }, // Storing image as a URL or file path
  category: { type: String, required: true }, // Category added
  slug: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now }, // Added date field
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
