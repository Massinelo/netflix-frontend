import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://raw.githubusercontent.com/Massinelo/netflix-frontend/master/src/assets/data.json'
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>En cours de chargement ...</p>
  ) : (
    <>
      <div className="container">
        <Header />
        {data.map((item, index) => {
          return <Section key={index} dataSection={item} />;
        })}
        <Footer />
      </div>
    </>
  );
}

export default App;
