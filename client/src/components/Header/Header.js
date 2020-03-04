import React from 'react';
import PropTypes from 'prop-types';
import { GiAquarium } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

export const Header = props => {
  return (
    <div className={styles.header}>
      <Link to='/' className={styles.header__home__logo}>
        <GiAquarium className={styles.header__home__icon} />
        Sakana
      </Link>
    </div>
  );
};

Header.propTypes = {};
