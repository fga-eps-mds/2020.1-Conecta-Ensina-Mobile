import React, {useContext, useEffect, useState} from 'react';
import Theme from '../../../Theme';
import Background2 from '../../components/Background2';
import CustomTextContainer from '../../components/CustomTextContainer';
import gradeResolver from '../../services/gradeResolver';
import {
  ContainerB,
  ContainerW,
  Icon,
  Logo,
  UserContatiner,
  ContainerTextBlue,
  ContainerFlex,
  ContainerButtons,
  ComplainButton,
} from './styles';
import {StudentContext} from '../../contexts/student';
import CommentaryBox from '../../components/CommentaryBox';
import CustomText from '../../components/CustomText';
import {ComplainContext} from '../../contexts/complain';

export default function FeedbackTeacher({navigation, route}) {
  const {student} = useContext(StudentContext);
  const {createComplain} = useContext(ComplainContext);
  const [commentary, setCommentary] = useState('');

  async function handleComplain() {
    await createComplain(commentary, student.user.id);
    navigation.navigate('Teachers');
  }

  useEffect(() => {
    console.log(route.params);
    console.log(student);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Theme>
      <Background2
        blue={
          <ContainerB>
            <Logo source={require('../../assets/logo.png')} />
            <UserContatiner>
              <Icon source={require('../../assets/user_blue.png')} />
            </UserContatiner>
            <ContainerTextBlue>
              <CustomTextContainer white bigMedium marginTop={{value: '2%'}}>
                {student && student.user.firstName}
              </CustomTextContainer>
              <CustomTextContainer white smallMedium marginTop={{value: '-1%'}}>
                {student && gradeResolver(student.student.grade)}
              </CustomTextContainer>
            </ContainerTextBlue>
          </ContainerB>
        }
        white={
          <ContainerW>
            <CustomTextContainer
              black
              medium
              marginTop={{value: '2%'}}
              marginBot={{value: '-2%'}}>
              Denuncia
            </CustomTextContainer>
            <ContainerFlex>
              <CommentaryBox
                placeholder={'insira um comentário'}
                value={commentary}
                onChangeText={(text) => setCommentary(text)}
              />
            </ContainerFlex>
            <ContainerButtons>
              <ComplainButton testID="SendComplain" onPress={handleComplain}>
                <CustomText white smallMedium>
                  Enviar denuncia
                </CustomText>
              </ComplainButton>
            </ContainerButtons>
          </ContainerW>
        }
      />
    </Theme>
  );
}
