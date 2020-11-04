import React, {useState, useContext} from 'react';
import Theme from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import ContinuarContainer from '../../components/ContinuarContainer';
import {AuthContext} from '../../contexts/auth';
import Background1 from '../../components/Background1';
import {ListMaterias, Container} from './styles';

export default function Materias({navigation}) {
  const {Host} = useContext(AuthContext);

  const getMaterias = async () => {
    const fetchResponse = await fetch(`${Host}/api/subject/`);
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
          marginTop={{value: '100%'}}
          onPress={() => navigation.navigate('Filtros')}>
          Continuar
        </ContinuarContainer>
      </Background1>
    </Theme>
  );
}
