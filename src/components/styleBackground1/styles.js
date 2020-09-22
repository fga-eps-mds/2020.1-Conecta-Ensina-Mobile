import styled from 'styled-components';

export const BlueContainer = styled.View`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const WhiteContainer = styled.View`
  background-color: #fff;
  flex: 1;
  display: flex;
  justify-content: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Usercontainer = styled.View`
  flex-direction: row-reverse;
  margin-bottom: 75px;
  margin-top: 10px;
  align-items: center;
`;

export const UserTexto = styled.Text`
  font-size: 25px;
  color: #ffffff;
`;

export const UserAvatar = styled.View`
  width: 58px;
  height: 58px;
  border-radius: 1000px;
  background-color: #ffffff;
  margin-left: 30px;
  margin-right: 10px;
`;

