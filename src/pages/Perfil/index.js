import React from 'react';
import Theme from '../../../Theme';

import Background1 from '../../components/Background1';
import ContainerVoltar from '../../components/ContainerVoltar';
import CustomText from '../../components/CustomText';

import gradeResolver from '../../services/gradeResolver';

import {
  TextContainer,
  Container,
  ContainerFooter,
  InfoContainer,
} from './styles';

export default class InfoEstudante extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataIsReturned: false,
    };
    this.infoUser = null;
    this.infoStudent = null;
  }

  async componentDidMount() {
    var ok = false;
    try {
      let response = await fetch(
        'http://192.168.0.157:3333/api/user/3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
      );
      let dataUser = await response.json();
      this.infoUser = dataUser;
      ok = true;
      console.log(this.infoUser);
    } catch (error) {
      console.error(error);
    }
    if (ok) {
      try {
        let response = await fetch(
          'http://192.168.0.157:3333/api/student/3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        );
        let dataUser = await response.json();
        this.infoStudent = dataUser;
        this.setState({dataIsReturned: true});
        console.log(this.infoStudent);
      } catch (error) {
        console.error(error);
      }
    }
  }

  render() {
    return this.state.dataIsReturned ? (
      <Theme>
        <Background1>
          <Container>
            <InfoContainer>
              <TextContainer>
                <CustomText white medium>
                  {this.infoUser.data.user.firstName}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {this.infoUser.data.user.lastName}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {this.infoUser.data.user.email}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {this.infoUser.data.user.cellphone}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {this.infoStudent.data.student.cep}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {this.infoStudent.data.student.number}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {this.infoStudent.data.student.details}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {this.infoStudent.data.student.cpf}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {this.infoStudent.data.student.description}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {this.infoStudent.data.student.institution}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white bigSmall>
                  {gradeResolver(this.infoStudent.data.student.grade)}
                </CustomText>
              </TextContainer>
            </InfoContainer>
          </Container>
          <ContainerFooter>
            <ContainerVoltar />
          </ContainerFooter>
        </Background1>
      </Theme>
    ) : (
      <Background1 />
    );
  }
}

/*
import React, {useState} from 'react'; 
import Theme, {theme} from '../../../Theme';
import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
import { Text, SafeAreaView, View} from 'react-native';
import { Container, ContainerGrande, ContainerMedio, ContainerPequeno, ContainerGrupo, Button } from './styles';
import { ButtonGeral } from '../../components/ButtonGeral/styles';
 
export default function Perfil({route, navigation}){

  const {item} = route.params;

  const getPerfil = async () => {
    const fetchResponse = await fetch(
      'http://192.168.0.157:3333/api/users/'+item.id,
    );
    try {
      const data = await fetchResponse.json();
      console.log(data.data.user);
      setPerfil(data.data.user);
      return data;
    } catch (error) {
      return error;
    }
  };
  
  const [perfil, setPerfil] = useState(getPerfil);


    return (
        <Theme>
            <Background1>
              <Container>
                  <ContainerGrande>
                    <CustomText white>
                      Nome
                    </CustomText>
                  </ContainerGrande>
                  <ContainerGrande>
                  <CustomText white>
                      Sobrenome
                    </CustomText>
                  </ContainerGrande>
                 <ContainerGrande>
                 <CustomText white>
                      Email
                    </CustomText>
                  </ContainerGrande>
                  <ContainerGrande>
                  <CustomText white>
                      Senha
                    </CustomText>
                  </ContainerGrande>
                  <ContainerGrupo>
                    <ContainerPequeno>
                    <CustomText white>
                      Serie
                    </CustomText>
                    </ContainerPequeno>
                    <ContainerMedio>
                    <CustomText white>
                      Escola
                    </CustomText>
                    </ContainerMedio>
                  </ContainerGrupo>
                  <ContainerGrupo>
                    <ContainerPequeno>
                    <CustomText white>
                      Adulto
                    </CustomText>
                    </ContainerPequeno>
                    <ContainerMedio>
                    <CustomText white>
                      CPF
                    </CustomText>
                    </ContainerMedio>
                  </ContainerGrupo>
                </Container>
                <Button onPress={() => navigation.navigate('ProfessoresPendente')}>
                  <CustomText white bigSmall>
                    Voltar
                 </CustomText>           
                </Button>
            </Background1>
        </Theme>
    );

}
*/