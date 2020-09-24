import styled from 'styled-components';
export const ListMaterias = styled.FlatList`
  align-self: center;
  left: 9px;
  right: 17px;
`;

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
