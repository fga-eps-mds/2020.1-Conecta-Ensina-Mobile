import styled from 'styled-components';

export const Container = styled.View`
  flex-direction: row;
  margin-top: 440px;
  justify-content: center;
  align-items: flex-start;
`;
export const Voltar = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.vermelho};
  width: 73px;
  height: 31px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
export const Continuar = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.azulClaro};
  width: 138px;
  height: 31px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 97px;
`;
export const Texto = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.bigSmall};
  color: ${(props) => props.theme.colors.branco};
`;
