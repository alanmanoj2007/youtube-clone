import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { videos } from '../data/videos';
import './VideoPage.css';

function VideoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const found = videos.find((v) => v.id === parseInt(id));
    setVideo(found || null);
  }, [id]);

  const handleBack = () => {
    navigate('/');
  };

  if (!video) {
    return (
      <div className="video-page" style={{ textAlign: 'center', paddingTop: '60px' }}>
        <h2>Video not found</h2>
        <button className="video-page-back" onClick={handleBack}>
          ← Back to Home
        </button>
      </div>
    );
  }

  const formatViews = (count) => {
    if (count >= 1e6) return (count / 1e6).toFixed(1) + 'M';
    if (count >= 1e3) return (count / 1e3).toFixed(1) + 'K';
    return count.toString();
  };

  return (
    <div className="video-page">
      <button className="video-page-back" onClick={handleBack}>
        ← Back
      </button>

      <div className="video-page-thumbnail">
        <img src={video.thumbnail} alt={video.title} />
      </div>

      <h1 className="video-page-title">{video.title}</h1>

      <div className="video-page-info">
        <div className="video-page-channel">
          <div className="video-page-channel-avatar">
            {video.channelAvatar || video.channelName.charAt(0)}
          </div>
          <span className="video-page-channel-name">{video.channelName}</span>
        </div>
        <div className="video-page-stats">
          <span>{formatViews(video.views)} views</span>
          <span className="dot" />
          <span>{video.uploadTime}</span>
        </div>
      </div>

      <div className="video-page-description">
        {video.description || 'No description available for this video.'}
      </div>
    </div>
  );
}

export default VideoPage;