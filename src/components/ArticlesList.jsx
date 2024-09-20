import { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import { Link } from 'react-router-dom';

function ArticlesList() {
	const [articles, setArticles] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const apiURL = 'https://fc-northcoders-news-api.onrender.com/api/articles';

		fetch(apiURL)
			.then((response) => response.json())
			.then((data) => {
				if (data.articles !== undefined) {
					setArticles(data.articles);
				} else {
					setArticles([]);
				}
				setLoading(false);
			})
			.catch((err) => {
				console.error('Error fetching articles:', err);
				setError('Failed to load articles'); // Set an error message
				setLoading(false);
			});
	}, []);
	return (
		<div className='articles-list'>
			{isLoading ? (
				<p> Loading Articles ...</p>
			) : (
				<div className='articles-list'>
					{isLoading ? (
						<p>Loading Articles...</p>
					) : error ? (
						<p>{error}</p> // Display the error message if fetch fails
					) : (
						<div>
							<p>Articles Available</p>
							{articles.length > 0 ? (
								articles.map((article) => (
									<Link to= {`/article-details/${article.article_id}`}>
										<ArticleCard key={article.article_id} article={article} />
									</Link>
								))
							) : (
								<p>No articles available.</p>
							)}
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default ArticlesList;
