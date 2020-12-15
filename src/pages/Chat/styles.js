import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.branco};
`;

export const Header = styled.View`
  height: 95px;
  background-color: ${(props) => props.theme.colors.fundoAzul};
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  color: ${(props) => props.theme.colors.branco};
  font-size: 18px;
`;

export const List = styled.FlatList``;

export const TextContainer = styled.TextInput`
  height: 40px;
  width: 240px;
  border-radius: 20px;
  margin-left: 12px;
  background-color: ${(props) => props.theme.colors.fundoAzul};
  color: white;
`;

export const SubmitContainer = styled.View`
  flex-direction: row;
  margin-bottom: 10%;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin-left: 35px;
  height: 40px;
  width: 75px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.fundoAzul};
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.branco};
  font-size: 14px;
`;
