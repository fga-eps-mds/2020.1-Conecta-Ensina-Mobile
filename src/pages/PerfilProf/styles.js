import styled from 'styled-components';

export const BlackTextContainer = styled.View`
  margin-top: 17%;
  margin-bottom: 9.5%;
`;

export const ContainerB = styled.View`
  align-items: center;
  margin-bottom: 8.4%;
`;

export const ContainerW = styled.View`
  align-items: center;
  margin-bottom: 82%;
  justify-content: space-evenly;
  flex: 1;
`;

export const ContainerFooter = styled.View`
  align-items: center;
  position: absolute;
  justify-content: center;
  margin-top: 153%;
  width: 100%;
  margin-left: 25%;
  align-self: center;
`;

export const Icon = styled.Image`
  width: 52%;
  height: 63%;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 120px;
`;

export const MiniContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 50%;
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

export const WhiteTextContainer = styled.Text`
  padding-top: 14%;
`;
