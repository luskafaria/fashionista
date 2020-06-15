import React from 'react';
import { Container, ProductDiscountPercentage } from './styles';

const ImageContainer = ({ productName, productImage, discount }) => {
  const PLACEHOLDER =
    'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível';

  return (
    <Container>
      <img src={productImage ? productImage : PLACEHOLDER} alt={productName} />
      {discount && (
        <ProductDiscountPercentage>-{discount}</ProductDiscountPercentage>
      )}
    </Container>
  );
};

export default ImageContainer;
