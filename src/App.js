import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      };


      countTotalFeedback = () => {
          const { good, neutral, bad } = this.state;
          return good + neutral + bad;
        };

        countPositiveFeedbackPercentage = () => {
            const result = this.countTotalFeedback();
            const { good } = this.state;
            const percentage = (good * 100) / result;
            return Math.round(percentage);
          };


  render() {
    return (
      <div>
        
      </div>
    )
  }
}

