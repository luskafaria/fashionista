import React from 'react';
import { Container, ActionButton } from './styles';

const ProductActions = ({ handleCartAdd, product }) => {
  return (
    <Container>
      <ActionButton type="button" onClick={() => handleCartAdd(product)}>
        Adicionar à Sacola
      </ActionButton>
    </Container>
  );
};

export default ProductActions;
