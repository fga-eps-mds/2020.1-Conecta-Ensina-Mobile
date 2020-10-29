import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
  },
}))`
  background-color: ${(props) => props.theme.colors.branco};
  width: 100%;
  height: 89%;
  border-radius: 20px;
  top: 0px;
  border: 4px solid ${(props) => props.theme.colors.fundoAzul};
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
  background-color: ${(props) => props.theme.colors.branco};
  display: flex;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.azulClaro};
  width: 138px;
  height: 31px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  align-self: center;
`;
