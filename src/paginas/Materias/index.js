import React, {useState} from 'react';
import Theme from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import ButtonContinuar from '../../components/ButtonContinuar';

import Background1 from '../../components/Background1';
import {ListMaterias, Container} from './styles';

export default function Materias() {
  const [materias] = useState([
    {key: '1', nome: 'Português', img: require('../../assets/books.png')},
    {key: '2', nome: 'Matemática', img: require('../../assets/books.png')},
    {key: '3', nome: 'História', img: require('../../assets/books.png')},
    {key: '4', nome: 'Geografia', img: require('../../assets/books.png')},
    {key: '5', nome: 'Ciência', img: require('../../assets/books.png')},
    {key: '6', nome: 'Química', img: require('../../assets/books.png')},
    {key: '7', nome: 'Física', img: require('../../assets/books.png')},
    {key: '8', nome: 'Biologia', img: require('../../assets/books.png')},
    {key: '9', nome: 'Redação', img: require('../../assets/books.png')},
    {key: '10', nome: 'Artes', img: require('../../assets/books.png')},
    {key: '11', nome: 'Inglês', img: require('../../assets/books.png')},
    {key: '12', nome: 'Espanhol', img: require('../../assets/books.png')},
    {key: '13', nome: 'História', img: require('../../assets/books.png')},
    {key: '14', nome: 'Geografia', img: require('../../assets/books.png')},
    {key: '15', nome: 'Ciência', img: require('../../assets/books.png')},
    {key: '16', nome: 'Química', img: require('../../assets/books.png')},
    {key: '17', nome: 'Física', img: require('../../assets/books.png')},
    {key: '18', nome: 'Biologia', img: require('../../assets/books.png')},
    {key: '19', nome: 'Redação', img: require('../../assets/books.png')},
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
