import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import decode from 'jwt-decode';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import styles from './App.module.css';
import Home from '../../routes/Home';
import Header from '../Header';
import Shop from '../../routes/Shop';
import Dashboard from '../../routes/Dashboard';

export const App = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <main className={styles.main}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/shop' component={Shop} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </main>
      </Router>
    </div>
  );
};
