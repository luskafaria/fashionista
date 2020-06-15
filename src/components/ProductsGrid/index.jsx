import React from 'react';
import {
  Container,
  ProductBox,
  ProductRegularPrice,
  ProductActualPrice,
  ProductDiscountPercentage,
} from './styles';
import { Link } from 'react-router-dom';

const ProductsGrid = ({ products }) => {
  return (
    <Container>
      {products.map((product, i) => (
        <ProductBox key={i}>
          <Link
            to={`/product?name=${product.name
              .toLowerCase()
              .split(' ')
              .join('-')}`}
          >
            <figure>
              <img
                src={
                  product.image
                    ? product.image
                    : 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível'
                }
                alt={product.name}
              />
              {product.discount_percentage && (
                <ProductDiscountPercentage>
                  -{product.discount_percentage}
                </ProductDiscountPercentage>
              )}
            </figure>
            <h3>{product.name}</h3>
            {product.actual_price !== product.regular_price ? (
              <ProductRegularPrice>{product.regular_price}</ProductRegularPrice>
            ) : null}
            <ProductActualPrice>{product.actual_price}</ProductActualPrice>
          </Link>
        </ProductBox>
      ))}
    </Container>
  );
};

export default ProductsGrid;
