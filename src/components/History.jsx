import React, { useState, useEffect } from 'react';
import { getHistory, clearHistory } from '../utils/db';

const History = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        setHistory(getHistory());
    }, []);

    return (
        <div>
            <h2>Attempt History</h2>
            {history.length > 0 ? (
                <ul>
                    {history.map((attempt, index) => (
                        <li key={index}>
                            Score: {attempt.score} | Date: {new Date(attempt.date).toLocaleString()}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No attempts found.</p>
            )}
            <button onClick={() => { clearHistory(); setHistory([]); }}>Clear History</button>
        </div>
    );
};

export default History;
