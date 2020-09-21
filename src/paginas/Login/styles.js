import styled from 'styled-components';
import {ButtonGeral} from '../../components/buttonGeral/styles';

export const LoginContainer = styled.View`
  background-color: ${(props) => props.theme.colors.cinzaClaro};
  height: 230px;
  width: 300px;
  border-radius: 15px;
  position: absolute;
  align-self: center;
  top: 210px;
`;

export const ButtonAluno = styled(ButtonGeral)`
  margin-top: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Texto = styled.Text`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: #fff;
`;

export const ButtonProfessor = styled(ButtonGeral)`
  align-self: center;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
