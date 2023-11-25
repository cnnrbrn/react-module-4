import { url } from "../../constants/api";
import PostItem from "./PostItem";
import useApi from "../../hooks/useApi";

function PostList() {
	const { data: posts, isLoading, isError } = useApi(url);

	if (isLoading) {
		return <div>Loading posts...</div>;
	}

	if (isError) {
		return <div>Error loading posts</div>;
	}

	return (
		<div>
			{posts.map((post) => {
				return <PostItem key={post.id} post={post} />;
			})}
		</div>
	);
}

export default PostList;
