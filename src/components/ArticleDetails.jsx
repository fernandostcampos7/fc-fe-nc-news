import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import { Link } from 'react-router-dom';

function ArticleDetails() {
	const { article_id } = useParams();
	const [article, setArticle] = useState(null);
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
		</div>
	);
}

export default ArticleDetails;
