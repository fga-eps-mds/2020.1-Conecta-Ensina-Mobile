import styled from 'styled-components';
import {ButtonGeral} from '../../components/ButtonGeral/styles';

export const LoginContainer = styled.View`
  background-color: ${(props) => props.theme.colors.cinzaClaro};
  height: 230px;
  width: 300px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`;

export const ButtonAluno = styled(ButtonGeral)`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Texto = styled.Text`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSizes.smallMedium};
  color: ${(props) => props.theme.colors.branco};
`;

export const ButtonProfessor = styled(ButtonGeral)`
  align-self: center;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerW = styled.View`
  align-items: center;
  margin-bottom: 300px;
  justify-content: space-evenly;
  flex: 1;
`;

export const ButtonEntrar = styled(ButtonGeral)`
  align-items: center;
`;

export const ContainerB = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

export const UserContatiner = styled.View`
  width: 58px;
  height: 58px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.colors.branco};
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ContainerTexto = styled.Text`
  padding-top: 50px;
`;

export const LinkTexto = styled.Text`
  font-family: ${(props) => props.theme.font};
  font-size: 20px;
  color: ${(props) => props.theme.colors.branco};
  text-shadow: -1.5px 1.5px 4px #184e79;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 120px;
`;

export const Icon = styled.Image`
  width: 52%;
  height: 63%;
`;

export const MiniContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 50%;
`;

export const BlackTexto = styled.Text`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSizes.smallMedium};
  color: ${(props) => props.theme.colors.preto};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ContainerFooter = styled.View`
  align-items: center;
  position: absolute;
  justify-content: center;
  margin-top: 143%;
  width: 100%;
  margin-left: 25%;
  align-self: center;
`;
