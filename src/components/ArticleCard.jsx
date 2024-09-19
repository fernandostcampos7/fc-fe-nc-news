const ArticleCard = ({ article }) => {
	return (
		<div className='article-card'>
			<h3>{article.title}</h3>
			<img src={article.article_img_url} alt={article.article_name} />
			<p>{article.topic}</p>
			<p>{article.author}</p>
			<p>{article.created_at}</p>
		</div>
	);
};

export default ArticleCard;
