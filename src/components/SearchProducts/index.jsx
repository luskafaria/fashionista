import React from 'react';

import { Link } from 'react-router-dom';

import {
  Container,
  SearchProduct,
  SearchProductContent,
  SearchProductContentImage,
  SearchProductContentInfo,
  SearchProductContentPrincing,
} from './styles';

const SearchProducts = ({ filteredProducts, handleBackClick }) => {
  return (
    <Container>
      {filteredProducts.map((item, i) => (
        <SearchProduct key={i}>
          <Link
            to={`/product?name=${item.name.toLowerCase().split(' ').join('-')}`}
            onClick={handleBackClick}
          >
            <SearchProductContent>
              <SearchProductContentImage>
                <img src={item.image} alt={item.name} />
              </SearchProductContentImage>
              <SearchProductContentInfo>
                <span>{item.name}</span>
              </SearchProductContentInfo>
              <SearchProductContentPrincing>
                <span>{item.actual_price}</span>
                <span>{item.installments}</span>
              </SearchProductContentPrincing>
            </SearchProductContent>
          </Link>
        </SearchProduct>
      ))}
    </Container>
  );
};

export default SearchProducts;
