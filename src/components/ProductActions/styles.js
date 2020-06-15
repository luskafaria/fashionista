import styled from 'styled-components';

export const Container = styled.div`
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

export const ActionButton = styled.button`
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
