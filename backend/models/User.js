import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  // shortId: { type: String, required: true },
  hashedName: { type: String, required: true, trim: true },
  hashedEmail: { type: String, required: true, trim: true },
  posts: [Schema.Types.ObjectId],
  nickName: String,
  auth: String,
});

export default model('User', UserSchema);
