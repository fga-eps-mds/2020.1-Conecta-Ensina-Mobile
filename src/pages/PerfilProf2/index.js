import React from 'react';
import Theme from '../../../Theme';

import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';

import gradeResolver from '../../services/gradeResolver';

import {TextContainer, Container, InfoContainer} from './styles';

export default class InfoProfessor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataIsReturned: false,
    };
    this.infoUser = null;
    this.infoStudent = null;
    this.infoTeacher = null;
  }

  async componentDidMount() {
    var ok = false;
    try {
      let response = await fetch(
        'http://192.168.15.15:3333/api/user/' + this.props.route.params.user.id,
      );
      let dataUser = await response.json();
      this.infoUser = dataUser;
      ok = true;
      console.log(this.infoUser);
      console.log('user');
    } catch (error) {
      console.error(error);
    }
    if (ok) {
      try {
        let response = await fetch(
          'http://192.168.15.15:3333/api/student/' +
            this.props.route.params.user.id,
        );
        let dataStudent = await response.json();
        this.infoStudent = dataStudent;
        console.log(this.infoStudent);
        console.log('student');
      } catch (error) {
        console.error(error);
      }
      try {
        let response = await fetch(
          'http://192.168.15.15:3333/api/teacher/' +
            this.props.route.params.user.id,
        );
        let dataTeacher = await response.json();
        this.infoTeacher = dataTeacher;
        this.setState({dataIsReturned: true});
        console.log(this.infoTeacher);
        console.log('teacher');
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
              <TextContainer>
                <CustomText white bigSmall>
                  {this.infoStudent.data.student.video}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {this.infoTeacher.data.teacher.graduation_area}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {this.infoTeacher.data.teacher.degree}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {this.infoTeacher.data.teacher.bank}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {this.infoTeacher.data.teacher.ageny}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {this.infoTeacher.data.teacher.account}
                </CustomText>
              </TextContainer>
            </InfoContainer>
          </Container>
        </Background1>
      </Theme>
    ) : (
      <Background1 />
    );
  }
}
