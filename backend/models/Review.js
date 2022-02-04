import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ReviewSchema = new Schema({
  // bootCamp: Schema.Types.ObjectId,
  bootCamp: String,
  title: String,
  creator: String,
  pros: String,
  cons: String,
  star: Number,
});

export default model('Review', ReviewSchema);
