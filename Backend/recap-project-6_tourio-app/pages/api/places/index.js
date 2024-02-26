import dbConnect from "@/db/connect";
import Sights from "@/db/models/sights";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const sights = await Sights.find();
    response.status(200).json(sights);
  }

  if (request.method === "POST") {
    try {
      const sightsdata = request.body;
      await Sights.create(sightsdata);
      return response.status(201).json({ status: "Place created" });
    } catch (error) {
      console.log(error);
      return response.status(400).json({ status: "Sorry, error occured" });
    }
  }
}
