import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0 16px;
  margin-top: 32px;
  background-color: transparent;
`;

export const SearchProduct = styled.div`
  display: flex;
  position: relative;

  flex-direction: column;
  flex-wrap: wrap;

  width: 100%;
  padding: 10px 0px;
  background-color: transparent;

  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.08);

  * {
    text-decoration: none;
    color: #000;
    font-family: 'Noto Sans SC', sans-serif;
  }
`;

export const SearchProductContent = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SearchProductContentImage = styled.figure`
  width: 25%;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
  }
`;

export const SearchProductContentInfo = styled.div`
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

export const SearchProductContentPrincing = styled.div`
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
