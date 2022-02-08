import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const CommentSchema = new Schema(
  {
    nickName: String,
    contents: String,
    like: Number,
    comment: [Schema.Types.ObjectId],
  },
  { timestamps: true },
);

export default model('Comment', CommentSchema);
