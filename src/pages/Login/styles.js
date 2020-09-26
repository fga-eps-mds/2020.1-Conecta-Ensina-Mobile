import styled from 'styled-components';
import {ButtonGeral} from '../../components/ButtonGeral/styles';

export const LoginContainer = styled.View`
  background-color: ${(props) => props.theme.colors.cinzaClaro};
  height: 230px;
  width: 300px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin-top: 55.5%;
`;

export const ButtonAluno = styled(ButtonGeral)`
  margin-top: 11.2%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonProfessor = styled(ButtonGeral)`
  align-self: center;
  margin-top: 11.2%
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  align-items: center;
  margin-bottom: 83.5%;
`;

export const ButtonEntrar = styled(ButtonGeral)`
  align-items: center;
`;

export const Link = styled.TouchableOpacity`
  margin-bottom: 10%;
`;

export const LinkTexto = styled.Text`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSizes.smallMedium};
  color: ${(props) => props.theme.colors.branco};
  text-shadow: -1px 1px 8px ${(props) => props.theme.colors.fundoAzul};
`;

export const Logo = styled.Image`
  width: 50%;
  height: 76.5%;
  margin-bottom: 14%;
`;

export const UserContatiner = styled.View`
  width: 19.5%;
  height: 25.5%;
  border-radius: 100px;
  background-color: ${(props) => props.theme.colors.fundoAzul};
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  width: 52%;
  height: 63%;
`;
