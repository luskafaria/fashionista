import React, { useEffect } from 'react';
import { Container } from './styles';

import getProducts from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../store/actions/products';
import ProductsCounter from '../../components/ProductsCounter';
import ProductsGrid from '../../components/ProductsGrid';

import Loading from '../../components/Loading';

const ProductsContainer = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.productsReducer);

  useEffect(() => {
    setTimeout(() => {
      getProducts
        .then((data) => dispatch(setProducts(data)))
        .catch((err) => console.log(err));
    }, 2000);
  }, [dispatch]);

  return (
    <Container>
      {products.length === 0 && <Loading />}
      <ProductsCounter productsQuantity={products.length} />
      <ProductsGrid products={products} />
    </Container>
  );
};

export default ProductsContainer;
