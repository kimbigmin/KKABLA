import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  bootCamp: Schema.Types.ObjectId,
  title: String,
  pros: String,
  cons: String,
  star: Number,
});

export default model('User', UserSchema);
