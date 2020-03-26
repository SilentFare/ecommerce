import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './ItemBox.module.css';

export const ItemBox = ({ picture, name, price }) => {
  return (
    <Link to={`/`} className={styles.itembox}>
      <img src={picture} alt='' className={styles.itembox__picture} />
      <span className={styles.itembox__name}>{name}</span>
      <span className={styles.itembox__price}>{price}</span>
    </Link>
  );
};

ItemBox.propTypes = {};
