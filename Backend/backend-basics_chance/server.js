import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();
export const server = createServer((request, response) => {
  const age = chance.age();
  const name = chance.name({ nationality: "en" });
  const profession = chance.profession();

  if (request.url === "/") {
    response.end(
      `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
    );
  }
});
