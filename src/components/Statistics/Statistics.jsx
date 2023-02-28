import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={css.itemList}>
    <li  className={css.item}>
          Good: {good}
    </li>
    <li  className={css.item}>
      Neutral: {neutral}
    </li>
    <li  className={css.item}>
      Bad: {bad}
    </li>
    <li className={css.itemTotal}>
      Total: {total}
    </li>
    <li className={css.item}>
      Positive feedback: {positivePercentage}%
    </li>
  </ul>
);



Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,

};

export { Statistics };