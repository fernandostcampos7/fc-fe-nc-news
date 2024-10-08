function CommentCard({ comment }) {
	return (
		<div className='comment-card'>
			<p>
				<strong>{comment.author}</strong> says:
			</p>
			<p>{comment.body}</p>
			<p>Votes: {comment.votes}</p>
			<p>Posted on: {new Date(comment.created_at).toLocaleDateString()}</p>
		</div>
	);
}

export default CommentCard;
