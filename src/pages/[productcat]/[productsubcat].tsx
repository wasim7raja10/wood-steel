import { useRouter } from "next/router";

export default function ProductSubCat() {
  const router = useRouter();
  const { productcat, productsubcat } = router.query;
  return (
    <div>
      <h1>Product Category: {productcat}</h1>
      <h2>Product Subcategory: {productsubcat}</h2>
      <div>
        <h3>Product 1</h3>
      </div>
    </div>
  );
}
