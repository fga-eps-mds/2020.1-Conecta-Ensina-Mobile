import styled from 'styled-components';

export const ListFiltro = styled.FlatList`
  padding-bottom: 500px;
  position: absolute;
  align-self: center;
`;

export const ButtonMarcarAula = styled.TouchableOpacity`
  margin-top: 27px;
  background-color: #184E79;
  width: 204px;
  height: 49px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonAulaUrgente = styled.TouchableOpacity`
  background-color: #E46270;
  width: 204px;
  height: 49px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ContainerButtons = styled.View`
  height: 125px;
  align-items: center;
  justify-content: center;
`;

export const Texto = styled.Text`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.branco};
`;

export const Icon = styled.Image`
  width: 36px;
  height: 30px;
`;