import { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    return parseInt((this.state.good / this.countTotalFeedback()) * 100);
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, val) => acc + val, 0);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title={'Please leave feedback'} children>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleButtonClick}
          />
          {this.countTotalFeedback() === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              title={'Statistics'}
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
export default App;
