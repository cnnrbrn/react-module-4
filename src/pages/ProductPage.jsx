import { useParams } from "react-router-dom";

function ProductPage() {
	const params = useParams();
	console.log(params);
	return (
		<div>
			Individual product page: {params.id}, name: {params.name}
		</div>
	);
}

export default ProductPage;
