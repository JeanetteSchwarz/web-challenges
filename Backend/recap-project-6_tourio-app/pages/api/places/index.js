import dbConnect from "@/db/connect";
import Sights from "@/db/models/sights";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const sights = await Sights.find();
    response.status(200).json(sights);
  }

  return;
}
