import React, {useState, useEffect, useContext} from 'react';
import Theme, {theme} from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
import {ClassroomContext} from '../../contexts/classroom';

import {
  BigTextContainer,
  ButtonAulaUrgente,
  ButtonMarcarAula,
  ContainerButtons,
  ContainerAula,
  ContainerHorizontal,
  Icon,
  ListFiltro,
} from './styles';

export default function Home({navigation}) {
  const [filtros] = useState([
    {id: '1', name: 'Reforço Escolar', img: require('../../assets/books.png')},
    {id: '2', name: 'Idiomas', img: require('../../assets/books.png')},
    {id: '3', name: 'Vestibular', img: require('../../assets/books.png')},
  ]);
  const {classroom, loadNextClass, firstClass, loadUserClasses} = useContext(
    ClassroomContext,
  );
  const [selectedId, setSelectedId] = useState(null);
  const [params, setParams] = useState(null);

  useEffect(() => {
    if (selectedId !== null) {
      setParams(selectedId);
    }
    if (firstClass !== {}) {
      loadNextClass();
    }
    if (classroom !== {}) {
      loadUserClasses();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Background1 navigation={navigation} page={'Profile'}>
        <ListFiltro
          horizontal
          data={filtros}
          extraData={selectedId}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
        <ContainerAula>
          <ContainerHorizontal>
            <Icon source={require('../../assets/books.png')} />
            <CustomText bigSmall>Proxima Aula</CustomText>
          </ContainerHorizontal>
          <BigTextContainer>
            <CustomText>{firstClass.dtclass}</CustomText>
          </BigTextContainer>
          <ContainerHorizontal>
            <CustomText bigSmall>16 - 18 Horas</CustomText>
            <CustomText bigSmall>Matemática</CustomText>
          </ContainerHorizontal>
        </ContainerAula>
        <ContainerButtons>
          <ButtonAulaUrgente>
            <Icon source={require('../../assets/books.png')} />
            <CustomText white medium>
              Aula Urgente
            </CustomText>
          </ButtonAulaUrgente>
          <ButtonMarcarAula
            onPress={() => {
              navigation.navigate('Subjects', {params}); /*}catch(error){}*/
            }}>
            <Icon source={require('../../assets/books.png')} />
            <CustomText white medium>
              Marcar Aula
            </CustomText>
          </ButtonMarcarAula>
        </ContainerButtons>
      </Background1>
    </Theme>
  );
}
