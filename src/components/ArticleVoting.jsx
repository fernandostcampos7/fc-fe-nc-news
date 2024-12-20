import { useState } from 'react';

function ArticleVoting({ initialVotes, articleId }) {
	const [votes, setVotes] = useState(initialVotes);
	const [voteError, setVoteError] = useState(null);

	const handleVote = (change) => {
		setVotes((prevVotes) => prevVotes + change);
		setVoteError(null);

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
<<<<<<< HEAD
				setVotes((prevVotes) => prevVotes - change);
=======
				setVotes((prevVotes) => prevVotes - change); 
>>>>>>> d838a8dd18f7996c070881e903fcaac08a8fc831
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
