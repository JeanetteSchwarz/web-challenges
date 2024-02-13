import Link from "next/link";
import Volumes from "./volumes";

export default function HomePage() {
  return (
    <div>
      <h1>LOTR-App</h1>
      <Link href="/volumes"> Overview </Link>
    </div>
  );
}
