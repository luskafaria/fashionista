import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0 16px;
  background-color: transparent;
`;

export const CartProduct = styled.div`
  display: flex;
  position: relative;

  flex-direction: column;
  flex-wrap: wrap;

  width: 100%;
  padding: 10px 0px;
  background-color: transparent;

  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.08);
`;

export const CartProductContent = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CartProductContentImage = styled.figure`
  width: 25%;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
  }
`;

export const CartProductContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 10px;
  padding-right: 10px;

  span {
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 5px;
  }

  span + span {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    font-size: 1.2rem;
    color: #a7a7a7;
    font-weight: 400;
  }
`;

export const CartProductContentInfoQuantity = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;

  span {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    color: #212529;
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    min-height: 100%;
    text-rendering: optimizeLegibility;
  }

  button {
    border: 1px solid #000;
    background: transparent;
    padding: 0.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;

    cursor: pointer;
  }
`;

export const CartProductContentPrincing = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  width: 25%;

  span {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  span + span {
    font-size: 1.2rem;
    color: #a7a7a7;
    font-weight: 400;
  }
`;

export const CartProductRemoveButton = styled.button`
  width: 100%;
  font-size: 1.2rem;
  line-height: 2rem;
  font-family: 'Noto Sans SC', sans-serif;
  text-align: left;

  color: #cf3838;
  background: transparent;

  cursor: pointer;
  outline: none;
  border: none;
`;
