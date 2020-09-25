import styled from 'styled-components';

export const BlueContainer = styled.View`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  flex: 0.7;
  justify-content: flex-end;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const WhiteContainer = styled.View`
  background-color: ${(props) => props.theme.colors.branco};
  justify-content: center;
  align-items: center;
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
`;

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.fundoAzul}
  justify-content: center;
  align-items: center;
  flex: 1;
`;
