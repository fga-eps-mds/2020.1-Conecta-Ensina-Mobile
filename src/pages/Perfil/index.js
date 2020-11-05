import React, {useContext, useState} from 'react';
import Theme from '../../../Theme';

import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
import RegField from '../../components/RegField';

import gradeResolver from '../../services/gradeResolver';

import {AuthContext} from '../../contexts/auth';

import {TextContainer, Container, InfoContainer, ButtonContainer} from './styles';

export default function Perfil() {
  const {user, student} = useContext(AuthContext);
  const [editar, setEditar] = useState(false);
  
  if(editar){
    return(
      <Theme>
      <Background1>
        <Container>
          <InfoContainer>
            <TextContainer>
              <RegField
                placeholder={user && user.firstName}
              />
            </TextContainer>
            <TextContainer>
              <RegField
                placeholder={user && user.lastName}
              />
            </TextContainer>
            <TextContainer>
              <RegField
                  placeholder={user && user.email}
                /> 
            </TextContainer>
            <TextContainer>
              <RegField
                  placeholder={user && user.cellphone}
                />
            </TextContainer>
            <TextContainer>
              <RegField
                  placeholder={student && student.cep}
                />
            </TextContainer>
            <TextContainer>
              <RegField
                    placeholder={student && student.number}
                  />
            </TextContainer>
            <TextContainer>
              <RegField
                    placeholder={student && student.details}
                  />
            </TextContainer>
            <TextContainer>
              <RegField
                    placeholder={student && student.cpf}
                  />
            </TextContainer>
            <TextContainer>
              <RegField
                    placeholder={student && student.description}
                  />
            </TextContainer>
            <TextContainer>
            <RegField
                  placeholder={student && student.institution}
                />
            </TextContainer>
            <TextContainer>
              <RegField
                    placeholder={student && gradeResolver(student.grade)}
                  />
            </TextContainer>
          </InfoContainer>
        </Container>
        <ButtonContainer onPress = {() => setEditar(false)}>
          <CustomText white bigSmall>
            salvar
          </CustomText>
        </ButtonContainer>
      </Background1>
    </Theme>
    );
  }
  else{
  return (
      <Theme>
        <Background1>
          <Container>
            <InfoContainer>
              <TextContainer>
                <CustomText white medium>
                  {user && user.firstName}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {user && user.lastName}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {user && user.email}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {user && user.cellphone}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {student && student.cep}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {student && student.number}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {student && student.details}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {student && student.cpf}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {student && student.description}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {student && student.institution}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white bigSmall>
                  {student && gradeResolver(student.grade)}
                </CustomText>
              </TextContainer>
            </InfoContainer>
          </Container>
          <ButtonContainer onPress = {() => setEditar(true)}>
            <CustomText white bigSmall>
              Editar
            </CustomText>
          </ButtonContainer>
        </Background1>
      </Theme>
    );
  }
}
