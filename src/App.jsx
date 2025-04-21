import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import './App.css';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Data from API
  const fetchTours = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://course-api.com/react-tours-project');
      if (!res.ok) throw new Error('Failed to fetch tours');
      const data = await res.json();
      setTours(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // Remove Tour by id
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      {/* Logos */}
      <div className="logo-container">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Tour Gallery</h1>

      {/* Conditional Rendering */}
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

