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

export const UserContainer = styled.TouchableOpacity`
  flex-direction: row-reverse;
  flex: 22;
  margin-left: 30px;
  align-items: center;
`;

export const TextoContainer = styled.View`
  margin-bottom: 40px;
  margin-right: 35px;
`;

export const UserAvatar = styled.TouchableOpacity`
  width: 58px;
  height: 58px;
  border-radius: 1000px;
  background-color: ${(props) => props.theme.colors.branco};
  margin-left: 40px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 33px;
  height: 38px;
`;

export const ContainerUpText = styled.TouchableOpacity`
  flex-direction: row-reverse;
  flex: 10;
  padding: 10%;
  margin-bottom: 5%;
  align-items: center;
`;
