import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Test from './pages/test'; // Import the FAQ page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Test/>} /> {/* Add route for FAQ page */}
      </Routes>
    </Router>
  );
}

export default App;
