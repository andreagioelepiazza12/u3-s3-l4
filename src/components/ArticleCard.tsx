
import React from 'react';
import { Article } from '../types/article';

interface ArticleCardProps {
    article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => (
    <div className="article-card">
        <img src={article.image_url} alt={article.title} />
        <h3>{article.title}</h3>
        <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
        <a href={`/articles/${article.id}`}>Read more</a>
    </div>
);

export default ArticleCard;