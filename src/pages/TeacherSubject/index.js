import React, {useState, useContext, useEffect} from 'react';
import {Alert} from 'react-native';
import Theme, {theme} from '../../../Theme';
import Background1 from '../../components/Background1';
import {ListSubjects, Container, ContainerButton, NextButton} from './styles';
import SquareButton from '../../components/SquareButton';
import {SubjectContext} from '../../contexts/subject';
import CustomText from '../../components/CustomText';

export default function TeacherSubject({navigation}) {
  const [selectedId, setSelectedId] = useState(null);
  const [listButtons] = useState([]);
  const [selectedButtons] = useState([]);
  //for (let index = 0; index < subject.length; index++) {}
  const {subject, loadSubjects} = useContext(SubjectContext);

  useEffect(() => {
    if (subject !== {}) {
      loadSubjects();
    }
    //console.log(listButtons);
  }, [subject]);

  return (
    <Theme>
      <Background1>
        <Container>
          <ListSubjects
            numColumns={3}
            data={subject}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              let selectedButton;
              let backgroundColor = theme.colors.cinzaClaro;

              if (listButtons.length !== subject.length) {
                let button = {
                  id: item.id,
                  press: false,
                };
                listButtons.push(button);
              }
              if (listButtons) {
                for (let index = 0; index < listButtons.length; index++) {
                  if (item.id === listButtons[index].id) {
                    selectedButton = index;
                  }
                }
                backgroundColor = listButtons[selectedButton].press
                  ? theme.colors.azulClaro
                  : theme.colors.cinzaClaro;
              }

              return (
                <SquareButton
                  data={item}
                  onPress={() => {
                    for (let index = 0; index < listButtons.length; index++) {
                      if (item.id === listButtons[index].id) {
                        if (listButtons[index].press === false) {
                          listButtons[index].press = true;
                        } else {
                          listButtons[index].press = false;
                        }
                      }
                    }
                  }}
                  style={{backgroundColor}}
                />
              );
            }}
          />
        </Container>
        <ContainerButton>
          <NextButton
            onPress={() => {
              let buttons = [];

              for (let index = 0; index < listButtons.length; index++) {
                if (listButtons[index].press === true) {
                  buttons.push(listButtons[index].id);
                }
              }

              if (buttons.length === 0) {
                Alert.alert('Você deve selecionar pelo menos uma disciplina');
              } else {
                navigation.navigate('TeacherRegister', {buttons});
              }
            }}>
            <CustomText white small>
              Próxima
            </CustomText>
          </NextButton>
        </ContainerButton>
      </Background1>
    </Theme>
  );
}
