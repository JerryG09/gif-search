import styled from 'styled-components';

export const Input = styled.input`
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #ccc;
  background: #fafafa;
  padding: 5px 10px;
  height: 40px;
  font-size: 1em;
  color: #606077;

  ::placeholder {
    color: #e1e1e1;
    font-size: 1em;
  }

  :focus {
    border: 1px solid gold;
    background-color: #fff;
  }
`;

export const InputContainer = styled.div`
  width: 26em;
  margin-right: 0.5em;
`;

export const SearchContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  background: #1e1e87;
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 10px 15px rgba(222, 160, 0, 0.12);
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  padding: 0 25px;
  color: #fff;
  cursor: pointer;
  :hover {
    background: #1e1e87;
    border: 1px solid #1e1e87;
  }
`;