import React from 'react';
import { Container } from './styles';
import Topbar from '../../components/Topbar';

import CartContainer from '../../containers/CartContainer';
import ProductContainer from '../../containers/ProductContainer';

const Product = () => {
  return (
    <Container>
      <Topbar />
      <ProductContainer />
      <CartContainer />
    </Container>
  );
};

export default Product;
