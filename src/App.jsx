import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import History from './components/History';

const RedirectToHome = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      window.location.href = "/";
    }
  }, []);

  return null;
};

const App = () => (
  <Router>
    <RedirectToHome />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/history" element={<History />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

export default App;
