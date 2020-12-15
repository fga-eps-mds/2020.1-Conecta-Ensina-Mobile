import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  border: 4px solid ${(props) => props.theme.colors.fundoAzul};
  right: 0px;
  left: 0px;
  border-radius: 20px;
  height: 100px;
`;

export const InfoContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
  },
}))`
  flex: 1;
  width: 100%;
`;

export const ButtonContainer = styled.TouchableOpacity`
  height: 50px;
  width: 140px;
  background-color: ${(props) => props.theme.colors.vermelho};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
export const ContainerBotao = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex: 0.15;
`;
