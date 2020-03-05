import { connect } from 'react-redux';

import { Home } from './Home';
import { fetchBestSellers, fetchNewest } from '../../ducks/products';

const mapStateToProps = state => ({});

const mapDispatchToProps = { fetchBestSellers, fetchNewest };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
