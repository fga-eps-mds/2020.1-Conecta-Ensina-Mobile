import styled from 'styled-components/native';

export const ContainerB = styled.View`
  align-items: center;
  margin-bottom: 8.4%;
  flex: 1;
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
  flex: 2;
`;

export const UserContainer = styled.View`
  width: 58px;
  height: 58px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.colors.branco};
  align-items: center;
  justify-content: center;
  margin-top: 5.5%;
  flex: 1.2;
`;
export const ContainerTextBlue = styled.View`
  margin-top: 5%;
  padding-top: 1%;
  justify-content: center;
  flex: 0.8;
`;
export const ContainerTextBox = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 0.8;
`;

export const ContainerWUpper = styled.View`
  flex: 1;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: 10%;
  margin: 3%;
`;

export const ContainerWLower = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 3%;
  margin: 5%;
`;

export const StartButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.verdeClaro};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 118px;
  height: 37px;
  margin: 1%;
`;

export const ChatButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.azulClaro};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 93px;
  height: 37px;
  margin: 1%;
`;

export const RouteButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.azulClaro};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 93px;
  height: 37px;
  margin: 1%;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  flex: 1;
  padding: 2%;
`;
