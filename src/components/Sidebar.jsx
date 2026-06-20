import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const sidebarItems = [
  { id: 'home', label: 'Home', icon: '🏠', path: '/' },
  { id: 'trending', label: 'Trending', icon: '🔥', path: '/' },
  { id: 'subscriptions', label: 'Subscriptions', icon: '📺', path: '/' },
  { id: 'library', label: 'Library', icon: '📚', path: '/' },
];

function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const handleItemClick = () => {
    if (window.innerWidth <= 1024) {
      onClose?.();
    }
  };

  return (
    <>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav>
          {sidebarItems.map((item) => {
            const isActive = item.path === currentPath && item.id === 'home';
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`sidebar-item ${isActive ? 'active' : ''}`}
                onClick={handleItemClick}
              >
                <span className="icon">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
          <div className="sidebar-divider" />
          <div className="sidebar-item">
            <span className="icon">⏰</span>
            <span>History</span>
          </div>
          <div className="sidebar-item">
            <span className="icon">⏱️</span>
            <span>Watch Later</span>
          </div>
          <div className="sidebar-item">
            <span className="icon">👍</span>
            <span>Liked Videos</span>
          </div>
          <div className="sidebar-divider" />
          <div className="sidebar-item">
            <span className="icon">⚙️</span>
            <span>Settings</span>
          </div>
        </nav>
      </aside>
      <div
        className={`sidebar-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        role="button"
        tabIndex={0}
        aria-label="Close sidebar"
      />
    </>
  );
}

export default Sidebar;