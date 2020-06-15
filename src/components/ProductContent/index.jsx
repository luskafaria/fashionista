import React, { useState, useCallback } from 'react';
import {
  Container,
  ProductName,
  ProductPrice,
  ProductInstallments,
  ProductSizesContainer,
  ProductSizesTitle,
  ProductSizesButtons,
  ProductSizesButton,
  ProductActionAlert,
} from './styles';

import { useDispatch } from 'react-redux';
import { addItem } from '../../store/actions/cart';

import ProductActions from '../ProductActions';

const ProductContent = ({ product }) => {
  const [sizeAlert, setSizeAlert] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const dispatch = useDispatch();

  const handleSizeClick = useCallback((event) => {
    const size = event?.currentTarget.innerHTML;

    setSelectedSize(size);
    setSizeAlert(false);
  }, []);

  const handleCartAdd = useCallback(
    (product) => {
      if (!!selectedSize) {
        setSizeAlert(false);

        dispatch(addItem({ ...product, selected_size: selectedSize }));
      } else {
        setSizeAlert(true);
      }
    },
    [selectedSize, dispatch]
  );

  return (
    <Container>
      <ProductName>{product?.name}</ProductName>
      <div>
        <ProductPrice>{product?.actual_price}</ProductPrice>
        <ProductInstallments>
          em até {product?.installments}
        </ProductInstallments>
      </div>
      <ProductSizesContainer>
        <ProductSizesTitle>Escolha o tamanho</ProductSizesTitle>
        {sizeAlert && (
          <ProductActionAlert>
            É necessário escolher um tamanho
          </ProductActionAlert>
        )}
        <ProductSizesButtons>
          {product?.sizes.map(
            (size) =>
              size.available && (
                <ProductSizesButton
                  key={size.size}
                  type="button"
                  onClick={handleSizeClick}
                  className={
                    selectedSize === size.size ? 'selected' : undefined
                  }
                >
                  {size?.size}
                </ProductSizesButton>
              )
          )}
        </ProductSizesButtons>
      </ProductSizesContainer>
      <ProductActions product={product} handleCartAdd={handleCartAdd} />
    </Container>
  );
};

export default ProductContent;
