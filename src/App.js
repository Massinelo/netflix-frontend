import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/Massinelo/netflix-frontend/master/src/assets/data.json'
        );
        setData(response.data);
      } catch (error) {
        console.log(error.message);
        setError('an error has occurred');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container">
      <Header />
      {data.map((item, index) => (
        <Section key={index} dataSection={item} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
