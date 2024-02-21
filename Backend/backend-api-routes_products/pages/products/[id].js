import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function SingleFetching() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useSWR(`/api/products/${id}`, fetcher);
  console.log(data);

  if (isLoading) {
    return "is Loading";
  }

  if (error || data === undefined) {
    return "error";
  }

  const { name, description, price, currency, category } = data;

  return (
    <>
      <h1>Fish Details</h1>
      <br></br>
      {name} <br></br>
      {description}
      <br></br>
      {price}
      {currency}
    </>
  );
}
