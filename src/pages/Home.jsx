import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
    <div className="home-container">
        <h1>Welcome to the Quiz Platform</h1>
        <div className="button-container">
            <Link to="/quiz" className="button">Start Quiz</Link>
            <Link to="/history" className="button">Show History</Link>
        </div>
    </div>
);

export default Home;
