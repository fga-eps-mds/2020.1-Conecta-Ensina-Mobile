import React, {useState, useEffect} from 'react';
import Theme from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import Background1 from '../../components/Background1';
import {ListFiltro} from './styles';


export default function Home() {
  const [filtros] = useState([
    {key: '1', nome: 'Reforço Escolar', img: require('../../assets/books.png'), path: 'Materias'},
    {key: '2', nome: 'Idiomas', img: require('../../assets/books.png'), path: 'Materias'},
    {key: '3', nome: 'Vestibular', img: require('../../assets/books.png'), path: 'Materias'},
  ]);

  return (
    <Theme>
        <Background1>
          <ListFiltro
            horizontal
            data={filtros}
            keyExtractor={(item) => item.key}
            renderItem={({item}) => <SquareButton data={item}/>}
          />
        </Background1>
    </Theme>
  );
}
