import styled from 'styled-components/native';

export const ListFuncoes = styled.FlatList`
  padding-bottom: 120%;
  position: absolute;
  align-self: center;
  flex-direction: row;
`;

export const ContainerButton = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column-reverse;
  margin-bottom: 10%;
`;

export const SignOut = styled.TouchableOpacity`
  justify-content: center;
  background-color: ${(props) => props.theme.colors.vermelho};
  height: 30px;
  width: 80%;
  border-radius: 10px;
`;
