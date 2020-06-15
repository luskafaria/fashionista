import React, { useState, useEffect } from 'react';
import { Container } from './styles';

import getProducts from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../store/actions/products';

import ProductImage from '../../components/ProductImage';
import ProductContent from '../../components/ProductContent';

const Product = () => {
  const [product, setProduct] = useState(() => {});
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.productsReducer);

  const params = new URLSearchParams(window.location.search);
  const productName = params.get('name')?.split('-').join(' ').toUpperCase();

  const productId = products.findIndex(
    (item) => item.name.split('-').join(' ') === productName
  );

  useEffect(() => {
    if (products.length === 0) {
      getProducts
        .then((data) => dispatch(setProducts(data)))
        .catch((err) => console.log(err));
    }
  }, [dispatch, products]);

  useEffect(() => {
    if (productId !== -1) {
      setProduct(products[productId]);
    }
  }, [products, productId]);

  return (
    <>
      {product && (
        <Container>
          <ProductImage
            productName={product?.name}
            productImage={product?.image}
            discount={product.discount_percentage}
          />
          <ProductContent product={product} />
        </Container>
      )}
    </>
  );
};

export default Product;
