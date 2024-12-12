// src/components/ArticleList.tsx
import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import { Article } from '../types/article';

const ArticleList = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        fetch('https://api.spaceflightnewsapi.net/v4/articles')
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data.results)) {
                    setArticles(data.results);
                } else {
                    console.error('Data.results is not an array', data);
                    setArticles([]); 
                }
            })
            .catch((error) => {
                console.error('Error fetching articles:', error);
                setArticles([]); 
            });
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                {articles.length === 0 ? (
                    <p>No articles available.</p>
                ) : (
                    articles.map((article) => (
                        <div className="col-md-4 mb-4" key={article.id}>
                            <ArticleCard article={article} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ArticleList;