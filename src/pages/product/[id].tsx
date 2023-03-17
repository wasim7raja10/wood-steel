import { useRouter } from "next/router";

export default function Product({ product }: { product: any }) {
	const router = useRouter();
	const { id } = router.query;
	return (
		<>
			<h1>Product</h1>
			<h1>{id}</h1>
		</>
	);
}
