// import Props from 'prop-types';
import styles from './statistic.module.scss';
import StatisticItem from './StatisticItem';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import { useState } from 'react';

export default function Statistic() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad,setBad] = useState(0);
   const decrementGood=()=> {
        setGood(good + 1);
    }
    const decrementNeutral=()=> {
        setNeutral(neutral + 1);
        }
   const decrementBad=()=> {
       setBad(bad + 1);
    }
   const countTotalFeedback = () => {
        return (good+neutral+bad);
    }
   const countPositiveFeedbackPercentage = () => {
        if (good === 0) {
            return(0)
        }
        return(Math.round(good/(countTotalFeedback())*100))
    }


    return (
        <div className={styles.conteinerStats}>
                 <h2>Please leave feedback</h2>
                 <FeedbackOptions
                    good={decrementGood}
                    neutral={decrementNeutral}
                    bad={decrementBad}
                />
                 <h2>Statistics</h2>
                 {(good+neutral+bad) !== 0 ? <StatisticItem
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}
            /> : <Notification message="No feedback given" />}
        </div>)
};