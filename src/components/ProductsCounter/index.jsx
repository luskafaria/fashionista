import React from 'react';
import { Container } from './styles';

const ProductsCounter = ({ productsQuantity }) => {
  return (
    <Container>
      <span>{productsQuantity && `${productsQuantity} items`}</span>
    </Container>
  );
};

export default ProductsCounter;
