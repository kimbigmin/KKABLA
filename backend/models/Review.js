import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ReviewSchema = new Schema(
  {
    bootCamp: { type: Schema.Types.ObjectId, ref: 'BootCamp' },
    // bootCamp: String,
    title: String,
    creator: String,
    pros: String,
    cons: String,
    star: Number,
    // comment: { type: [Schema.Types.ObjectId], ref: 'Comment' },
  },
  { timestamps: true },
);

export default model('Review', ReviewSchema);
