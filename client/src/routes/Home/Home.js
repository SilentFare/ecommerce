import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Home.module.css';
import Hero from '../../components/Hero';
import ItemBox from '../../components/ItemBox';

export const Home = ({ fetchBestSellers, fetchNewest }) => {
  useEffect(() => {
    fetchBestSellers();
    fetchNewest();
  }, []);

  return (
    <div className={styles.home}>
      <Hero />
      <div className={styles.home__best__sellers}>
        <span className={styles.best__sellers__title}>Best Sellers</span>
        <div className={styles.best__sellers__items}>
          <ItemBox
            picture='https://assets.petco.com/petco/image/upload/f_auto,q_auto,t_ProductDetail-large/1032976-left-1'
            name='Imperator Angelfish - Juvenile - Medium'
            price={71.99}
          />
          <ItemBox
            picture='https://assets.petco.com/petco/image/upload/f_auto,q_auto,t_ProductDetail-large/1032976-left-1'
            name='Imperator Angelfish - Juvenile - Medium'
            price={71.99}
          />
          <ItemBox
            picture='https://assets.petco.com/petco/image/upload/f_auto,q_auto,t_ProductDetail-large/1032976-left-1'
            name='Imperator Angelfish - Juvenile - Medium'
            price={71.99}
          />
          <ItemBox
            picture='https://assets.petco.com/petco/image/upload/f_auto,q_auto,t_ProductDetail-large/1032976-left-1'
            name='Imperator Angelfish - Juvenile - Medium'
            price={71.99}
          />
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  fetchBestSellers: PropTypes.func.isRequired
};
