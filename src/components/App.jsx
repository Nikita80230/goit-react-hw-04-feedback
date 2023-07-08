import { useState } from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleOptionClick = option => {
    setFeedback({ ...feedback, [option]: feedback[option] + 1 });
  };

  // render() {
  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FeedbackOptions
        handleOptionClick={handleOptionClick}
        options={feedback}
      />
      {totalFeedback ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
        ></Statistics>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
  // }
};
