import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const Feedback = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <div className={styles.feedback}>
      <ul className={styles.statistics}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>totalFeedback: {totalFeedback}</li>
        <li>
          positiveFeedback: {positiveFeedback}%
        </li>
      </ul>
    </div>
  );
};

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Feedback;
