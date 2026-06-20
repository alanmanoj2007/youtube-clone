import React from 'react';
import VideoGrid from '../components/VideoGrid';

function Home({ videos, searchQuery }) {
  const hasSearch = searchQuery && searchQuery.trim().length > 0;
  const title = hasSearch ? `Results for "${searchQuery}"` : 'Recommended';

  return (
    <div>
      <h2
        style={{
          fontSize: '22px',
          fontWeight: 600,
          marginBottom: '24px',
          color: 'var(--text-primary)',
          transition: 'color var(--transition)',
        }}
      >
        {title}
      </h2>
      <VideoGrid videos={videos} />
    </div>
  );
}

export default Home;