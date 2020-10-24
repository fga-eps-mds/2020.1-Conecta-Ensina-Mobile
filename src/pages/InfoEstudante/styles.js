import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  position: absolute;
  top: -5.7%;
  border: 4px solid ${(props) => props.theme.colors.fundoAzul};
  right: 0px;
  left: 0px;
  bottom: 13.3%;
  border-radius: 20px;
`;

export const InfoContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
  },
}))`
  width: 100%;
  height: 64.28%;
  margin-top: 7.6%;
`;

export const TextContainer = styled.View`
  height: 50px;
  width: 280px;
  border-radius: 9px;
  background-color: ${(props) => props.theme.colors.fundoAzul};
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const ContainerFooter = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 115%;
  margin-left: 5%;
`;
