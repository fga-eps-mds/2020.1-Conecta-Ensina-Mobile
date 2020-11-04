import React, {useState, useContext, useEffect} from 'react';
import Theme, {theme} from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import ContinuarContainer from '../../components/ContinuarContainer';
import {AuthContext} from '../../contexts/auth';
import {SubjectContext} from '../../contexts/subject';
import Background1 from '../../components/Background1';
import {ListMaterias, Container} from './styles';

export default function Materias({navigation}) {
  const {Host} = useContext(AuthContext);
  const {subject, getSubjects} = useContext(SubjectContext);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    getSubjects();
  }, []);

  const renderItem = ({item}) => {
    const backgroundColor =
      item.id === selectedId ? theme.colors.azulClaro : theme.colors.cinzaClaro;
    return (
      <SquareButton
        data={item}
        onPress={() => setSelectedId(item.id)}
        img={require('../../assets/books.png')}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <Theme>
      <Background1 navigation={navigation} page={'Perfil'}>
        <Container>
          <ListMaterias
            numColumns={3}
            data={subject}
            keyExtractor={(item) => item.id}
            renderItem={
              renderItem /*({item}) => (
              <SquareButton
                onPress={() => navigation.navigate('Filtros')}
                data={item}
                img={require('../../assets/books.png')}
              />*/
            }
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
