import styled from 'styled-components';

export const RedContainer = styled.View`
  background-color: ${(props) => props.theme.colors.vermelho};
  height: 40px;
  width: 200px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const Texto = styled.Text`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSizes.smallMedium};
  color: ${(props) => props.theme.colors.branco};
`;
