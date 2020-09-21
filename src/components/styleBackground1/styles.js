import styled from 'styled-components';

export const BlueContainer = styled.View`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  flex: 2;
  display: flex;
  justify-content: flex-end;
`;

export const WhiteContainer = styled.View`
  height: 500px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  border-radius: 20px;
`;
