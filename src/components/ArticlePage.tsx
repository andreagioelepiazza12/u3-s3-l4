import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Article } from '../interfaces/Article';

const ArticlePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<Article | null>(null);

    useEffect(() => {
        fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
            .then((response) => response.json())
            .then((data) => setArticle(data));
    }, [id]);

    if (!article) return <p>Loading...</p>;

    return (
        <div>
            <h1>{article.title}</h1>
            <img src={article.image_url} alt={article.title} />
            <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
            <p>{article.summary}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read full article
            </a>
        </div>
    );
};

export default ArticlePage;