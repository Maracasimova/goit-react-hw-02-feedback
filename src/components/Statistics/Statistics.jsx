import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p className={style.title}>Good: {good}</p>
      <p className={style.title}>Neutral: {neutral}</p>
      <p className={style.title}>Bad: {bad}</p>
      <p className={style.title}>Total: {total}</p>
      <p className={style.title}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
