import React, { useState } from 'react';
import Theme from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import {
  WhiteContainer,
  BlueContainer,
  Usercontainer,
  UserTexto,
  UserAvatar,
} from '../../components/StyleBackground1/styles';
import { ListFiltro } from './styles'

export default function Home() {
  const [filtros, setFiltros] = useState([
    {key: '1', nome: 'Reforço Escolar', img: require('../../assets/books.png')},
    {key: '2', nome: 'Reforço Escolar', img: require('../../assets/books.png')},
    {key: '3', nome: 'Reforço Escolar', img: require('../../assets/books.png')},
  ])

  return (
    <Theme>
      <BlueContainer>
        <Usercontainer>
          <UserAvatar /> 
          <UserTexto>Nome do Aluno</UserTexto>
        </Usercontainer>
        <WhiteContainer>
          <ListFiltro 
            horizontal
            data={ filtros }
            keyExtractor={ item => item.key}
            renderItem={({ item }) => ( <SquareButton data={item} /> )}
          />
        </WhiteContainer>
      </BlueContainer>
    </Theme>
  );
}
