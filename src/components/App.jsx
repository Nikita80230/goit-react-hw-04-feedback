import { Component } from "react";

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  handleOptionClick = (option) => {

    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      }
    })
  }

  render() {
    const { good, neutral, bad } = this.state
    const totalFeedback = good + neutral + bad;
    const positiveFeedback = Math.round(good / totalFeedback * 100)

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: "column",
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <FeedbackOptions
          handleOptionClick={this.handleOptionClick}
          options={this.state} />
        {totalFeedback ? <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positiveFeedback={positiveFeedback}></Statistics> : <Notification message="There is no feedback" />}
      </div>
    );
  }
};
