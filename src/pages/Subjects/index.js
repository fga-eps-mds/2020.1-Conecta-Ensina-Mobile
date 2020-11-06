import React, {useState, useContext} from 'react';
import Theme, {theme} from '../../../Theme';
import {AuthContext} from '../../contexts/auth';
import {FiltersContext} from '../../contexts/filters';
import SquareButton from '../../components/SquareButton';
import ContinueContainer from '../../components/ContinueContainer';
import Background1 from '../../components/Background1';
import {ListSubjects, Container} from './styles';

export default function Subjects({route, navigation}) {
  const [selectedId, setSelectedId] = useState(null);
  const {params} = route.params;

  const {Host} = useContext(AuthContext);
  const {setSubjectFilter} = useContext(FiltersContext);

  const getSubjects = async () => {
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

  const renderItem = ({item}) => {
    const backgroundColor =
      item.id === selectedId ? theme.colors.azulClaro : theme.colors.cinzaClaro;
    return (
      <SquareButton
        data={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor}}
      />
    );
  };

  const [subjects, setSubjects] = useState(getSubjects);
  return (
    <Theme>
      <Background1 navigation={navigation} page={'Profile'}>
        <Container>
          <ListSubjects
            numColumns={3}
            data={subjects}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </Container>
        <ContinueContainer
          marginTop={{value: '127.5%'}}
          onPress={() => {
            setSubjectFilter(selectedId)
            navigation.navigate('Filters')}}
        />
      </Background1>
    </Theme>
  );
}
