import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, handleButtonClick }) => (
  <div>
    {options.map(option => (
      <button
        className={style.btn}
        type="button"
        key={option}
        onClick={() => handleButtonClick(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};
