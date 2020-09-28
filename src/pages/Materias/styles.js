import styled from 'styled-components/native';
export const ListMaterias = styled.FlatList`
  align-self: center;
  left: 2.8%;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  position: absolute;
  top: -5.7%;
  border: 4px solid ${(props) => props.theme.colors.fundoAzul};
  right: 0px;
  left: 0px;
  bottom: 13.3%
  border-radius: 20px;
`;
