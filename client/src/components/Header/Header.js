import React from 'react';
import PropTypes from 'prop-types';
import { GiAquarium } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import HeaderLink from './components/HeaderLink';
import Button from '../Button';

export const Header = props => {
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <Link to='/' className={styles.header__home__logo}>
          <GiAquarium className={styles.header__home__icon} />
          Sakana
        </Link>
        <HeaderLink path='/shop' name='Shop' />
        <HeaderLink path='/dashboard' name='Dashboard' />
        <HeaderLink path='/profile' name='Profile' />
        <HeaderLink path='/contact' name='Contact' />
      </div>
      <div className={styles.header_right}>
        <FaShoppingCart className={styles.header__shopping__cart} />
        <Button name='Logout' />
      </div>
    </div>
  );
};

Header.propTypes = {};
