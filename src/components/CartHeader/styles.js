import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  background-color: #fff;
`;

export const CartHeaderButton = styled.button`
  margin-right: 60px;
  background: transparent;
  border: none;
  outline: none;

  cursor: pointer;
`;

export const CartHeaderCounter = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  font-family: 'Noto Sans SC', sans-serif;
`;
