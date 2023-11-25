import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PostItem({ post }) {
	const { title, body, id } = post;

	return (
		<div>
			<h2>{title}</h2>
			<p>{body}</p>
			<Link to={`post/${id}`}>View more</Link>
		</div>
	);
}

export default PostItem;

PostItem.propTypes = {
	post: PropTypes.shape({
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
	}).isRequired,
};
