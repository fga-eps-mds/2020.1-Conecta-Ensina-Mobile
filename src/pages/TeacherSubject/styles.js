import styled from 'styled-components/native';

export const ListSubjects = styled.FlatList`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -5.7%;
  right: 0px;
  left: 0px;
  bottom: 13.3%;
  border-radius: 20px;
`;

export const ContainerButton = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10%;
`;

export const NextButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.azulClaro};
  width: 138px;
  height: 31px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;
