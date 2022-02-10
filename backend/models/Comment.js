import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const CommentSchema = new Schema(
  {
    nickName: String,
    contents: String,
    like: { type: [Schema.Types.ObjectId], ref: 'User' },
    report: { type: [Schema.Types.ObjectId], ref: 'User' },
    comments: { type: [Schema.Types.ObjectId], ref: 'Comment' },
  },
  { timestamps: true },
);

export default model('Comment', CommentSchema);
