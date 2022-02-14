import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const CommentSchema = new Schema(
  {
    type: String,
    boardId: String,
    creator: String,
    contents: String,
    like: Array,
    report: { type: [Schema.Types.ObjectId], ref: 'User' },
    comments: Array,
    isBlind: Boolean,
  },
  { timestamps: true },
);

export default model('Comment', CommentSchema);
