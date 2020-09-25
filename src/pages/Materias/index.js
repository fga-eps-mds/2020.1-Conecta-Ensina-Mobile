import React, {useState} from 'react';
import Theme from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import ButtonContinuar from '../../components/ButtonContinuar';
import Background1 from '../../components/Background1';
import {ListMaterias, Container} from './styles';

export default function Materias({navigation,data}) {
  const [materias] = useState([
    {key: '1', nome: 'Português' ,img: require('../../assets/books.png'), clicked: false},
    {key: '2', nome: 'Matemática' ,img: require('../../assets/books.png'), clicked: false},
    {key: '3', nome: 'História' ,img: require('../../assets/books.png'), clicked: false},
    {key: '4', nome: 'Geografia' ,img: require('../../assets/books.png'), clicked: false},
    {key: '5', nome: 'Ciência' ,img: require('../../assets/books.png'), clicked: false},
    {key: '6', nome: 'Química' ,img: require('../../assets/books.png'), clicked: false},
    {key: '7', nome: 'Física' ,img: require('../../assets/books.png'), clicked: false},
    {key: '8', nome: 'Biologia' ,img: require('../../assets/books.png'), clicked: false},
    {key: '9', nome: 'Redação' ,img: require('../../assets/books.png'), clicked: false},
    {key: '10', nome: 'Artes' ,img: require('../../assets/books.png'), clicked: false},
    {key: '11', nome: 'Inglês' ,img: require('../../assets/books.png'), clicked: false},
    {key: '12', nome: 'Espanhol' ,img: require('../../assets/books.png'), clicked: false},
    {key: '13', nome: 'História' ,img: require('../../assets/books.png'), clicked: false},
    {key: '14', nome: 'Geografia' ,img: require('../../assets/books.png'), clicked: false},
    {key: '15', nome: 'Ciência' ,img: require('../../assets/books.png'), clicked: false},
    {key: '16', nome: 'Química' ,img: require('../../assets/books.png'), clicked: false},
    {key: '17', nome: 'Física' ,img: require('../../assets/books.png'), clicked: false},
    {key: '18', nome: 'Biologia' ,img: require('../../assets/books.png'), clicked: false},
    {key: '19', nome: 'Redação' ,img: require('../../assets/books.png'), clicked: false},
  ]);

  return (
    <Theme>
      <Background1>
        <Container>
          <ListMaterias
            numColumns={3}
            data={materias}
            keyExtractor={(item) => item.key}
            renderItem={({item}) => <SquareButton data={item} />}
          />
        </Container>
        <ButtonContinuar />
      </Background1>
    </Theme>
  );
}
