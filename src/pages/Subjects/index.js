import React, {useState, useContext, useEffect} from 'react';
import Theme, {theme} from '../../../Theme';
import {FiltersContext} from '../../contexts/filters';
import {SubjectContext} from '../../contexts/subject';
import SquareButton from '../../components/SquareButton';
import ContinueContainer from '../../components/ContinueContainer';
import Background1 from '../../components/Background1';
import {ListSubjects, Container} from './styles';

export default function Subjects({route, navigation}) {
  const [selectedId, setSelectedId] = useState(null);

  const {setSubjectFilter} = useContext(FiltersContext);
  const {subject, loadSubjects} = useContext(SubjectContext);

  useEffect(() => {
    if (subject !== {}) {
      loadSubjects();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Theme>
      <Background1 navigation={navigation} page={'Profile'}>
        <Container>
          <ListSubjects
            numColumns={3}
            data={subject}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              const backgroundColor =
                item.id === selectedId
                  ? theme.colors.azulClaro
                  : theme.colors.cinzaClaro;
              return (
                <SquareButton
                  data={item}
                  onPress={() => setSelectedId(item.id)}
                  style={{backgroundColor}}
                />
              );
            }}
          />
        </Container>
        <ContinueContainer
          marginTop={{value: '127.5%'}}
          onPress={() => {
            setSubjectFilter(selectedId);
            navigation.navigate('Filters');
          }}
        />
      </Background1>
    </Theme>
  );
}
