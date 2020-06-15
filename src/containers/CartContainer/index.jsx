import React, { useState, useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import CartHeader from '../../components/CartHeader';
import CartProducts from '../../components/CartProducts';
import CartSubtotal from '../../components/CartSubtotal';
import Drawer from '../../components/Drawer';
import { Container } from './styles';
import { closeCart } from '../../store/actions/cart';

const CartContainer = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [subtotal, setSubtotal] = useState('');
  const wrapperRef = useRef(null);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    if (cart.items.length !== 0) {
      const counter = cart.items.reduce((acc, cur) => acc + cur.quantity, 0);

      const cartPrice = cart.items.reduce(
        (acc, cur) =>
          acc +
          cur.quantity *
            Number(cur.actual_price.replace(',', '.').split(' ')[1]),
        0
      );

      setQuantity(counter);
      setSubtotal(JSON.stringify(cartPrice));
    } else {
      setSubtotal('0,00');
      setQuantity(cart.items.length);
    }
  }, [cart.items]);

  useEffect(() => {
    if (cart.open) {
      function handleClickOutside(event) {
        if (
          wrapperRef.current !== event.target &&
          event.target.parentNode.contains(wrapperRef.current)
        ) {
          dispatch(closeCart());
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [cart.open, dispatch]);

  console.log(cart);

  return (
    <Drawer open={cart.open}>
      <Container ref={wrapperRef}>
        <CartHeader quantity={quantity} />
        <CartProducts cart={cart} />
        <CartSubtotal subtotal={subtotal} />
      </Container>
    </Drawer>
  );
};

export default CartContainer;
