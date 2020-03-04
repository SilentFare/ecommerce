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
import Home from '../Home';
import Header from '../Header';

export const App = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <main className={styles.main}>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </main>
      </Router>
    </div>
  );
};
