import dbConnect from "@/db/connect";
import Product from "@/db/models/product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    response.status(200).json(products);
  }
}

// export default async function handler(request, response) {
//   // goal is to connect to the db
//   await dbConnect();

//   // check if the request method is GET

//   if (request.method === "GET") {
//     // make a request to the db to get the jokes
//     const jokes = await Joke.find();

//     console.log("jokes: ", jokes);

//     // send the jokes back
//     response.status(200).json(jokes);
//   }
// }
