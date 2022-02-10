import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BoardSchema = new Schema(
  {
    shortId: String,
    type: { type: String, required: true },
    title: { type: String, required: true },
    contents: { type: String, required: true },
    creator: { type: String, required: true },
    like: { type: [Schema.Types.ObjectId], ref: 'User' },
    report: { type: [Schema.Types.ObjectId], ref: 'User' },
    comments: { type: [Schema.Types.ObjectId], ref: 'Comment' },
    images: Array,
    thumbnail: String,
  },
  { timestamps: true },
);

export default model('Board', BoardSchema);
