import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GifCardsContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  margin-top: 1em;
`;

export const Header = styled.div`
  width: 100%;
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 2.1em;
    text-align: center;
    color: #2E2E99;
    font-weight: 500;
  }
`;

export const PaginationContainer = styled.div`
  height: 3em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2em;
  margin-top: 1.5em;
`;