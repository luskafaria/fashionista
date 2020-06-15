import React, { useCallback, useState, useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  toggleSearch,
  setFilteredProducts,
} from '../../store/actions/products';

import SearchHeader from '../../components/SearchHeader';
import SearchInput from '../../components/SearchInput';
import SearchProducts from '../../components/SearchProducts';
import Drawer from '../../components/Drawer';

import { Container } from './styles';

const SearchContainer = () => {
  const wrapperRef = useRef(null);
  const [search, setSearch] = useState([]);
  const dispatch = useDispatch();

  const { filterOpen } = useSelector((state) => state.productsReducer);
  const { products, filteredProducts } = useSelector(
    (state) => state.productsReducer
  );

  const handleBackClick = useCallback(() => {
    dispatch(toggleSearch());
  }, [dispatch]);

  const handleSearch = useCallback((event) => {
    event.preventDefault();

    const query = event.target.value.toUpperCase();

    if (query.length > 2) {
      setSearch(query);
    } else {
      setSearch('');
    }
  }, []);

  useEffect(() => {
    if (search.length !== 0) {
      const matchingProducts = products.filter((product) =>
        product.name.includes(search)
      );

      dispatch(setFilteredProducts(matchingProducts));
    } else {
      dispatch(setFilteredProducts([]));
    }
  }, [search, products, dispatch]);

  useEffect(() => {
    if (filterOpen) {
      function handleClickOutside(event) {
        if (
          wrapperRef.current !== event.target &&
          event.target.parentNode.contains(wrapperRef.current)
        ) {
          dispatch(toggleSearch());
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [filterOpen, dispatch]);

  return (
    <Drawer open={filterOpen}>
      <Container ref={wrapperRef}>
        <SearchHeader handleBackClick={handleBackClick} />
        <SearchInput handleSearch={handleSearch} />
        <SearchProducts
          handleBackClick={handleBackClick}
          filteredProducts={filteredProducts}
        />
      </Container>
    </Drawer>
  );
};

export default SearchContainer;
