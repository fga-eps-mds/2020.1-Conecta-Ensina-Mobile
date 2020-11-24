import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  width: 100%;
  margin-bottom: 5%;
  flex: 1;
`;

export const InfoContainer = styled.View`
  align-items: center;
  width: 100%;
  flex: 1;
  margin-bottom: 90%;
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

export const ContainerComplain = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 8%;
`;

export const ComplainButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.vermelho};
  width: 138px;
  height: 31px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  align-self: center;
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
