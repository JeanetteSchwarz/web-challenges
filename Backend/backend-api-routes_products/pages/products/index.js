import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Fetching() {
  const { data, isLoading, error } = useSWR(`/api/products`, fetcher);
  console.log(data);

  if (isLoading) {
    return "is Loading";
  }

  if (error || data === undefined) {
    return "error";
  }
  if (!data) {
    return;
  }

  return (
    <>
      <h1>Some Fish?</h1>

      {data.map((product) => (
        <li key={product.id}>
          <br></br>
          {product.name} <br></br>
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </>
  );
}
