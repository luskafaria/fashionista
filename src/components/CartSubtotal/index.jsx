import React from 'react';

import { Container } from './styles';

const CartSubtotal = ({ subtotal }) => {
  return (
    <Container>
      <span>Subtotal - R$ {`${subtotal}`.replace('.', ',')}</span>
    </Container>
  );
};

export default CartSubtotal;
