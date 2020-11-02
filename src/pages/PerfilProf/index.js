import React from 'react';
import Theme from '../../../Theme';
import Background2 from '../../components/Background2';
import ContainerVoltar from '../../components/ContainerVoltar';
import RedContainerTextBig from '../../components/RedContainerTextBig';
import RedContainerTextMedium from '../../components/RedContainerTextMedium';
import CustomText from '../../components/CustomText';
import {
  BlackTextContainer,
  ContainerB,
  ContainerFooter,
  ContainerW,
  Icon,
  Logo,
  MiniContainer,
  UserContatiner,
  WhiteTextContainer,
} from './styles';

export default function PerfilProf() {
  return (
    <Theme>
      <Background2
        blue={
          <ContainerB>
            <Logo source={require('../../assets/logo.png')} />
            <UserContatiner>
              <Icon source={require('../../assets/user_blue.png')} />
            </UserContatiner>
            <WhiteTextContainer>
              <CustomText white smallMedium>
                João Marcelo da Silva
              </CustomText>
            </WhiteTextContainer>
          </ContainerB>
        }
        white={
          <ContainerW>
            <MiniContainer>
              <BlackTextContainer>
                <CustomText black smallMedium>
                  Disciplina
                </CustomText>
              </BlackTextContainer>
            </MiniContainer>
            <MiniContainer>
              <RedContainerTextMedium>Matemática</RedContainerTextMedium>
            </MiniContainer>
            <MiniContainer>
              <BlackTextContainer>
                <CustomText black smallMedium>
                  Formação
                </CustomText>
              </BlackTextContainer>
            </MiniContainer>
            <MiniContainer>
              <RedContainerTextMedium>Mestre</RedContainerTextMedium>
            </MiniContainer>
            <MiniContainer>
              <BlackTextContainer>
                <CustomText black smallMedium>
                  Universidade
                </CustomText>
              </BlackTextContainer>
            </MiniContainer>
            <MiniContainer>
              <RedContainerTextMedium>UCB</RedContainerTextMedium>
            </MiniContainer>
            <MiniContainer>
              <BlackTextContainer>
                <CustomText black smallMedium>
                  Especialidade
                </CustomText>
              </BlackTextContainer>
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
