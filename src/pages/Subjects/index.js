import React, {useState, useContext, useEffect} from 'react';
import {Alert} from 'react-native';
import Theme, {theme} from '../../../Theme';
import {SubjectContext} from '../../contexts/subject';
import SquareButton from '../../components/SquareButton';
import ContinueContainer from '../../components/ContinueContainer';
import Background1 from '../../components/Background1';
import {ListSubjects, Container, ContainerButton} from './styles';

export default function Subjects({navigation}) {
  const [selectedId, setSelectedId] = useState(null);

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
          <ContainerButton>
            <ContinueContainer
              testID="ContinueContainer"
              marginTop={{value: '23%'}}
              onPress={() => {
                if (selectedId === null) {
                  Alert.alert('Você deve selecionar uma disciplina');
                } else {
                  navigation.navigate('Filters', {selectedId});
                }
              }}
            />
          </ContainerButton>
        </Container>
      </Background1>
    </Theme>
  );
}
