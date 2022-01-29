import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  shortId: { type: String },
  hashedName: { type: String, required: true, trim: true },
  hashedEmail: { type: String, required: true, trim: true },
  nickName: { type: String },
  posts: { type: [Schema.Types.ObjectId] },
  auth: { type: [Schema.Types.ObjectId] },
});

export default model('User', UserSchema);
