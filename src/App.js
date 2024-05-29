import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DishDetailPage from './components/DishDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<HomePage/>} />
        <Route path="/dish/:id" element={<DishDetailPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
