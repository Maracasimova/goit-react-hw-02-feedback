import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const stateArray = Object.keys(options);
  return (
    <div className={style.feedback}>
      {stateArray.map(option => (
        <button
          className={style.btn}
          type="button"
          key={option}
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option[0].toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};
