import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ReviewSchema = new Schema(
  {
    bootCamp: { type: Schema.Types.ObjectId, ref: 'BootCamp' },
    title: String,
    creator: String,
    pros: String,
    cons: String,
    star: Number,
    report: { type: [Schema.Types.ObjectId], ref: 'User' },
  },
  { timestamps: true },
);

export default model('Review', ReviewSchema);
