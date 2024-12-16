import PropTypes from "prop-types";
import styles from "./Options.module.css";

const Options = ({
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) => {
  return (
    <div className={styles.options}>
      <button
        className={styles.good}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={styles.neutral}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={styles.bad}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={styles.resetButton}
          onClick={resetFeedback}
        >
          Reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  resetFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;
