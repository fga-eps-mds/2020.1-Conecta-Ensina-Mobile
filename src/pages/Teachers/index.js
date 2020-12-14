import React, {useState, useContext, useEffect} from 'react';
import {Alert} from 'react-native';
import Theme, {theme} from '../../../Theme';
import SquareButton from '../../components/ContainerStars';
import ContinueContainer from '../../components/ContinueContainer';
import {TeacherContext} from '../../contexts/teacher';
import Background1 from '../../components/Background1';
import {TeacherList, ContainerButtons} from './styles';

export default function Teachers({navigation, route}) {
  const {teacher, loadTeachers, getTeacher} = useContext(TeacherContext);
  const [selectedId, setSelectedId] = useState(null);

  console.log(teacher);

  useEffect(() => {
    if (teacher !== {}) {
      loadTeachers(route.params.subject);
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

            console.log(
              item.Student.User.firstName + ' ' + item.Student.User.lastName,
            );
            return (
              <SquareButton
                data={item}
                name={
                  item.Student.User.firstName + ' ' + item.Student.User.lastName
                }
                onPress={() => setSelectedId(item.id)}
                img={require('../../assets/user_blue.png')}
                styleContainer={{backgroundColor}}
                style={backgroundColor}
              />
            );
          }}
        />
        <ContainerButtons>
          <ContinueContainer
            testID="Continue"
            onPress={async () => {
              if (selectedId === null) {
                Alert.alert('Você deve selecionar um professor');
              } else {
                await getTeacher(selectedId);
                navigation.navigate('TeacherProfile', {selectedId});
              }
            }}
            marginTop={{value: '128%'}}
          />
        </ContainerButtons>
      </Background1>
    </Theme>
  );
}
