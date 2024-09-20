import { useState } from 'react';

function ArticleVoting({ initialVotes, articleId }) {
	const [votes, setVotes] = useState(initialVotes);
	const [voteError, setVoteError] = useState(null);

	const handleVote = (change) => {
		setVotes((prevVotes) => prevVotes + change);
		setVoteError(null); 

		// Make the API request to update the votes
		fetch(
			`https://fc-northcoders-news-api.onrender.com/api/articles/${articleId}`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ inc_votes: change }),
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Failed to update votes');
				}
				return response.json();
			})
			.catch((error) => {
				setVoteError('Something went wrong. Please try again.');
				setVotes((prevVotes) => prevVotes - change); // Revert the optimistic update
			});
	};

	return (
		<div className='article-voting'>
			<p>Votes: {votes}</p>

			<button onClick={() => handleVote(1)}>Upvote</button>
			<button onClick={() => handleVote(-1)}>Downvote</button>

			{voteError && <p className='error-message'>{voteError}</p>}
		</div>
	);
}

export default ArticleVoting;
