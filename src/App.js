import React from "react";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import data from "./assets/data.json";

function App() {
  return (
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
