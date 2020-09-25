import styled from 'styled-components';

export const RedContainer = styled.View`
  background-color: ${(props) => props.theme.colors.vermelho};
  height: 60px;
  width: 280px;
  border-radius: 15px;
  justify-content: flex-start;
  align-items: center;
`;

export const Texto = styled.Text`
  padding-left: 10px;
  padding-top: 4px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.branco};
`;
