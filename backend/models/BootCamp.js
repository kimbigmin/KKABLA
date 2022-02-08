import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BootCampSchema = new Schema({
  name: String,
  image: String,
  star: Number,
  location: String,
  homepage: String,
  system: String,
  review: { type: [Schema.Types.ObjectId], ref: 'Review' },
});

export default model('BootCamp', BootCampSchema);
