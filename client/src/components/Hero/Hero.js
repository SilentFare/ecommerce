import React from 'react';
import PropTypes from 'prop-types';

import styles from './Hero.module.css';
import heroAquarium from '../../images/heroAquarium.jpeg';
import heroAquarium2 from '../../images/heroAquarium2.jpeg';
import heroAquarium3 from '../../images/heroAquarium3.jpeg';
import Carousel from '../Carousel';

export const Hero = props => {
  return (
    <div className={styles.hero}>
      <Carousel>
        <img src={heroAquarium} className={styles.hero__image} />
        <img src={heroAquarium2} className={styles.hero__image} />
        <img src={heroAquarium3} className={styles.hero__image} />
      </Carousel>
    </div>
  );
};

Hero.propTypes = {};
