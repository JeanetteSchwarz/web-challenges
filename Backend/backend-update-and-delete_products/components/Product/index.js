import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import ProductForm from "../ProductForm";
import { useState } from "react";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate();
    }

    async function handleDeleteProduct(event) {
      event.preventDefault();

      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        router.push("/");
      }
      if (!response.ok) {
        response.status(400).json({ error: "error" });
      }
    }

    return (
      <>
        <ProductCard>
          <h2>{data.name}</h2>
          <p>Description: {data.description}</p>
          <p>
            Price: {data.price} {data.currency}
          </p>
          {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
          <button
            type="button"
            $isEditMode={isEditMode}
            onClick={() => {
              setIsEditMode(!isEditMode);
            }}
          >
            Edit
          </button>
          <button type="button" onClick={() => handleDeleteProduct}>
            Delete
          </button>
          <StyledLink href="/">Back to all</StyledLink>
        </ProductCard>
        {isEditMode && (
          <ProductForm onSubmit={handleEditProduct} isEditMode={true} />
        )}
      </>
    );
  }
}
