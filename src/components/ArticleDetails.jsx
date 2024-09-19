import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import CommentCard from './CommentCard';

function ArticleDetails() {
	const { article_id } = useParams();
	const [article, setArticle] = useState(null);
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {

		fetch(
			`https://fc-northcoders-news-api.onrender.com/api/articles/${article_id}`
		)
			.then((response) => response.json())
			.then((data) => {
				setArticle(data.article);
				setIsLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setIsLoading(false);
			});

		fetch(
			`https://fc-northcoders-news-api.onrender.com/api/articles/${article_id}/comments`
		)
			.then((response) => response.json())
			.then((data) => {
				setComments(data.comments);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [article_id]);

	if (isLoading) {
		return <p>Loading article...</p>;
	}

	if (!article) {
		return <p>Article not found.</p>;
	}

	return (
		<div className='article-details'>
			<ArticleCard article={article} />
			<h3>Comments</h3>
			<div className='comments-section'>
				{comments.length > 0 ? (
					comments.map((comment) => (
						<CommentCard key={comment.article_id} comment={comment} />
					))
				) : (
					<p>No comments yet.</p>
				)}
			</div>
		</div>
	);
}

export default ArticleDetails;
