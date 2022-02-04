import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BoardSchema = new Schema({
  type: String,
  title: String,
  contents: Array,
  creator: String,
  images: String,
  thumbnail: String,
});

export default model('Board', BoardSchema);
