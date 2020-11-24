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
  margin-top: 5.5%;
`;

export const ContainerTextBlue = styled.View`
  margin-top: 5%;
  padding-top: 1%;
  justify-content: center;
  flex: 0.8;
`;

export const ContainerFlex = styled.View`
  flex: 3;
  align-items: center;
  justify-content: center;
`;

export const ContainerButtons = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ComplainButton = styled.TouchableOpacity`
  width: 178px;
  height: 61px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.vermelho};
  align-items: center;
  justify-content: center;
`;
