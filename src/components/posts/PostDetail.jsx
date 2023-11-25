import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { url } from "../../constants/api";

function PostDetail() {
	const [post, setPost] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		async function getData(url) {
			try {
				setIsLoading(true);
				setIsError(false);

				const response = await fetch(url);
				const json = await response.json();

				setPost(json);
			} catch (error) {
				console.log(error);
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		}

		getData(`${url}/${id}`);
	}, [id]);

	if (isLoading || !post) {
		return <div>Loading</div>;
	}

	if (isError) {
		return <div>Error</div>;
	}

	return (
		<div>
			<div>
				<div>userId: {post.userId}</div>
				<div>id: {post.id}</div>
				<div>title: {post.title}</div>
				<div>body: {post.body}</div>
			</div>
		</div>
	);
}

export default PostDetail;
