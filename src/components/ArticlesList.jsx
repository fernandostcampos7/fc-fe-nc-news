import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";


function ArticlesList() {
	const [articles, setArticles] = useState([])
	const [isLoading, setLoading] = useState(true)

	useEffect(()=>{
		const apiURL = 'https://fc-northcoders-news-api.onrender.com/api/articles'

		fetch(apiURL)
			.then((response) => response.json())
			.then((data) => {
				if (data.articles !== undefined) {
					setArticles(data.articles)
				} else {
					setArticles([])
				}
				setLoading(false)
			})
			.catch((err)=> console.error(err))
			setLoading(false)

	}, [])
	return (
		<div className='articles-list'>
			{isLoading ? (
				<p> Loading Articles ...</p>
			) : (
				<div>
					<p>Articles Available</p>
					{articles.map((article) => (
						<ArticleCard key={article.article_id} article={article} />
					))}
				</div>
			)}
		</div>
	);
}

export default ArticlesList;


