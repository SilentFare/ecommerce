import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Hero from '../../components/Hero';

export const Home = ({ fetchBestSellers, fetchNewest }) => {
  useEffect(() => {
    fetchBestSellers();
    fetchNewest();
  }, []);

  return (
    <div>
      <Hero />
    </div>
  );
};

Home.propTypes = {
  fetchBestSellers: PropTypes.func.isRequired
};
