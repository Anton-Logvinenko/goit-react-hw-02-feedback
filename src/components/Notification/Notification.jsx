import React from 'react';
import css from './Notification.module.css';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <h2 className={css.notificationTitle}>{message}</h2>;
}

Notification.propTypes = {
  message: PropTypes.string,
};

export { Notification };
