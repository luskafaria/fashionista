import React, { useCallback } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { addItem, decreaseItem, removeItem } from '../../store/actions/cart';
import { useDispatch } from 'react-redux';

import {
  Container,
  CartProduct,
  CartProductContent,
  CartProductContentImage,
  CartProductContentInfo,
  CartProductContentPrincing,
  CartProductContentInfoQuantity,
  CartProductRemoveButton,
} from './styles';

const CartProducts = ({ cart }) => {
  const dispatch = useDispatch();

  const handlePlusClick = useCallback(
    (product) => {
      dispatch(addItem(product));
    },
    [dispatch]
  );

  const handleMinusClick = useCallback(
    (product) => {
      if (product.quantity > 1) {
        dispatch(decreaseItem(product));
      }
    },
    [dispatch]
  );

  const handleRemoveItemClick = useCallback(
    (product) => {
      dispatch(removeItem(product));
    },
    [dispatch]
  );

  return (
    <Container>
      {cart.items.map((item, i) => (
        <CartProduct key={i}>
          <CartProductContent>
            <CartProductContentImage>
              <img src={item.image} alt={item.name} />
            </CartProductContentImage>
            <CartProductContentInfo>
              <span>{item.name}</span>
              <span>Tam.: {item.selected_size}</span>
              <CartProductContentInfoQuantity>
                <button
                  type="button"
                  onClick={() => {
                    handleMinusClick(item);
                  }}
                >
                  <FiMinus size={16} color="#000" />
                </button>
                <span>{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => {
                    handlePlusClick(item);
                  }}
                >
                  <FiPlus size={16} color="#000" />
                </button>
              </CartProductContentInfoQuantity>
            </CartProductContentInfo>
            <CartProductContentPrincing>
              <span>{item.actual_price}</span>
              <span>{item.installments}</span>
            </CartProductContentPrincing>
          </CartProductContent>
          <CartProductRemoveButton
            type="button"
            onClick={() => {
              handleRemoveItemClick(item);
            }}
          >
            Remover item
          </CartProductRemoveButton>
        </CartProduct>
      ))}
    </Container>
  );
};

export default CartProducts;
