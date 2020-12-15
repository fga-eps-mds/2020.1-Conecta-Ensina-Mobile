import React, {useContext} from 'react';
import Theme from '../../../Theme';
import SquareButton from '../../components/ContainerTeacher';
import {AdmContext} from '../../contexts/admin';
import Background4 from '../../components/Background4';
import {ListMaterias, Container} from './styles';

export default function ReportedUsers({navigation}) {
  const {reportedUsers, students, getProfessoUser} = useContext(AdmContext);

  console.log(students)

  async function handleSubmit({item}) {
    await getProfessoUser(item.id);
    console.log(item.id);
    navigation.navigate('TeacherConfirmation', {item});
  }

  return (
    <Theme>
      <Background4>
        <Container>
          <ListMaterias
            numColumns={2}
            data={reportedUsers}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              if (students) {
                return (
                  <SquareButton
                    data={students.User}
                    onPressProf={() => handleSubmit({item})}
                  />
                );
              }
            }}
          />
        </Container>
      </Background4>
    </Theme>
  );
}
