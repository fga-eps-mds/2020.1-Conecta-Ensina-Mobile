import React, {useState, useEffect, useContext} from 'react';
import Theme, {theme} from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
import {ClassroomContext} from '../../contexts/classroom';
import {SubjectContext} from '../../contexts/subject';
import {
  CenterContainer,
  LowerContainer,
  BigTextContainer,
  UrgentClassButton,
  MarkClassButton,
  ContainerButtons,
  ClassContainer,
  ContainerClassUpper,
  ContainerClassLower,
  Icon,
  FilterList,
} from './styles';
import {dateResolver} from '../../services/dateResolver';

export default function Home({navigation}) {
  const [filtros] = useState([
    {id: '1', name: 'Reforço Escolar', img: require('../../assets/books.png')},
    {id: '2', name: 'Idiomas', img: require('../../assets/books.png')},
    {id: '3', name: 'Vestibular', img: require('../../assets/books.png')},
  ]);
  const {classroom, loadNextClass, firstClass, loadUserClasses} = useContext(
    ClassroomContext,
  );
  const {loadSubjects} = useContext(SubjectContext);

  const [selectedId, setSelectedId] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    if (firstClass === null) {
      loadNextClass();
    } else {
      setDate(dateResolver(firstClass.dtclass));
    }
    if (classroom !== {}) {
      loadUserClasses();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstClass]);

  return (
    <Theme>
      <Background1 navigation={navigation} page={'Profile'}>
        <FilterList
          testID="listFiltro"
          horizontal
          data={filtros}
          extraData={selectedId}
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
                img={require('../../assets/books.png')}
                style={{backgroundColor}}
              />
            );
          }}
        />
        <CenterContainer>
          <ClassContainer>
            <ContainerClassUpper>
              <Icon source={require('../../assets/books.png')} />
              <CustomText bigSmall>Proxima Aula</CustomText>
            </ContainerClassUpper>
            <BigTextContainer>
              <CustomText big>{date && date[0] + ' ' + date[1]}</CustomText>
            </BigTextContainer>
            <ContainerClassLower>
              <CustomText bigSmall>16 - 18 Horas</CustomText>
              <CustomText bigSmall blue>
                Matemática
              </CustomText>
            </ContainerClassLower>
          </ClassContainer>
        </CenterContainer>
        <LowerContainer>
          <ContainerButtons>
            <UrgentClassButton>
              <Icon source={require('../../assets/books.png')} />
              <CustomText white medium>
                Aula Urgente
              </CustomText>
            </UrgentClassButton>
            <MarkClassButton
              testID="MarcarAula"
              onPress={async () => {
                await loadSubjects();
                navigation.navigate('Subjects'); /*}catch(error){}*/
              }}>
              <Icon source={require('../../assets/books.png')} />
              <CustomText white medium>
                Marcar Aula
              </CustomText>
            </MarkClassButton>
          </ContainerButtons>
        </LowerContainer>
      </Background1>
    </Theme>
  );
}
