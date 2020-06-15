import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  overflow: hidden;

  @media screen and (min-width: 1279px) {
    width: 1279px;
    padding-top: 1.6rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;

    flex-direction: row;
    justify-content: left;
    align-items: flex-start;
  }
`;
