import styled from 'styled-components';

export const RedContainer = styled.View`
  background-color: ${(props) => props.theme.colors.vermelho};
  height: 60px;
  width: 280px;
  border-radius: 15px;
  justify-content: flex-start;
  align-items: center;
`;

export const ContainerTexto = styled.View`
  padding-top: 4px;
  padding-left: 10px;
`;
