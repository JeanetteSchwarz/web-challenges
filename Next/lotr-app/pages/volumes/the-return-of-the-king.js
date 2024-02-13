import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function King() {
  const king = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <>
      <h1>{king.title}</h1>
      <p>{king.description}</p>
      <Image
        src="/public/the-return-of-the-king.png"
        height={140}
        width={230}
        alt="Return of the King - Cover"
      />
      ;
      <ul>
        <li>
          {king.books[0].ordinal} {king.books[0].title}
        </li>
        <li>
          {king.books[1].ordinal} {king.books[1].title}
        </li>
      </ul>
      <Link href="/volumes">⬅️ All Volumes</Link>
    </>
  );
}
