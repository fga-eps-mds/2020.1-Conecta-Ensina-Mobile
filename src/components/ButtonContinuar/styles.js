import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.azulClaro};
  width: 138px;
  height: 31px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 440px;
  align-self: center;
`;
export const Texto = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.bigSmall};
  color: ${(props) => props.theme.colors.branco};
`;
