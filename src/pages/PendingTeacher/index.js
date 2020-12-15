import React, {useContext} from 'react';
import Theme from '../../../Theme';
import SquareButton from '../../components/ContainerTeacher';
import {AdmContext} from '../../contexts/admin';
import Background4 from '../../components/Background4';
import {ListMaterias, Container} from './styles';

export default function PendingTeacher({navigation}) {
  const {pendingUsers, students, getProfessoUser} = useContext(AdmContext);

  async function handleSubmit({item}) {
    await getProfessoUser(item.id);
    navigation.navigate('TeacherConfirmation', {item});
  }

  return (
    <Theme>
      <Background4>
        <Container>
          {students && pendingUsers && (
            <ListMaterias
              numColumns={2}
              data={pendingUsers}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => {
                if (students !== null) {
                  return (
                    <SquareButton
                      data={students.User}
                      onPressProf={() => handleSubmit({item})}
                    />
                  );
                }
              }}
            />
          )}
        </Container>
      </Background4>
    </Theme>
  );
}
