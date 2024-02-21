import mongoose from "mongoose";
import Review from "./reviews";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;

// const { Schema } = mongoose;

// const jokeSchema = new Schema({
//   joke: { type: String, required: true },
// });

// const Joke = mongoose.models.Joke || mongoose.model("Joke", jokeSchema);

// export default Joke;
