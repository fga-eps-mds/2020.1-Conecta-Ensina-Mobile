import styled from 'styled-components';

export const BlueContainer = styled.View`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  flex: 5;
  display: flex;
  justify-content: flex-end;
`;

export const WhiteContainer = styled.View`
  flex: 7;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
