import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';
import { videos } from './data/videos';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Router>
      <div className="app">
        <Navbar
          onSearch={handleSearch}
          onMenuToggle={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <div className="app-main">
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
          <main className="content">
            <Routes>
              <Route
                path="/"
                element={<Home videos={filteredVideos} searchQuery={searchQuery} />}
              />
              <Route path="/video/:id" element={<VideoPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;