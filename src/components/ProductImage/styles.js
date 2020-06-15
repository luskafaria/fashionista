import styled from 'styled-components';

export const Container = styled.figure`
  width: 100%;
  position: relative;

  img {
    width: 100%;
  }

  @media screen and (min-width: 1279px) {
    width: 50%;
  }
`;

export const ProductDiscountPercentage = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  background-color: #000;
  color: #fff;

  font-size: 1.2rem;
  font-weight: 400;
  padding: 2px;

  @media screen and (min-width: 1279px) {
    font-size: 1.6rem;
  }
`;
