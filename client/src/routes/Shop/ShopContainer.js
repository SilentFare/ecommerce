import { connect } from 'react-redux';

import { Shop } from './Shop';
import { fetchCategories } from '../../ducks/categories';
import { fetchByFilters } from '../../ducks/products';

const mapStateToProps = state => ({
  categories: state.categories.items,
  products: state.products.shop.items
});

const mapDispatchToProps = { fetchCategories, fetchByFilters };

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
