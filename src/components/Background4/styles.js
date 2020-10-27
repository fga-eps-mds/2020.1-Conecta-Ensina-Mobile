import styled from 'styled-components/native';

export const BlueContainer = styled.View`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const WhiteContainer = styled.View`
  background-color: ${(props) => props.theme.colors.branco};
  flex: 78;
  display: flex;
  justify-content: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const UserContainer = styled.View`
  flex-direction: row-reverse;
  flex: 10;
  margin-left: 30px;
  align-items: center;
`;
