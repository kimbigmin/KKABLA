import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BoardSchema = new Schema({
  type: { type: String, required: true },
  title: { type: String, required: true },
  contents: { type: String, required: true },
  creator: { type: String, required: true },
  images: Array,
  thumbnail: String,
  like: Number,
});

export default model('Board', BoardSchema);
