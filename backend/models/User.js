import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    hashedName: { type: String, required: true, trim: true },
    hashedEmail: { type: String, required: true, trim: true },
    posts: [Schema.Types.ObjectId],
    nickName: String,
    auth: Array,
    isAdmin: { type: Boolean },
  },
  { timestamps: true },
);

export default model('User', UserSchema);
