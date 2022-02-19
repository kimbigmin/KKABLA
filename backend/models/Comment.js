import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const CommentSchema = new Schema(
  {
    type: String,
    boardType: String,
    boardId: { type: Schema.Types.ObjectId, ref: 'Board' },
    creator: String,
    contents: String,
    like: Array,
    report: Array,
    comments: Array,
    isBlind: Boolean,
  },
  { timestamps: true },
);

export default model('Comment', CommentSchema);
