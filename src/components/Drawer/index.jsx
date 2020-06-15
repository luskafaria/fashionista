import React from 'react';

import { Container } from './styles';

const Drawer = ({ open, children }) => {
  return <Container open={open}>{children}</Container>;
};

export default Drawer;
