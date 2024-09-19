const ArticleCard = ({ article }) => {
	return (
		<div className='article-card'>
			<h2>{article.title}</h2>
			<img src={article.article_img_url} alt={article.title} />
			<p>Author: {article.author}</p>
			<p>Published at: {new Date(article.created_at).toLocaleDateString()}</p>
		</div>
	);
};

export default ArticleCard;
