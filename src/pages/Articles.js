import React from 'react';
import './Articles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const articles = [
  {
    id: 1,
    title: 'Introduction to React Hooks',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/1*odW0CyTVxMVt5s3yhjjOhw.png',
    summary: 'Learn React\'s latest feature for state and lifecycle management in functional components.',
  },
  {
    id: 2,
    title: 'Getting Started with Node.js',
    imageUrl: 'https://cdn-media-1.freecodecamp.org/images/1*DF0g7bNW5e2z9XS9N2lAiw.jpeg',
    summary: 'Explore Node.js fundamentals and its role in building scalable server-side applications.',
  },
  {
    id: 3,
    title: 'CSS Grid Layouts Demystified',
    imageUrl: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/2147496605/images/adSKFRGlQnauNI2eNk5y_blog-CSSGrid.jpg',
    summary: 'Master the CSS Grid for creating responsive and flexible web layouts effortlessly.',
  },
  {
    id: 4,
    title: 'Exploring GraphQL for Modern APIs',
    imageUrl: 'https://arghya.xyz/images/posts/misc/og-image-lg.jpg',
    summary: 'Understand GraphQL\'s advantages over REST and its role in data fetching for apps.',
  },
  {
    id: 4,
    title: 'Diving into TypeScript for Safer JavaScript',
    imageUrl: 'https://i.ibb.co/TYFthCJ/typescript-interfaces.png',
    summary: 'Essential techniques and tools for creating websites that adapt to various devices.',
  },
  {
    id: 5,
    title: 'Responsive Web Design Principles',
    imageUrl: 'https://mastertej.com/wp-content/uploads/2021/01/mobile-responsive-design-example.jpg',
    summary: 'Summary of Article 4. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 6,
    title: 'Effective State Management in Vue.js',
    imageUrl: 'https://i.ytimg.com/vi/pRLEHFDP6uo/maxresdefault.jpg',
    summary: 'Strategies and patterns to manage application state effectively using Vue.js.',
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
