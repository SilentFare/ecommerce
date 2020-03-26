import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

export const Button = ({ name, onClick, type }) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string
};
