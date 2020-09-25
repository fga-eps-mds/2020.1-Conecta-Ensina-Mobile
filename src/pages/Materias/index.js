import React, {useState} from 'react';
import Theme from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import ButtonContinuar from '../../components/ButtonContinuar';
import Background1 from '../../components/Background1';
import {ListMaterias, Container} from './styles';

const Item = ({ item, onPress, style }) => (
  <SquareButton data={item} onPress={onPress} style={[style]}/>
);

export default function Materias({route,navigation}) {

  const [materias] = useState([
    {id: '1', nome: 'Português' ,img: require('../../assets/books.png'), clicked: false},
    {id: '2', nome: 'Matemática' ,img: require('../../assets/books.png'), clicked: false},
    {id: '3', nome: 'História' ,img: require('../../assets/books.png'), clicked: false},
    {id: '4', nome: 'Geografia' ,img: require('../../assets/books.png'), clicked: false},
    {id: '5', nome: 'Ciência' ,img: require('../../assets/books.png'), clicked: false},
    {id: '6', nome: 'Química' ,img: require('../../assets/books.png'), clicked: false},
    {id: '7', nome: 'Física' ,img: require('../../assets/books.png'), clicked: false},
    {id: '8', nome: 'Biologia' ,img: require('../../assets/books.png'), clicked: false},
    {id: '9', nome: 'Redação' ,img: require('../../assets/books.png'), clicked: false},
    {id: '10', nome: 'Artes' ,img: require('../../assets/books.png'), clicked: false},
    {id: '11', nome: 'Inglês' ,img: require('../../assets/books.png'), clicked: false},
    {id: '12', nome: 'Espanhol' ,img: require('../../assets/books.png'), clicked: false},
    {id: '13', nome: 'História' ,img: require('../../assets/books.png'), clicked: false},
    {id: '14', nome: 'Geografia' ,img: require('../../assets/books.png'), clicked: false},
    {id: '15', nome: 'Ciência' ,img: require('../../assets/books.png'), clicked: false},
    {id: '16', nome: 'Química' ,img: require('../../assets/books.png'), clicked: false},
    {id: '17', nome: 'Física' ,img: require('../../assets/books.png'), clicked: false},
    {id: '18', nome: 'Biologia' ,img: require('../../assets/books.png'), clicked: false},
    {id: '19', nome: 'Redação' ,img: require('../../assets/books.png'), clicked: false},
  ]);

  const [selectedId,setSelectedId] = useState(null);
  const {params} = route.params;

  //alert(params);

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
        <Container>
          <ListMaterias
            numColumns={3}
            data={materias}
            extraData={selectedId}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </Container>
        <ButtonContinuar />
      </Background1>
    </Theme>
  );
}
