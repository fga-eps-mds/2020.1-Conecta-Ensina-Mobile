import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  border: 4px solid ${(props) => props.theme.colors.fundoAzul};
  border-radius: 20px;
`;

export const InfoContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
  },
}))`
  width: 100%;
  height: 64.28%;
`;

export const TextContainer = styled.View`
  height: 50px;
  width: 280px;
  border-radius: 9px;
  background-color: ${(props) => props.theme.colors.fundoAzul};
  justify-content: center;
  align-items: center;
`;

export const ContainerBotao = styled.View`
  align-items: center;
  justify-content: center;
  flex: 0.15;
`;

export const ButtonContainer = styled.TouchableOpacity`
  height: 50px;
  width: 280px;
  background-color: ${(props) => props.theme.colors.vermelho};
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
