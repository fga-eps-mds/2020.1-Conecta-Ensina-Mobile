import React from 'react';
import Theme from '../../../Theme';
import Background2 from '../../components/Background2';
import ContinueContainer from '../../components/ContinueContainer';
import RedContainerText from '../../components/RedContainerText';
import CustomTextContainer from '../../components/CustomTextContainer';
import {ContainerB, ContainerW, Icon, Logo, UserContatiner} from './styles';

export default function TeacherProfile({navigation}) {
  return (
    <Theme>
      <Background2
        blue={
          <ContainerB>
            <Logo source={require('../../assets/logo.png')} />
            <UserContatiner>
              <Icon source={require('../../assets/user_blue.png')} />
            </UserContatiner>
            <CustomTextContainer white smallMedium marginTop={{value: '14%'}}>
              João Marcelo da Silva
            </CustomTextContainer>
          </ContainerB>
        }
        white={
          <ContainerW>
            <CustomTextContainer
              black
              smallMedium
              marginTop={{value: '2%'}}
              marginBot={{value: '1%'}}>
              Disciplina
            </CustomTextContainer>
            <RedContainerText medium>Matemática</RedContainerText>
            <CustomTextContainer
              black
              smallMedium
              marginTop={{value: '2%'}}
              marginBot={{value: '1%'}}>
              Formação
            </CustomTextContainer>
            <RedContainerText medium>Mestre</RedContainerText>
            <CustomTextContainer
              black
              smallMedium
              marginTop={{value: '2%'}}
              marginBot={{value: '1%'}}>
              Universidade
            </CustomTextContainer>
            <RedContainerText medium>UCB</RedContainerText>
            <CustomTextContainer
              black
              smallMedium
              marginTop={{value: '2%'}}
              marginBot={{value: '1%'}}>
              Especialidade
            </CustomTextContainer>
            <RedContainerText>
              Ja fiz curso para lecionar para crianças dentro do espectro de
              deficit de atençao.
            </RedContainerText>
            <ContinueContainer onPress={() => navigation.push('PerfilProf')} />
          </ContainerW>
        }
      />
    </Theme>
  );
}
