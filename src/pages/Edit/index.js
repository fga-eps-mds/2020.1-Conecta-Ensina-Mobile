import React, {useContext} from 'react';
import Theme from '../../../Theme';

import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
import RegField from '../../components/RegField';

import gradeResolver from '../../services/gradeResolver';

import {AuthContext} from '../../contexts/auth';

import {
  TextContainer,
  Container,
  InfoContainer,
  ButtonContainer,
} from './styles';

export default function Edit({navigation}) {
  const {user, student} = useContext(AuthContext);
  return (
    <Theme>
      <Background1>
        <Container>
          <InfoContainer>
            <TextContainer>
              <RegField placeholder={user && user.firstName} />
            </TextContainer>
            <TextContainer>
              <RegField placeholder={user && user.lastName} />
            </TextContainer>
            <TextContainer>
              <RegField placeholder={user && user.email} />
            </TextContainer>
            <TextContainer>
              <RegField placeholder={user && user.cellphone} />
            </TextContainer>
            <TextContainer>
              <RegField placeholder={student && student.cep} />
            </TextContainer>
            <TextContainer>
              <RegField placeholder={student && student.number.toString()} />
            </TextContainer>
            <TextContainer>
              <RegField placeholder={student && student.details} />
            </TextContainer>
            <TextContainer>
              <RegField placeholder={student && student.cpf} />
            </TextContainer>
            <TextContainer>
              <RegField placeholder={student && student.description} />
            </TextContainer>
            <TextContainer>
              <RegField placeholder={student && student.institution} />
            </TextContainer>
            <TextContainer>
              <RegField placeholder={student && gradeResolver(student.grade)} />
            </TextContainer>
          </InfoContainer>
        </Container>
        <ButtonContainer onPress={() => navigation.navigate('Perfil')}>
          <CustomText white bigSmall>
            Salvar
          </CustomText>
        </ButtonContainer>
      </Background1>
    </Theme>
  );
}