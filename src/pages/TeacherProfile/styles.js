import styled from 'styled-components/native';

export const ContainerB = styled.View`
  align-items: center;
  margin-bottom: 8.4%;
`;

export const ContainerW = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
`;

export const Icon = styled.Image`
  width: 52%;
  height: 63%;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 120px;
`;

export const UserContatiner = styled.View`
  width: 58px;
  height: 58px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.colors.branco};
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content:space-around;
  align-items: center;
  margin-left: 12.5%;
  margin-top: 2%;
`;

export const ComplainButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.vermelho};
  width: 138px;
  height: 31px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;