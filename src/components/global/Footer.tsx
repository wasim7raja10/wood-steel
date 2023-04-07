import Link from "next/link";
import { api } from "~/utils/api";

export default function Footer() {
  const { data, isFetching } = api.category.getSubCategories.useQuery();

  if (isFetching) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <footer className="bottom-2 border py-10">
        <div className="flex h-full items-center justify-around">
          {data?.map((category) => (
            <div key={category.id}>
              <h3 className="pb-2 text-xl">{category.name}</h3>
              <ul>
                {category.subcategories.map((subCategory) => (
                  <li key={subCategory.id}>
                    <Link href={`/${category.slug}/${subCategory.slug}`}>
                      {subCategory.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
}
