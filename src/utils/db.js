export const saveAttempt = (score) => {
    let history = JSON.parse(sessionStorage.getItem("quizHistory")) || [];
    history.push({ score, date: new Date().toISOString() });
    sessionStorage.setItem("quizHistory", JSON.stringify(history));
};

export const getHistory = () => {
    return JSON.parse(sessionStorage.getItem("quizHistory")) || [];
};

export const clearHistory = () => {
    sessionStorage.removeItem("quizHistory");
};
