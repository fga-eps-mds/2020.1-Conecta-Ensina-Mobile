import styled from 'styled-components';

export const BlueContainer = styled.View`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  flex: 2;
  display: flex;
  justify-content: flex-end;
`;

export const WhiteContainer = styled.View`
  height: 380px;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

export const LoginContainer = styled.View`
  background-color: ${(props) => props.theme.colors.cinzaClaro};
  height: 230px;
  width: 300px;
  margin-top: 150px;
  align-self: center;
  position: absolute;
  top: 80px;
  border-radius: 15px;
`;

export const ButtonAluno = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  height: 45px;
  width: 200px;
  border-radius: 5px;
  align-self: center;
  margin-top: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Texto = styled.Text`
  font-family: ${(props) => props.theme.font};
  font-size: 24px;
  color: #fff;
`;

export const ButtonProfessor = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  height: 45px;
  width: 200px;
  border-radius: 5px;
  align-self: center;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
