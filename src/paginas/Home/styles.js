import styled from 'styled-components';

export const ListFiltro = styled.FlatList`
  padding-bottom: 500px;
  position: absolute;
  align-self: center;
`;

export const ButtonMarcarAula = styled.TouchableOpacity`
  margin-top: 27px;
  background-color: #184e79;
  width: 204px;
  height: 49px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonAulaUrgente = styled.TouchableOpacity`
  background-color: #e46270;
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

export const Icon = styled.Image`
  width: 36px;
  height: 30px;
`;
