import React from 'react';
import './App.css';
import UC from "./components/UC";
import Header from "./components/Header";
import Employees from "./components/Employees";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App container">
      <UC />
      <Header />
      <Employees />
      <Footer />
    </div>
  );
}

export default App;
