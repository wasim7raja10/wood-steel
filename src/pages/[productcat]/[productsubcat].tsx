export default function ProductSubCat({
	productcat,
	productsubcat,
}: {
	productcat: string;
	productsubcat: string;
}) {
	return (
		<div>
			<h1>Product Category: {productcat}</h1>
			<h2>Product Subcategory: {productsubcat}</h2>
		</div>
	);
}
