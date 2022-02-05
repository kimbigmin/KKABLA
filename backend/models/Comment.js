import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    nickName: String,
    contents: String,
    like: Number,
    comment: [Schema.Types.ObjectId],
  },
  { timestamps: true },
);

export default model('User', UserSchema);
