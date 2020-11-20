import styled from 'styled-components/native';

export const ContainerVisualAula = styled.View`
  background-color: ${(props) => props.theme.colors.cinzaClaro};
  padding: 3%;
  width: 144px;
  height: 223px;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const ListaVisualAula = styled.FlatList`
  padding-bottom: 25%;
  align-self: center;
`;

export const ButtonVerMais = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  width: 103px;
  height: 22.5px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const ContainerButtons = styled.View`
  justify-content: space-around;
  align-self: center;
  flex-direction: row;
`;

export const ContainerTexto = styled.View`
  justify-content: flex-start;
  margin-bottom: 10px;
`;
