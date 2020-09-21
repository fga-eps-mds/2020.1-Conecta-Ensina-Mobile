import styled from 'styled-components';

export const BlueContainer = styled.View`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const WhiteContainer = styled.View`
  height: 500px;
  background-color: #fff;
  flex: 0.8px;
  display: flex;
  justify-content: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
