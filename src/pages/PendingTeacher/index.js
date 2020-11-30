import React, {useContext} from 'react';
import Theme from '../../../Theme';
import SquareButton from '../../components/ContainerTeacher';
import {AdmContext} from '../../contexts/admin';
import Background4 from '../../components/Background4';
import {ListMaterias, Container} from './styles';

export default function PendingTeacher({navigation}) {
  const {usersAdmin, students, getProfessoUser} = useContext(AdmContext);

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
            data={students}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              if (usersAdmin !== null) {
                return (
                  <SquareButton
                    data={usersAdmin.user}
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
