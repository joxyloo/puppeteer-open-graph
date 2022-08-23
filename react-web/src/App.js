import React from 'react';
import Home from './components/Home';
import Article from './components/Article';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path=':articleId' element={<Article />} />
      </Routes>
    </Router>
  );
}


