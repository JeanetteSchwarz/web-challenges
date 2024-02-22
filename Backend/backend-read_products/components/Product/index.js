import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Review from "@/db/models/reviews";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <p>{checkReview()}</p>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}

/* {data.reviews.length > 0 ? (
{data.reviews.map((review) => (
  <li key={review._id.$oid}>
    <h4>{review.title}</h4>
    <p>{review.text}</p>
    <p>Rating: {review.rating}</p>9)} */

{
  /* 
/function checkReview() {
//   if (data.populated("reviews")) {
//     return Review;
//   } else {
//     return "none";
//   }
// 
 */
}