import React, { useState } from 'react';

export const Feedback = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleButtonClick = type => {
    setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  return (
    <div>
      <h1>Please leave feedback</h1>
      <button onClick={() => handleButtonClick('good')}>Good</button>
      <button onClick={() => handleButtonClick('neutral')}>Neutral</button>
      <button onClick={() => handleButtonClick('bad')}>Bad</button>
      <h2>Statistics</h2>
      {countTotalFeedback() === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <p>Good: {state.good}</p>
          <p>Neutral: {state.neutral}</p>
          <p>Bad: {state.bad}</p>
          <p>Total: {countTotalFeedback()}</p>
          <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
        </div>
      )}
    </div>
  );
};
