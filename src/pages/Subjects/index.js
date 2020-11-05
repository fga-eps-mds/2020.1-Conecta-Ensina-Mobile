import React, {useState} from 'react';
import Theme, {theme} from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import ContinueContainer from '../../components/ContinueContainer';

import Background1 from '../../components/Background1';
import {ListMaterias, Container} from './styles';

const Item = ({item, onPress, style}) => (
  <SquareButton data={item} onPress={onPress} style={[style]} />
);

export default function Subjects({route, navigation}) {
  const [materias] = useState([
    {id: '1', nome: 'Português', img: require('../../assets/books.png')},
    {id: '2', nome: 'Matemática', img: require('../../assets/books.png')},
    {id: '3', nome: 'História', img: require('../../assets/books.png')},
    {id: '4', nome: 'Geografia', img: require('../../assets/books.png')},
    {id: '5', nome: 'Ciência', img: require('../../assets/books.png')},
    {id: '6', nome: 'Química', img: require('../../assets/books.png')},
    {id: '7', nome: 'Física', img: require('../../assets/books.png')},
    {id: '8', nome: 'Biologia', img: require('../../assets/books.png')},
    {id: '9', nome: 'Redação', img: require('../../assets/books.png')},
    {id: '10', nome: 'Artes', img: require('../../assets/books.png')},
    {id: '11', nome: 'Inglês', img: require('../../assets/books.png')},
    {id: '12', nome: 'Espanhol', img: require('../../assets/books.png')},
    {id: '13', nome: 'História', img: require('../../assets/books.png')},
    {id: '14', nome: 'Geografia', img: require('../../assets/books.png')},
    {id: '15', nome: 'Ciência', img: require('../../assets/books.png')},
    {id: '16', nome: 'Química', img: require('../../assets/books.png')},
    {id: '17', nome: 'Física', img: require('../../assets/books.png')},
    {id: '18', nome: 'Biologia', img: require('../../assets/books.png')},
    {id: '19', nome: 'Redação', img: require('../../assets/books.png')},
  ]);

  const [selectedId, setSelectedId] = useState(null);
  const {params} = route.params;

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

  return (
    <Theme>
      <Background1 navigation={navigation} page={'Profile'}>
        <Container>
          <ListMaterias
            numColumns={3}
            data={materias}
            extraData={selectedId}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </Container>
        <ContinueContainer
          marginTop={{value: '127.5%'}}
          onPress={() => navigation.navigate('Filters')}
        />
      </Background1>
    </Theme>
  );
}
