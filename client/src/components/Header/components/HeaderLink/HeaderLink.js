import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './HeaderLink.module.css';

export const HeaderLink = ({ name, path }) => (
  <NavLink
    to={path}
    activeClassName={styles.header__link_active}
    className={styles.header__link}
  >
    {name}
  </NavLink>
);

HeaderLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};
