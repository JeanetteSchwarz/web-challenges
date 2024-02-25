import mongoose from "mongoose";

const { Schema } = mongoose;

const sightsSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mapURL: { type: String, required: true },
});

const Sights =
  mongoose.models.Product || mongoose.model("Sights", sightsSchema);

export default Sights;
