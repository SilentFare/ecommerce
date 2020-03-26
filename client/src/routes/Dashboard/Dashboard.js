import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { MdLibraryBooks } from 'react-icons/md';
import { GiTemptation, GiHoodedAssassin } from 'react-icons/gi';
import { Route } from 'react-router-dom';

import styles from './Dashboard.module.css';
import Table from '../../components/Table';

export const Dashboard = ({ match }) => {
  const { pathname } = useLocation();
  return (
    <div className={styles.dashboard}>
      <aside className={styles.dashboard__menu}>
        <NavLink
          exact
          to={`${match.url}/categories`}
          className={styles.dashboard__menu__button}
          activeClassName={styles.button_active}
        >
          <MdLibraryBooks className={styles.button__icon} />
          Categories
        </NavLink>
        <NavLink
          exact
          to={`${match.url}/products`}
          className={styles.dashboard__menu__button}
          activeClassName={styles.button_active}
        >
          <GiTemptation className={styles.button__icon} /> Products
        </NavLink>
        <NavLink
          exact
          to={`${match.url}/orders`}
          className={styles.dashboard__menu__button}
          activeClassName={styles.button_active}
        >
          <GiHoodedAssassin className={styles.button__icon} /> Orders
        </NavLink>
      </aside>
      <main className={styles.dashboard__main}>
        <Route exact path={`${match.path}/:submenu`}>
          <div className={styles.dashboard__container}>
            <NavLink to={`${pathname}/submit`}>Add</NavLink>
            <input placeholder='Search' />
          </div>
          <Table />
        </Route>
        <Route exact path={`${match.path}/:submenu/submit`}>
          <span>Mooo</span>
        </Route>
      </main>
    </div>
  );
};

Dashboard.propTypes = {};
