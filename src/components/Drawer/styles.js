import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  overflow-x: hidden;

  ${(props) =>
    props.open
      ? css`
          width: 100%;
        `
      : css`
          background-color: transparent;
          width: 0;
          transition: width 1s;
        `};

  & > div {
    position: absolute;
    right: 0;

    transform: translateX(100%);

    animation: ${(props) => (props.open ? 'slideIn' : 'slideOut')} 500ms
      forwards;

    @keyframes slideIn {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }

    @keyframes slideOut {
      from {
        transform: translateX(0%);
      }
      to {
        transform: translateX(100%);
      }
    }
  }
`;
