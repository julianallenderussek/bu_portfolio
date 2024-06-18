import React from 'react';
import './Videos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const videos = [
  {
    id: 1,
    title: 'React in 100 Seconds',
    videoId: 'Tn6-PIqc4UM?si=m6m4NyB_tu2L8ZY3', 
    caption: 'React is a little JavaScript library with a big influence over the webdev world. Learn the basics of React in 100 Seconds.',
  },
  {
    id: 2,
    title: 'Apple Intelligence is dumb',
    videoId: 'ek2yOqAIYuU?si=CkB3gAS8JsZW60-W', // Replace with your YouTube video ID
    caption: "Apple announced it\'s first major AI feature \"Apple Intelligence, which brings a suite of new tools to the iPhone and Mac. Apple has it\'s own foundation models, but will also rely on OpenAI in the cloud for certain AI jobs.",
  },
  {
    id: 3,
    title: 'Best OS for programming? Mac vs Windows vs Linux debate settled',
    videoId: 'AdygBbbEnco?si=aY9zGwxGwIk7TQ4j', // Replace with your YouTube video ID
    caption: 'What is the best operating system for programming? Learn the pros and cons of MacOS, Windows, and Linux from the perspective of a programmer.',
  },
  {
    id: 4,
    title: 'Is Linux Mint BETTER Than Windows?',
    videoId: '499jqHWZ-Ts?si=tAN1wcZpeBbgOMKi', // Replace with your YouTube video ID
    caption: 'Is Linux Mint the best operating system you\'re not using?.',
  },
  {
    id: 5,
    title: 'The Linux Experience',
    videoId: '8WkcLwXCFJQ?si=xnFk_53u06AewZgL', // Replace with your YouTube video ID
    caption: 'Discover why Linux is a great operating system for you.',
  },
];

const Videos = () => {
  return (
    <>
      <Header/>
      <h1 className="project-title">My Favorite Youtube Videos</h1>
      <div className="my-videos-page">
        <div className="videos-container">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-responsive">
                <iframe
                  title={video.title}
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <p>{video.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
    
  );
};

export default Videos;
