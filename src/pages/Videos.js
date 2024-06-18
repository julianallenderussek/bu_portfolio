import React from 'react';
import './Videos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const videos = [
  {
    id: 1,
    title: 'Video 1 Title',
    videoId: 'abc123', // Replace with your YouTube video ID
    caption: 'Brief description of what the video is about. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Video 2 Title',
    videoId: 'def456', // Replace with your YouTube video ID
    caption: 'Brief description of what the video is about. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    title: 'Video 3 Title',
    videoId: 'ghi789', // Replace with your YouTube video ID
    caption: 'Brief description of what the video is about. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 4,
    title: 'Video 2 Title',
    videoId: 'def456', // Replace with your YouTube video ID
    caption: 'Brief description of what the video is about. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 5,
    title: 'Video 3 Title',
    videoId: 'ghi789', // Replace with your YouTube video ID
    caption: 'Brief description of what the video is about. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const Videos = () => {
  return (
    <>
      <Header/>
      <h1 className="project-title">My Youtube Videos</h1>
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
