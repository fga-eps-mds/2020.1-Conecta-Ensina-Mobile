import React, {useEffect, useContext, useState} from 'react';
import Theme from '../../../Theme';
import Background2 from '../../components/Background2';
import CustomTextContainer from '../../components/CustomTextContainer';
import {UserContext} from '../../contexts/user';
import {StudentContext} from '../../contexts/student';
import {RateContext} from '../../contexts/rate';
import gradeResolver from '../../services/gradeResolver';
import {ClassroomContext} from '../../contexts/classroom';
import {Rating} from 'react-native-ratings';
import {
  ContainerB,
  ContainerW,
  Icon,
  Logo,
  UserContainer,
  ContainerTextBlue,
  RedCommentContainer,
  SubmitReview,
  RatingContainer,
} from './styles';

export default function TeacherAvaliation({props, navigation}) {
  const {student} = useContext(StudentContext);
  const {user} = useContext(UserContext);
  const {createRate} = useContext(RateContext);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
 
  return (
    <Theme>
      <Background2
        blue={
          <ContainerB>
            <Logo source={require('../../assets/logo.png')} />
            <UserContainer>
              <Icon source={require('../../assets/user_blue.png')} />
            </UserContainer>
            <ContainerTextBlue>
              <CustomTextContainer white bigMedium marginTop={{value: '2%'}}>
                {user && user.firstName + ' ' + user.lastName}
              </CustomTextContainer>
              <CustomTextContainer white smallMedium marginTop={{value: '2%'}}>
                {student && gradeResolver(student.grade)}
              </CustomTextContainer>
            </ContainerTextBlue>
          </ContainerB>
        }
        white={
          <ContainerW>
            <RatingContainer>
              <Rating
                type="custom"
                ratingCount={5}
                onFinishRating={setRating}
              />
            </RatingContainer>
            <RedCommentContainer
              {...props}
              editable
              maxLength={280}
              multiline
              placeholder="Insira um comentário"
              onChangeText={(text) => setComment(text)}
              defaultValue={comment}
            />
            <SubmitReview
              onPress={() => {
                  createRate(comment, 2, rating);
                  navigation.navigate('Home');
              }}>
              <CustomTextContainer white medium>
                Enviar Avaliação
              </CustomTextContainer>
            </SubmitReview>
          </ContainerW>
        }
      />
    </Theme>
  );
}
