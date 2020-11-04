import React, {useState, useContext, useEffect} from 'react';
import Theme, {theme} from '../../../Theme';
import SquareButton from '../../components/ContainerStars';
import ContinuarContainer from '../../components/ContinuarContainer';
import {AuthContext} from '../../contexts/auth';
import Background1 from '../../components/Background1';
import {TeacherList, Container} from './styles';

export default function Professores({navigation}) {
  const {Host} = useContext(AuthContext);
  const getTeachers = async () => {
    const fetchResponse = await fetch(`${Host}/api/teacher/`);
    try {
      const data = await fetchResponse.json();
      console.log(data.data.user);
      setTeachers(data.data.user);
      return data;
    } catch (error) {
      return error;
    }
  };

  const [teachers, setTeachers] = useState(getTeachers);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    console.log('selected teacher: ' + selectedId);
  }, [selectedId]);

  const renderItem = ({item}) => {
    const backgroundColor =
      item.id === selectedId ? theme.colors.azulClaro : theme.colors.cinzaClaro;
    return (
      <SquareButton
        data={item}
        onPress={() => setSelectedId(item.id)}
        img={require('../../assets/user_blue.png')}
        styleContainer={{backgroundColor}}
        style={backgroundColor}
      />
    );
  };

  return (
    <Theme>
      <Background1 navigation={navigation} page={'Perfil'}>
        <Container>
          <TeacherList
            numColumns={3}
            data={teachers}
            extraData={selectedId}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </Container>
        <ContinuarContainer
          onPress={() => navigation.navigate('PerfilProf', {selectedId})}
          marginTop={{value: '1%'}}>
          Continuar
        </ContinuarContainer>
      </Background1>
    </Theme>
  );
}
