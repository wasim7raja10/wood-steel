import { useRouter } from "next/router";

export default function ProductSubCat() {
	const router = useRouter();
	const { prodcat, prodsubcat } = router.query;
	return (
		<>
			<h1>Product sub cat</h1>
			<h1>
				{prodcat} - {prodsubcat}
			</h1>
		</>
	);
}
