import { useRouter } from "next/router";
import { api } from "~/utils/api";

export default function ProductCat() {
  const router = useRouter();
  const { productcat } = router.query;

  const slug = productcat as string;

  const { data } = api.category.getById.useQuery({ slug });
  return (
    <div>
      <h1>Product Category: {productcat}</h1>
      <div>
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
}
