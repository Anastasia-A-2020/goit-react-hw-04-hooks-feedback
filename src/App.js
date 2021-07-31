import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";
import "./App.css";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttons = { good, neutral, bad };

  const handleIncrement = (e) => {
    const name = e.currentTarget.name;

    switch (name) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;

      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;

      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    // return good + neutral + bad;
    const feedbacksValues = Object.values(buttons);

    return feedbacksValues.reduce((total, value) => total + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    if (total === 0) {
      return 0;
    }

    return Math.round((good / total) * 100);
  };

  const totalFeedback = countTotalFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions buttons={buttons} onLeaveFeedback={handleIncrement} />
      </Section>

      {totalFeedback > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={
              countPositiveFeedbackPercentage()
                ? countPositiveFeedbackPercentage()
                : 0
            }
          />
        </Section>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
}

export default App;
