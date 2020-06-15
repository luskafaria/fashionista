import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  height: 50px;

  background-color: #fff;

  z-index: 5;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 16px;
  height: 100%;

  a {
    height: min-content;
    svg {
      height: 2rem;
    }
  }

  @media screen and (min-width: 1279px) {
    width: 1279px;
    margin: 0 auto;
  }
`;

export const HeaderButton = styled.button`
  position: relative;

  border: none;
  background: none;

  padding: 0;

  & + button {
    margin-left: 16px;
  }

  outline: none;
  cursor: pointer;

  -webkit-tap-highlight-color: transparent;
`;

export const HeaderAlert = styled.span`
  position: absolute;
  right: -5px;
  width: 17px;
  height: 17px;
  background-color: #cf3838;
  color: #fff;
  border-radius: 10px;
  font-family: 'Noto Sans SC', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.4;
`;
