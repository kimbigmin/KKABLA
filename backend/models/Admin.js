import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const AdminSchema = new Schema({
  reportComment: { type: [Schema.Types.ObjectId], ref: 'Comment' },
  reportBoard: { type: Schema.Types.ObjectId, ref: 'Board' },
  request: Array,
});

export default model('Admin', AdminSchema);
