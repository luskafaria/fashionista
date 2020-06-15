import styled from 'styled-components';

export const Container = styled.div`
  align-items: flex-start;
  padding: 0px 16px;

  width: 100%;

  @media screen and (min-width: 1279px) {
    width: 50%;
  }

  @media screen and (max-height: 900px) {
    padding-bottom: 60px;
  }
`;

export const ProductName = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin: 10px 0 8px 0;
  font-family: 'Noto Sans SC', sans-serif;
`;

export const ProductPrice = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 8px !important;
  font-family: 'Noto Sans SC', sans-serif;
`;

export const ProductInstallments = styled.span`
  font-size: 1.4rem;
  margin-left: 10px;
  color: #a7a7a7;
  font-weight: 600;
  margin-bottom: 8px;
  font-family: 'Noto Sans SC', sans-serif;
`;

export const ProductSizesContainer = styled.div`
  color: #a7a7a7;
  font-size: 1.4rem;

  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans SC', sans-serif;
  margin-top: 24px;
`;

export const ProductSizesTitle = styled.span`
  color: #a7a7a7;
  font-size: 1.6rem;
  margin-bottom: 10px;
  font-family: 'Noto Sans SC', sans-serif;
`;

export const ProductSizesButtons = styled.div`
  .selected {
    background-color: #000;
    color: #fff;
  }
`;

export const ProductSizesButton = styled.button`
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: transparent;
  outline: none;

  cursor: pointer;

  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  font-family: 'Noto Sans SC', sans-serif;

  width: 36px;
  height: 36px;

  & + button {
    margin-left: 8px;
  }
`;

export const ProductActionsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  padding: 10px 16px;
  width: 100%;

  @media screen and (min-width: 1279px) {
    position: relative;
    width: auto;

    height: 100%;
    width: 100%;
    padding: 20px 0px;
  }
`;

export const ProductActions = styled.button`
  width: 100%;
  padding: 12px;
  line-height: 1;

  background-color: #212529;
  box-shadow: 0 0.2rem 2rem 0 rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  border: none;
  outline: none;

  color: #fff;
  text-align: center;
  font-size: 1.6rem;
  font-family: 'Noto Sans SC', sans-serif;

  cursor: pointer;

  @media screen and (min-width: 1279px) {
    max-width: 300px;
    font-size: 1.8rem;
  }
`;

export const ProductActionAlert = styled.span`
  margin-bottom: 20px;
  margin-top: 8px;

  font-size: 1.3rem;
  font-family: 'Noto Sans SC', sans-serif;
  color: #cf3838;
`;
