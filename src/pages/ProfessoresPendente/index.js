import React, {useState} from 'react';
import Theme from '../../../Theme';
import SquareButton from '../../components/ContainerTeacher';

import Background4 from '../../components/Background4';
import {ListMaterias, Container} from './styles';

export default function ProfessoresPendentes({navigation}) {
  const getProfessorList = async () => {
    const fetchResponse = await fetch(
      'http://192.168.0.12:3333/api/students/status/0',
    );
    try {
      const data = await fetchResponse.json();
      console.log(data.data.student);
      setStudents(data.data.student);
      return data;
    } catch (error) {
      return error;
    }
  };

  const [students, setStudents] = useState(getProfessorList);

  return (
    <Theme>
      <Background4>
        <Container>
          <ListMaterias
            numColumns={2}
            data={students}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <SquareButton
                data={item}
                onPressProf={() => navigation.navigate('ConfirmaProf', {item})}
              />
            )}
          />
        </Container>
      </Background4>
    </Theme>
  );
}
