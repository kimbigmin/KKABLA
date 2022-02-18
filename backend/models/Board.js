import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BoardSchema = new Schema(
  {
    shortId: String,
    type: { type: String, required: true },
    title: { type: String, required: true },
    contents: { type: String, required: true },
    creator: { type: String, required: true },
    like: Array,
    report: Array,
    comments: { type: [Schema.Types.ObjectId], ref: 'Comment' },
    images: Array,
    thumbnail: String,
    isBlind: Boolean,
  },
  { timestamps: true },
);

export default model('Board', BoardSchema);
