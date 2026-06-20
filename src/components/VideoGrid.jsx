import React from 'react';
import VideoCard from './VideoCard';
import './VideoGrid.css';

function VideoGrid({ videos }) {
  if (!videos || videos.length === 0) {
    return (
      <div className="video-grid">
        <div className="empty-state">
          <span className="icon">🔍</span>
          <p>No videos found. Try a different search term.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default VideoGrid;