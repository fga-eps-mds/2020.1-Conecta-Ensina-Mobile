import styled from 'styled-components';
import {ButtonGeral} from '../../components/ButtonGeral/styles';

export const LoginContainer = styled.View`
  background-color: ${(props) => props.theme.colors.cinzaClaro};
  height: 230px;
  width: 300px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const ButtonAluno = styled(ButtonGeral)`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Texto = styled.Text`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.branco};
`;

export const ButtonProfessor = styled(ButtonGeral)`
  align-self: center;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  align-items: center;
  margin-bottom: 300px;
`;

export const ButtonEntrar = styled(ButtonGeral)`
  align-items: center;
`;

export const Link = styled.TouchableOpacity`
  margin-bottom: 30px;
`;

export const LinkTexto = styled.Text`
  font-family: ${(props) => props.theme.font};
  font-size: 20px;
  color: ${(props) => props.theme.colors.branco};
  text-shadow: -1.5px 1.5px 4px #184e79;
`;

export const Logo = styled.Image`
  width: 201px;
  height: 208px;
  margin-bottom: 10px;
`;

export const UserConatiner = styled.View`
  width: 58px;
  height: 58px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.colors.fundoAzul};
  margin-bottom: 10px;
`;
