import Sights from "@/db/models/sights.js";
import { places } from "../../../../lib/db.js";

export default async function handler(request, response) {
  const { id } = request.query;

  if (!id) {
    return;
  }

  const place = places.find((place) => place.id === id);

  if (!place) {
    return response.status(404).json({ status: "Not found" });
  }

  response.status(200).json(place);

  if (request.method === "PATCH") {
    const updateSight = request.body;
    await Sights.findByIdAndUpdate(id, updateSight);
    response.status(200).json({ status: "Sight updated!" });
  }
}
