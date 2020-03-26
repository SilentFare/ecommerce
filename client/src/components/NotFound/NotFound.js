import React from 'react';
import PropTypes from 'prop-types';
import { GiCardboardBox } from 'react-icons/gi';

import styles from './NotFound.module.css';

export const NotFound = ({ label }) => {
  return (
    <div className={styles.not__found__container}>
      <div className={styles.not__found}>
        <span className={styles.not__found__label}>{label}</span>
        <GiCardboardBox className={styles.not__found__icon} />
      </div>
    </div>
  );
};

NotFound.propTypes = {
  label: PropTypes.string.isRequired
};
