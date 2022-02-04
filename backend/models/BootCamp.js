import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BootCampSchema = new Schema({
  name: String,
  image: String,
  star: Number,
  location: String,
  homepage: String,
  system: String,
});

export default model('BootCamp', BootCampSchema);
