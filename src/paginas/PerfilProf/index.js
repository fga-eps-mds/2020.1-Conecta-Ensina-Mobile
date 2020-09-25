import React from 'react';
import Theme from '../../../Theme';
import Background2 from '../../components/Background2';
import ContainerVoltar from '../../components/ContainerVoltar';
import RedContainerTextBig from '../../components/RedContainerTextBig';
import RedContainerTextMedium from '../../components/RedContainerTextMedium';
import {
  Texto,
  BlackTexto,
  ContainerW,
  ContainerB,
  Logo,
  UserContatiner,
  ContainerTexto,
  Icon,
  MiniContainer,
  ContainerFooter,
} from './styles';

export default function Login() {
  return (
    <Theme>
      <Background2
        blue={
          <ContainerB>
            <Logo source={require('../../assets/logo.png')} />
            <UserContatiner>
              <Icon source={require('../../assets/user_blue.png')} />
            </UserContatiner>
            <ContainerTexto>
              <Texto>João Marcelo da Silva</Texto>
            </ContainerTexto>
          </ContainerB>
        }
        white={
          <ContainerW>
            <MiniContainer>
              <BlackTexto>Disciplina</BlackTexto>
            </MiniContainer>
            <MiniContainer>
              <RedContainerTextMedium>Matemática</RedContainerTextMedium>
            </MiniContainer>
            <MiniContainer>
              <BlackTexto>Formação</BlackTexto>
            </MiniContainer>
            <MiniContainer>
              <RedContainerTextMedium>Mestre</RedContainerTextMedium>
            </MiniContainer>
            <MiniContainer>
              <BlackTexto>Universidade</BlackTexto>
            </MiniContainer>
            <MiniContainer>
              <RedContainerTextMedium>UCB</RedContainerTextMedium>
            </MiniContainer>
            <MiniContainer>
              <BlackTexto>Especialidade</BlackTexto>
            </MiniContainer>
            <MiniContainer>
              <RedContainerTextBig>
                Ja fiz curso para lecionar para crianças dentro do espectro de
                deficit de atençao.
              </RedContainerTextBig>
            </MiniContainer>
            <ContainerFooter>
              <ContainerVoltar>Agendar</ContainerVoltar>
            </ContainerFooter>
          </ContainerW>
        }
      />
    </Theme>
  );
}
