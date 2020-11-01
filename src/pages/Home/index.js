import React, {useState, useEffect} from 'react';
import Theme, {theme} from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
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

const Item = ({item, onPress, style}) => (
  <SquareButton data={item} onPress={onPress} style={[style]} />
);

export default function Home({navigation}) {
  const [filtros, setFiltros] = useState([
    {id: '1', name: 'Reforço Escolar', img: require('../../assets/books.png')},
    {id: '2', name: 'Idiomas', img: require('../../assets/books.png')},
    {id: '3', name: 'Vestibular', img: require('../../assets/books.png')},
  ]);

  const [selectedId, setSelectedId] = useState(null);
  const [params, setParams] = useState(null);

  useEffect(() => {
    if (selectedId !== null) {
      setParams(selectedId);
    }
  }, [selectedId]);

  const renderItem = ({item}) => {
    const backgroundColor =
      item.id === selectedId ? theme.colors.azulClaro : theme.colors.cinzaClaro;
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor}}
      />
    );
  };

  const getClassroom = async () => {
    const fetchResponse = await fetch('http://192.168.0.157:3333/api/classroom/3bd7c190-ce64-4827-8c0c-58cfef45ad9f');
    try {
      const data = await fetchResponse.json();
      console.log(data.data.classroom.dtclass);
      setClassroom(data.data.classroom);
      return data;
    } catch (error) {
      return error;
    }
  };

  const [classroom, setClassroom] = useState(getClassroom);


  return (
    <Theme>
      <Background1 navigation={navigation} page={'Perfil'}>
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
             <CustomText>{classroom.dtclass}</CustomText>
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
              navigation.navigate('Materias', {params}); /*}catch(error){}*/
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
