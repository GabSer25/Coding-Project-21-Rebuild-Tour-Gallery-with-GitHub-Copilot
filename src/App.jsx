import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import './App.css';

const App = () => {
  const [tours, setTours] = useState([]);      // Holds fetched tours
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error state

  // Fetch tours from API using CORS proxy
  const fetchTours = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project'
      );
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      setTours(data);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Load failed');
    }
    setLoading(false);
  };

  // Fetch tours on first render
  useEffect(() => {
    fetchTours();
  }, []);

  // Remove a tour from the list
  const removeTour = (id) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      {/* Vite & React Logos */}
      <div className="logo-container">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Tour Gallery</h1>

      {/* Conditional UI Rendering */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && tours.length === 0 && (
        <div>
          <h2>No Tours Left</h2>
          <button onClick={fetchTours}>Refresh</button>
        </div>
      )}
      {!loading && !error && tours.length > 0 && (
        <Gallery tours={tours} onRemove={removeTour} />
      )}
    </main>
  );
};

export default App;
