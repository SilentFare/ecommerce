import React from 'react';
import PropTypes from 'prop-types';

import styles from './Carousel.module.css';
import { useCarousel } from '../../hooks/useCarousel';

export const Carousel = ({ children, interval = 3000 }) => {
  const slides = React.Children.toArray(children);
  const { length } = slides;
  const [active, setActive, handlers, style] = useCarousel(length, interval);

  return (
    length > 0 && (
      <div className={styles.carousel}>
        <ol className={styles.carousel__indicators}>
          {slides.map((_, index) => (
            <li
              onClick={() => setActive(index)}
              key={index}
              className={`${
                active === index ? styles.carousel__indicator_active : ''
              } ${styles.carousel__indicator}`}
            />
          ))}
        </ol>
        <div className={styles.carousel__content} {...handlers} style={style}>
          <div className={styles.carousel__child}>
            {slides[slides.length - 1]}
          </div>
          {slides.map((slide, index) => (
            <div className={styles.carousel__child} key={index}>
              {slide}
            </div>
          ))}
          <div className={styles.carousel__child}>{slides[0]}</div>
        </div>
      </div>
    )
  );
};

Carousel.propTypes = {};
