import React from 'react';
import './Articles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const articles = [
  {
    id: 1,
    title: 'Article 1',
    imageUrl: 'https://via.placeholder.com/150',
    summary: 'Summary of Article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Article 2',
    imageUrl: 'https://via.placeholder.com/150',
    summary: 'Summary of Article 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    title: 'Article 3',
    imageUrl: 'https://via.placeholder.com/150',
    summary: 'Summary of Article 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 4,
    title: 'Article 4',
    imageUrl: 'https://via.placeholder.com/150',
    summary: 'Summary of Article 4. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 4,
    title: 'Article 4',
    imageUrl: 'https://via.placeholder.com/150',
    summary: 'Summary of Article 4. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 5,
    title: 'Article 4',
    imageUrl: 'https://via.placeholder.com/150',
    summary: 'Summary of Article 4. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 6,
    title: 'Article 4',
    imageUrl: 'https://via.placeholder.com/150',
    summary: 'Summary of Article 4. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

const ArticlesPage = () => {
  return (
    <div>
      <Header/>
        <h1 className="project-title">Articles</h1>
        <div className="articles-page">
          <div className="articles-container">
            {articles.map((article) => (
              <div key={article.id} className="article-card">
                <img src={article.imageUrl} alt={article.title} />
                <div className="article-info">
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <a href={`#article-${article.id}`} className="read-more">Read more</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      <Footer/>
    </div>
  );
};

export default ArticlesPage;
