import React from 'react';
import PropTypes from 'prop-types';

import styles from './Dashboard.module.css';

export const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <span>Dashboard</span>
    </div>
  );
};

Dashboard.propTypes = {};
