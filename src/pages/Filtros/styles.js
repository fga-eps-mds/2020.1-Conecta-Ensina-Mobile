import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  position: absolute;
  top: -30px;
  border: 4px solid ${(props) => props.theme.colors.fundoAzul};
  right: 0px;
  left: 0px;
  bottom: 70px;
`;

export const ContainerFiltros = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-right: 10px;
`;

export const DataButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  width: 290px;
  height: 50px;
  border-radius: 5px;
  align-self: center;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
`;

export const Texto = styled.Text`
  color: white;
  font-size: ${(props) => props.theme.fontSizes.smallMedium};
`;
