import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdLibraryBooks } from 'react-icons/md';
import { IoIosPricetags } from 'react-icons/io';

import styles from './ShopFilters.module.css';
import CheckBox from '../CheckBox';
import capitalizeFirstLetter from '../../utilities/capitalizeFirstLetter';
import Button from '../Button';

export const ShopFilters = ({ history, searchParams, categories }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const urlMinPrice = searchParams.get('gt') ? searchParams.get('gt') : '';
    const urlMaxPrice = searchParams.get('lt') ? searchParams.get('lt') : '';
    setMinPrice(urlMinPrice);
    setMaxPrice(urlMaxPrice);
  }, []);

  const handleCheckBoxChange = event => {
    if (event.target.checked) {
      searchParams.append('category', event.target.id);
    } else {
      const values = searchParams
        .getAll('category')
        .filter(val => val !== event.target.id);
      searchParams.delete('category');
      values.forEach(val => {
        searchParams.append('category', val);
      });
    }
    searchParams.sort();
    history.push({
      search: searchParams.toString()
    });
  };

  const handlePriceChange = fn => event =>
    event.target.value < 0 ? fn(0) : fn(event.target.value);

  const handlePriceSubmit = event => {
    event.preventDefault();
    if (maxPrice) {
      searchParams.set('lt', maxPrice);
    }
    if (minPrice) {
      searchParams.set('gt', minPrice);
    }
    history.push({
      search: searchParams.toString()
    });
  };

  return (
    <div className={styles.shop__filters}>
      <span className={styles.shop__filters__section}>
        <MdLibraryBooks /> Categories
      </span>
      {categories.map(category => (
        <CheckBox
          key={category._id}
          id={category._id}
          label={capitalizeFirstLetter(category.name)}
          onChange={handleCheckBoxChange}
          checked={searchParams.getAll('category').includes(category._id)}
        />
      ))}
      <span className={styles.shop__filters__section}>
        <IoIosPricetags /> Price
      </span>
      <form
        className={styles.shop__filters__price}
        onSubmit={handlePriceSubmit}
      >
        <input
          type='number'
          className={styles.price__input}
          onChange={handlePriceChange(setMinPrice)}
          value={minPrice}
        />
        <span className={styles.price__span}>-</span>
        <input
          type='number'
          className={styles.price__input}
          onChange={handlePriceChange(setMaxPrice)}
          value={maxPrice}
        />
        <Button name='Go' type='submit' />
      </form>
    </div>
  );
};

ShopFilters.propTypes = {
  history: PropTypes.object.isRequired,
  search: PropTypes.string
};
