import React from 'react';

import { Container, SearchHeaderInput } from './styles';

const Search = ({ handleSearch }) => {
  return (
    <Container>
      <SearchHeaderInput
        placeholder="Buscar por produto..."
        onChange={handleSearch}
      />
    </Container>
  );
};

export default Search;
