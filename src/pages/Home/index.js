import React, {useState, useEffect} from 'react';
import Theme from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import Background1 from '../../components/Background1';
import { TouchableOpacity, Image, Text} from 'react-native'
import {Icon,ListFiltro,ButtonAulaUrgente,ButtonMarcarAula} from './styles'
import {ContainerButtons, Texto} from './styles';

const Item = ({ item, onPress, style }) => (
  <SquareButton data={item} onPress={onPress} style={[style]}/>
);

export default function Home({navigation}) {

  const [filtros,setFiltros] = useState([
    {id: '1', nome: 'Reforço Escolar', img: require('../../assets/books.png')},
    {id: '2', nome: 'Idiomas', img: require('../../assets/books.png')},
    {id: '3', nome: 'Vestibular', img: require('../../assets/books.png')},
  ]);

  const [selectedId,setSelectedId] = useState(null);
  const [params,setParams] = useState(null);

  useEffect(()=>{
    if(selectedId !== null){
      setParams(selectedId);
    }
  },[selectedId])

  const renderItem = ({ item })=>{
    const backgroundColor = item.id === selectedId ? "#297FB8": "#D9D9D9";
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  }

  return (
    <Theme>
        <Background1>
          <ListFiltro
          horizontal
          data={filtros}
          extraData={selectedId}
          idExtractor={(item) => item.id}
          renderItem={renderItem}
          />
          <ContainerButtons>
          <ButtonAulaUrgente>
            <Icon source={require('../../assets/books.png')}/>
            <Texto> Aula Urgente</Texto>
          </ButtonAulaUrgente>
          <ButtonMarcarAula 
          onPress={() => {navigation.navigate('Materias', {params})}}
          >
            <Icon source={require('../../assets/books.png')}/>
            <Texto> Marcar Aula</Texto>
          </ButtonMarcarAula>
        </ContainerButtons>
        </Background1>
    </Theme>
  );
}
