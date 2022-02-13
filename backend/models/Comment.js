import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const CommentSchema = new Schema(
  {
    nickName: String,
    contents: String,
    like: Array,
    report: { type: [Schema.Types.ObjectId], ref: 'User' },
    comments: { type: [Schema.Types.ObjectId], ref: 'Comment' },
    isBlind: Boolean,
  },
  { timestamps: true },
);

export default model('Comment', CommentSchema);
