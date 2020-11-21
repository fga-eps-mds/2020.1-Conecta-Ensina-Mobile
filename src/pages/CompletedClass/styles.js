import styled from 'styled-components/native';

export const ContainerVisualAula = styled.ScrollView`
  background-color: ${(props) => props.theme.colors.cinzaClaro};
  width: 145px;
  height: 220px;
  border-radius: 10px;
  margin-bottom: 100px;
`;

export const ListaVisualAula = styled.FlatList`
  align-self: center;
  margin-bottom: 10px;
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
