import React, {useState} from 'react';
import Theme, {theme} from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import ButtonContinuar from '../../components/ButtonContinuar';

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
      <Background1 navigation={navigation}>
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
        <ButtonContinuar onPress={() => navigation.navigate('Filtros')}>
          Continuar
        </ButtonContinuar>
      </Background1>
    </Theme>
  );
}
