import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Towers() {
  const towers = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <h1>{towers.title}</h1>
      <p>{towers.description}</p>
      <Image
        src="/public/the-two-towers.png"
        height={140}
        width={230}
        alt="The two Towers - Cover"
      />
      <ul>
        <li>
          {towers.books[0].ordinal} {towers.books[0].title}
        </li>
        <li>
          {towers.books[1].ordinal} {towers.books[1].title}
        </li>
      </ul>
      <Link href="/volumes">⬅️ All Volumes</Link>
    </>
  );
}
