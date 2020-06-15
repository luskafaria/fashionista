import React, { useCallback } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { closeCart } from '../../store/actions/cart';
import { useDispatch } from 'react-redux';

import { Container, CartHeaderButton, CartHeaderCounter } from './styles';

const CartHeader = ({ quantity }) => {
  const dispatch = useDispatch();

  const handleBackClick = useCallback(() => {
    dispatch(closeCart());
  }, [dispatch]);

  return (
    <Container>
      <CartHeaderButton onClick={handleBackClick}>
        <FiArrowLeft size={25} color={'#000'} />
      </CartHeaderButton>
      <CartHeaderCounter>Sacola({quantity})</CartHeaderCounter>
    </Container>
  );
};

export default CartHeader;
