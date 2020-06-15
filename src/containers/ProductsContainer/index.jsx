import React, { useEffect } from 'react';
import { Container } from './styles';

import getProducts from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../store/actions/products';
import ProductsCounter from '../../components/ProductsCounter';
import ProductsGrid from '../../components/ProductsGrid';

const ProductsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts
      .then((data) => dispatch(setProducts(data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  const { products } = useSelector((state) => state.productsReducer);

  return (
    <Container>
      <ProductsCounter productsQuantity={products.length} />
      <ProductsGrid products={products} />
    </Container>
  );
};

export default ProductsContainer;
