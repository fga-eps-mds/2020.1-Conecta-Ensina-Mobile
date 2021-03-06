import React, {useContext} from 'react';
import Theme from '../../../Theme';

import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
import ProfileFields from '../../components/ProfileFields';

import gradeResolver from '../../services/gradeResolver';

import {AuthContext} from '../../contexts/auth';

import {
  Container,
  InfoContainer,
  ContainerBotao,
  ButtonContainer,
} from './styles';

export default function TeacherProfile2({navigation}) {
  const {user, student, teacher, signOut} = useContext(AuthContext);
  let infoList = [
    {
      text: user && user.firstName ? user.firstName : 'Não informado',
      field: 'Nome',
    },
    {
      text: user && user.lastName ? user.lastName : 'Não informado',
      field: 'Sobrenome',
    },
    {
      text: user && user.email ? user.email : 'Não informado',
      field: 'Email',
    },
    {
      text: user && user.cellphone ? user.cellphone : 'Não informado',
      field: 'Celular',
    },
    {
      text: student && student.cep ? student.cep : 'Não informado',
      field: 'CEP',
    },
    {
      text: student && student.number ? student.number : 'Não informado',
      field: 'Número do endereço',
    },
    {
      text: student && student.details ? student.details : 'Não informado',
      field: 'Complemento do endereço',
    },
    {
      text: student && student.cpf ? student.cpf : 'Não informado',
      field: 'CPF',
    },
    {
      text:
        student && student.grade
          ? gradeResolver(student.grade)
          : 'Não informado',
      field: 'Grau de estudo',
    },
    {
      text:
        student && student.description ? student.description : 'Não informado',
      field: 'Descrição',
    },
    {
      text:
        student && student.institution ? student.institution : 'Não informado',
      field: 'Instituição de estudo',
    },
    {
      text: teacher && teacher.video ? teacher.video : 'Não informado',
      field: 'Vídeo',
    },
    {
      text:
        teacher && teacher.graduation_area
          ? teacher.graduation_area
          : 'Não informado',
      field: 'Área de gradução',
    },
    {
      text: teacher && teacher.degree ? teacher.degree : 'Não informado',
      field: 'Diploma',
    },
    {
      text: teacher && teacher.bank ? teacher.bank : 'Não informado',
      field: 'Banco',
    },
    {
      text: teacher && teacher.agency ? teacher.agency : 'Não informado',
      field: 'Agência',
    },
    {
      text: teacher && teacher.account ? teacher.account : 'Não informado',
      field: 'Conta',
    },
  ];
  return (
    <Theme>
      <Background1>
        <Container>
          <InfoContainer>
            {infoList.map((item, key) => (
              <ProfileFields key={key} field={item.field}>
                {item.text}
              </ProfileFields>
            ))}
          </InfoContainer>
        </Container>
        <ContainerBotao>
          <ButtonContainer
            testID="Editar"
            onPress={() => navigation.navigate('EditTeacher')}>
            <CustomText white bigSmall>
              Editar
            </CustomText>
          </ButtonContainer>
          <ButtonContainer testID="Sair" onPress={() => signOut()}>
            <CustomText white bigSmall>
              Sair
            </CustomText>
          </ButtonContainer>
        </ContainerBotao>
      </Background1>
    </Theme>
  );
}
