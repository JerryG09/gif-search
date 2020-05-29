import styled from 'styled-components'

const CardContainer = styled.div`
  height: ${props => props.details ? '25em' : '14em'};
  width: ${props => props.details ? '25em' : '14em'};
  overflow: hidden;
  border-radius: 4px;
  margin: 0.5em;
  background-repeat: no-repeat;
  background-origin: content-box;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`; 

const CardDescription = styled.div`
  display: flex;
  font-size: 1em;
  font-weight: 400;
`;

export { CardContainer, CardDescription }