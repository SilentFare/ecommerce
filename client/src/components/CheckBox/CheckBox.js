import React from 'react';
import PropTypes from 'prop-types';

import styles from './CheckBox.module.css';

export const CheckBox = ({ id, label, onChange, checked }) => {
  return (
    <div className={styles.checkbox__container}>
      <input id={id} type='checkbox' onChange={onChange} checked={checked} />
      <label htmlFor={id} className={styles.checkbox__label}>
        {label}
      </label>
    </div>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool
};
