import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
  },
}))`
  width: 100%;
  height: 64.28%;
  margin-bottom: 5%;
`;

export const ContainerGrande = styled.View`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  width: 78%;
  height: 9%;
  margin-top: 8%;
  border-radius: 9px;
  justify-content: center;
  align-items: center;
`;

export const ContainerMedio = styled.View`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  width: 75%;
  height: 100%;
  border-radius: 9px;
  justify-content: center;
  align-items: center;
`;
export const ContainerPequeno = styled.View`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  width: 20%;
  height: 100%;
  border-radius: 9px;
  margin-right: 5%;
  align-items: center;
  justify-content: center;
`;
export const ContainerGrupo = styled.View`
  background-color: ${(props) => props.theme.colors.branco};
  display: flex;
  flex-direction: row;
  width: 78%;
  height: 9%;
  margin-top: 8%;
  align-items: center;
`;

export const ContainerButton = styled.View`
  justify-content: space-around;
  align-self: center;
  flex-direction: row;
  height: 45px;
  width: 90%;
`;

export const ButtonConfirmar = styled.TouchableOpacity`
  width: 150px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.verdeEscuro};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ButtonRecusar = styled.TouchableOpacity`
  width: 150px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.vermelho};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;
