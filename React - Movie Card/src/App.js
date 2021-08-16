import React from 'react';
import './App.css';
import Header from './components/Header';
import data from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <Header />
      </div>
      <div>
        <MovieList movies={ data } />
      </div>
    </div>
  );
}

export default App;
