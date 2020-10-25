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

/*import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${(props) => props.theme.colors.branco};
    width: 100%;
    height: 89%;
    border-radius: 20px;
    position: absolute;
    top: 0px;
    align-items: center;
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

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.azulClaro};
  width: 138px;
  height: 31px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 460px;
  align-self: center;
`;
*/