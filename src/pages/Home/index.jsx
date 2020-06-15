import React from 'react';
import { Container } from './styles';
import ProductsContainer from '../../containers/ProductsContainer';
import Topbar from '../../components/Topbar';

const Home = () => {
  return (
    <Container>
      <Topbar />
      <ProductsContainer />
    </Container>
  );
};

export default Home;
