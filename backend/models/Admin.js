import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const AdminSchema = new Schema({
  reportComment: { type: Schema.Types.ObjectId },
  reportBoard: { type: Schema.Types.ObjectId },
  request: Array,
});

export default model('Admin', AdminSchema);
