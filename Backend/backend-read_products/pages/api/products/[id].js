import dbConnect from "@/db/connect";
import Product from "@/db/models/product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return response.status(404).json({ status: "Not found" });
    }
    response.status(200).json(product);
  }
}

// if (request.method === "GET") {
//   // const joke = jokes.find((joke) => joke.id === id);

//   const joke = await Joke.findById(id);

//   if (!joke) {
//     return response.status(404).json({ status: "Not Found" });
//   }

//   response.status(200).json(joke);
