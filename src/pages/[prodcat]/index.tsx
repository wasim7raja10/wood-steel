import { useRouter } from "next/router";

export default function ProductCat() {
	const router = useRouter();
	const { prodcat } = router.query;
	return (
		<>
			<h1>Product cat</h1>
			<h1>{prodcat}</h1>
		</>
	);
}
