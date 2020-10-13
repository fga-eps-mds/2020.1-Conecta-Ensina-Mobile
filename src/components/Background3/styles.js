import styled from 'styled-components/native';

export const BlueContainer = styled.View`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  align-items: center;
  flex: 1;
  width: 100%;
`;

export const WhiteContainer = styled.View`
  background-color: ${(props) => props.theme.colors.branco};
  align-items: center;
  height: 72%;
  width: 88.88%;
  border-radius: 20px;
  margin-top: 1.5%;
`;

export const Logo = styled.Image`
  width: 31.6%;
  height: 17.8%;
  margin-top: 1.25%;
`;
