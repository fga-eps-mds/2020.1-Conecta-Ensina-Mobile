import styled from 'styled-components/native';

export const Container = styled.View`
  width: 280px;
  height: 45px;
  background-color: ${(props) => props.theme.colors.fundoAzul};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
  margin-top: 5%;
`;

export const ContainerRow = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-left: ${(props) => props.size.left};
  padding-right: ${(props) => props.size.right};
`;
