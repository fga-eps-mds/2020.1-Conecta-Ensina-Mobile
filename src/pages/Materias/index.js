import React, {useState} from 'react';
import Theme, {theme} from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import ContinuarContainer from '../../components/ContinuarContainer';

import Background1 from '../../components/Background1';
import {ListMaterias, Container} from './styles';

export default function Materias({navigation}) {
  const getMaterias = async () => {
    const fetchResponse = await fetch('http://192.168.0.157:3333/api/subject/');
    try {
      const data = await fetchResponse.json();
      console.log(data.data.subject);
      setSubjects(data.data.subject);
      return data;
    } catch (error) {
      return error;
    }
  };

  const [subjects, setSubjects] = useState(getMaterias);
  return (
    <Theme>
      <Background1 navigation={navigation} page={'Perfil'}>
        <Container>
          <ListMaterias
            numColumns={3}
            data={subjects}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <SquareButton
                onPress={() => navigation.navigate('Filtros')}
                data={item}
                img={require('../../assets/books.png')}
              />
            )}
          />
        </Container>
        <ContinuarContainer
          marginTop={{value: '127.5%'}}
          onPress={() => navigation.navigate('Filtros')}>
          Continuar
        </ContinuarContainer>
      </Background1>
    </Theme>
  );
}
