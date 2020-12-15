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
  flex: 1;
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
