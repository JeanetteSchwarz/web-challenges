import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function SingleFetching() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(`/api/products/${id}`, fetcher);
  console.log(data);

  return (
    <>
      <h1>Fish Details</h1>
      {data.map((product) => (
        <p key={product.id}>
          <br></br>
          {product.name} <br></br>
          {product.description}
          <br></br>
          {product.price}
          {product.currency}
        </p>
      ))}
    </>
  );
}
