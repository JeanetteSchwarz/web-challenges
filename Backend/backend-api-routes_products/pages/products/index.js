import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Fetching() {
  const { data } = useSWR(`/api/products`, fetcher);
  console.log(data);

  return (
    <>
      <h1>Some Fish?</h1>

      {data.map((product) => (
        <li key={product.id}>
          <br></br>
          {product.name} <br></br>
          {product.description}
          <br></br>
          {product.price}
          {product.currency}
        </li>
      ))}
    </>
  );
}

//<Link href={`/products/${product.id}`}>{product.name}</Link>
