
import React from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import { Statistics } from './Statistics/Statistics';

import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

import css from './App.module.css'

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countFeedbackPercentage() {
    const countPositive = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    if (!countPositive) {
      return 0;
    }
    return countPositive;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <div className={css.conteiner}
    
      >
        <Section   title="Please leave feedback">
          <FeedbackOptions
          className={css.btnBox}
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}

          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export { App };
