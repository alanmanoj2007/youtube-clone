import React from 'react';
import { Link } from 'react-router-dom';
import './VideoCard.css';

function VideoCard({ video }) {
  const { id, title, thumbnail, channelName, views, uploadTime, duration } = video;

  const formatViews = (count) => {
    if (count >= 1e6) return (count / 1e6).toFixed(1) + 'M';
    if (count >= 1e3) return (count / 1e3).toFixed(1) + 'K';
    return count.toString();
  };

  return (
    <Link to={`/video/${id}`} className="video-card">
      <div className="video-card-thumbnail">
        <img src={thumbnail} alt={title} loading="lazy" />
        {duration && <span className="video-card-duration">{duration}</span>}
      </div>
      <div className="video-card-body">
        <div className="video-card-title">{title}</div>
        <div className="video-card-channel">{channelName}</div>
        <div className="video-card-meta">
          <span>{formatViews(views)} views</span>
          <span className="dot" />
          <span>{uploadTime}</span>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;