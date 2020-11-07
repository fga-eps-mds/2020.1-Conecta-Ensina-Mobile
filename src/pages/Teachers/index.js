import React, {useState, useContext, useEffect} from 'react';
import Theme, {theme} from '../../../Theme';
import SquareButton from '../../components/ContainerStars';
import ContinueContainer from '../../components/ContinueContainer';
import {TeacherContext} from '../../contexts/teacher';
import Background1 from '../../components/Background1';
import {TeacherList} from './styles';

export default function Teachers({navigation}) {
  const {teacher, loadTeachers} = useContext(TeacherContext);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (teacher !== {}) {
      loadTeachers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('selected teacher: ' + selectedId);
  }, [selectedId]);

  return (
    <Theme>
      <Background1 navigation={navigation} page={'Profile'}>
        <TeacherList
          numColumns={3}
          data={teacher}
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
                img={require('../../assets/user_blue.png')}
                styleContainer={{backgroundColor}}
                style={backgroundColor}
              />
            );
          }}
        />
        <ContinueContainer
          onPress={() => navigation.navigate('TeacherProfile', {selectedId})}
          marginTop={{value: '128%'}}
        />
      </Background1>
    </Theme>
  );
}
