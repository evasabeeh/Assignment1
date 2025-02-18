import React, { useState, useEffect } from "react";
import { saveAttempt } from "../utils/db";
import Timer from "../components/Timer";
import "./QuizPage.css";

const QuizPage = () => {
    const questions = [
        { id: 1, question: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Earth", "Mars"], answer: "Mercury" },
        { id: 2, question: "Which data structure organizes items in a First-In, First-Out (FIFO) manner?", options: ["Stack", "Queue", "Tree", "Graph"], answer: "Queue" },
        { id: 3, question: "Which of the following is primarily used for structuring web pages?", options: ["Python", "Java", "HTML", "C++"], answer: "HTML" },
        { id: 4, question: "Which chemical symbol stands for Gold?", options: ["Au", "Gd", "Ag", "Pt"], answer: "Au" },
        { id: 5, question: "Which of these processes is not typically involved in refining petroleum?", options: ["Fractional Distillation", "Cracking", "Polymerization", "Filteration"], answer: "Filteration" },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [timeOut, setTimeOut] = useState(false);
    const [timerKey, setTimerKey] = useState(0); // Key to reset Timer component

    useEffect(() => {
        setTimerKey((prevKey) => prevKey + 1);
    }, [currentQuestion]);

    const handleAnswerClick = (selected) => {
        if (selected === questions[currentQuestion].answer) {
            setScore((prevScore) => prevScore + 1);
        }
        moveToNextQuestion();
    };

    const handleTimeout = () => {
        setTimeOut(true);
        setTimeout(() => {
            setTimeOut(false);
            moveToNextQuestion();
        }, 2000);
    };

    const moveToNextQuestion = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            saveAttempt(score);
            setQuizFinished(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setQuizFinished(false);
        setTimeOut(false);
        setTimerKey(0);
    };

    return (
        <div className="quiz-container">
            <div className="card">
                {!quizFinished ? (
                    <div>
                        {!timeOut ? (
                            <>
                                <h2>{questions[currentQuestion].question}</h2>
                                <Timer key={timerKey} duration={30} onTimeout={handleTimeout} />
                                {questions[currentQuestion].options.map((option, index) => (
                                    <button key={index} onClick={() => handleAnswerClick(option)}>
                                        {option}
                                    </button>
                                ))}
                            </>
                        ) : (
                            <h2>Time Out!</h2>
                        )}
                    </div>
                ) : (
                    <div>
                        <h2>Quiz Completed!</h2>
                        <p>Your Score: {score}/{questions.length}</p>
                        <button onClick={restartQuiz}>Restart Quiz</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizPage;
