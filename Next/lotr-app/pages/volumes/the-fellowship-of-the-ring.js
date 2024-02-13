import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Fellowship() {
  const fellowship = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <h1>{fellowship.title}</h1>
      <p>{fellowship.description}</p>
      <Image
        src="/public/the-fellowship-of-the-ring.png"
        height={140}
        width={230}
        alt="Fellowship of the Ring - Cover"
      />
      <ul>
        <li>
          {fellowship.books[0].ordinal} {fellowship.books[0].title}
        </li>
        <li>
          {fellowship.books[1].ordinal} {fellowship.books[1].title}
        </li>
      </ul>
      <Link href="/volumes">⬅️ All Volumes</Link>
    </>
  );
}
