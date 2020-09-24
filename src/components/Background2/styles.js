import styled from 'styled-components';

export const BlueContainer = styled.View`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  flex: 1;
  justify-content: flex-end;
`;

export const WhiteContainer = styled.View`
  background-color: ${(props) => props.theme.colors.branco};
  justify-content: center;
  align-items: center;
  flex: 0.6;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
