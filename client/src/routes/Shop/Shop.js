import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import styles from './Shop.module.css';
import ShopFilters from '../../components/ShopFilters';
import ItemBox from '../../components/ItemBox';
import NotFound from '../../components/NotFound';

export const Shop = ({
  fetchCategories,
  fetchByFilters,
  history,
  categories,
  products
}) => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchByFilters(searchParams.toString());
  }, [search]);

  return (
    <div className={styles.shop}>
      <ShopFilters
        history={history}
        searchParams={searchParams}
        categories={categories}
      />
      <div className={styles.shop__products}>
        {products.length > 0 ? (
          products.map(product => <ItemBox />)
        ) : (
          <NotFound label='Products not found' />
        )}
      </div>
    </div>
  );
};

Shop.propTypes = {};
