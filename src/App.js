import React from 'react';
import './App.css';
import UC from "./components/UC";
import Header from "./components/Header";
import Search from "./components/Search";
import Employees from "./components/Employees";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App container">
      <UC />
      <Header />
      <Search />
      <Employees />
      <Footer />
    </div>
  );
}

export default App;
