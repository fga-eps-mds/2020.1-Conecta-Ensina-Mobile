import styled from 'styled-components/native';

export const RedContainer = styled.View`
  background-color: ${(props) => props.theme.colors.vermelho};
  height: 40px;
  width: 300px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
