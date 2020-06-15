import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  background-color: initial;
`;

export const ProductBox = styled.div`
  width: 50%;
  text-align: center;
  padding: 1rem 0.25rem;

  a {
    text-decoration: none;
    color: #000;
    font-size: 1.3rem;

    h3 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 10px 0 5px;
      font-weight: 600;
    }

    figure {
      width: 100%;
      position: relative;

      img {
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 1090px) {
    width: 25%;
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
`;

export const ProductRegularPrice = styled.span`
  margin-right: 10px;
  font-size: 1.2rem;
  color: #a7a7a7;
  text-decoration: line-through;
`;

export const ProductActualPrice = styled.span``;
