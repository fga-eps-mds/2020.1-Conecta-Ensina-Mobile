import styled from 'styled-components/native';

export const TextContainer = styled.View`
  height: 50px;
  width: 280px;
  border-radius: 9px;
  background-color: ${(props) => props.theme.colors.fundoAzul};
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;
