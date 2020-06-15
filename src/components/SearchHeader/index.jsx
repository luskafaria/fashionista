import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import { Container, SearchHeaderButton, SearchHeaderText } from './styles';

const SearchHeader = ({ handleBackClick }) => {
  return (
    <Container>
      <SearchHeaderButton onClick={handleBackClick}>
        <FiArrowLeft size={25} color={'#000'} />
      </SearchHeaderButton>
      <SearchHeaderText>Buscar Produtos</SearchHeaderText>
    </Container>
  );
};

export default SearchHeader;
