import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Navigation = styled.div`
  width: 4em;
  height: 4em;
  border-radius: 50%;
  box-shadow: 0px 10px 15px rgba(22, 16, 10, 0.2);
  margin-top: 2em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    width: 4em;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 1.4em;
  }
`;