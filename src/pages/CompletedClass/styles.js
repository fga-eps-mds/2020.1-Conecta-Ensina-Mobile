import styled from 'styled-components/native';

export const ContainerVisualAula = styled.ScrollView`
  background-color: ${(props) => props.theme.colors.cinzaClaro};
  width: 145px;
  height: 220px;
  border-radius: 10px;
  margin-left: 4%;
  margin-right: 4%;
  margin-top: 5%;
`;

export const ListaVisualAula = styled.FlatList`
  align-self: center;
  top: -7%;
`;

export const ButtonVerMais = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  width: 103px;
  height: 22.5px;
  border-radius: 5px;
  align-self: center;
  align-items: center;
  justify-content: center;
`;
