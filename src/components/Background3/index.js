import React, {useContext} from 'react';
import {BlueContainer, WhiteContainer, Logo, ButtonRegistrar} from './styles';
import CustomText from '../CustomText';
import Theme from '../../../Theme';
import {SubjectContext} from '../../contexts/subject';

export default function Background3({children, navigation, student}) {
  const {loadSubjects} = useContext(SubjectContext);
  return (
    <Theme>
      <BlueContainer>
        <Logo source={require('../../assets/logo.png')} />
        <WhiteContainer>{children}</WhiteContainer>
        {student && (
          <ButtonRegistrar
            testID="buttonRegistrar"
            onPress={async () => {
              await loadSubjects();
              navigation.navigate('TeacherSubject');
            }}>
            <CustomText white small>
              Seja Professor
            </CustomText>
          </ButtonRegistrar>
        )}
      </BlueContainer>
    </Theme>
  );
}
