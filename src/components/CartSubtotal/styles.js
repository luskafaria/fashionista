import styled from 'styled-components';

export const Container = styled.header`
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: #212529;
  bottom: 0;
  box-shadow: 0 -0.2rem 2rem 0 rgba(0, 0, 0, 0.08);
  color: #fff;
  display: inline-block;
  padding: 1rem 1.6rem;
  position: fixed;

  text-align: center;
  left: 0;
  width: 100%;

  span {
    font-size: 1.4rem;
    font-weight: 600;
    display: inline-block;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    margin: 0 auto;
    -webkit-transform: translate3d(calc(-50% - 30px), 0, 0);
    transform: translate3d(calc(-50% - 30px), 0, 0);
  }
`;
