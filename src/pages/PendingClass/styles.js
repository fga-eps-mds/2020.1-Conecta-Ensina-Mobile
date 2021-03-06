import styled from 'styled-components/native';

export const ContainerVisualAula = styled.View`
  background-color: ${(props) => props.theme.colors.cinzaClaro};
  padding: 3%;
  width: 144px;
  height: 150px;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const ListaVisualAula = styled.FlatList`
  position: absolute;
  padding-bottom: 25%;
  align-self: center;
`;

export const ButtonVerMais = styled.TouchableOpacity`
  width: 100px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.fundoAzul};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ContainerButtons = styled.View`
  justify-content: space-around;
  align-self: center;
  flex-direction: row;
  height: 35px;
  width: 95px;
`;

export const ContainerTexto = styled.View`
  justify-content: flex-start;
  margin-bottom: 10px;
`;
