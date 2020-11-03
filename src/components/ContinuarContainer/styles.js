import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.marginTop ? props.marginTop.value : 0)};
`;

export const ButtonContinuar = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.azulClaro};
  width: 138px;
  height: 31px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;
