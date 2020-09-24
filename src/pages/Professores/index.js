import React, {useState} from 'react';
import Theme from '../../../Theme';
import SquareButton from '../../components/ContainerStars';
import ContainerVoltar from '../../components/ContainerVoltar';

import Background1 from '../../components/Background1';
import {ListMaterias, Container} from './styles';

export default function Professores() {
  const [usuario] = useState([
    {key: '1', nome: 'Carlos', img: require('../../assets/user_blue.png')},
    {key: '2', nome: 'Cassia', img: require('../../assets/user_blue.png')},
    {key: '3', nome: 'Arthur', img: require('../../assets/user_blue.png')},
    {key: '4', nome: 'Jorge', img: require('../../assets/user_blue.png')},
    {key: '5', nome: 'Luana', img: require('../../assets/user_blue.png')},
    {key: '6', nome: 'Jade', img: require('../../assets/user_blue.png')},
    {key: '7', nome: 'Carla', img: require('../../assets/user_blue.png')},
    {key: '8', nome: 'Biologia', img: require('../../assets/user_blue.png')},
    {key: '9', nome: 'Redação', img: require('../../assets/user_blue.png')},
    {key: '10', nome: 'Artes', img: require('../../assets/user_blue.png')},
    {key: '11', nome: 'Inglês', img: require('../../assets/user_blue.png')},
    {key: '12', nome: 'Espanhol', img: require('../../assets/user_blue.png')},
    {key: '13', nome: 'História', img: require('../../assets/user_blue.png')},
    {key: '14', nome: 'Geografia', img: require('../../assets/user_blue.png')},
    {key: '15', nome: 'Ciência', img: require('../../assets/user_blue.png')},
    {key: '16', nome: 'Química', img: require('../../assets/user_blue.png')},
    {key: '17', nome: 'Física', img: require('../../assets/user_blue.png')},
    {key: '18', nome: 'Biologia', img: require('../../assets/user_blue.png')},
    {key: '19', nome: 'Redação', img: require('../../assets/user_blue.png')},
  ]);

  return (
    <Theme>
      <Background1>
        <Container>
          <ListMaterias
            numColumns={3}
            data={usuario}
            keyExtractor={(item) => item.key}
            renderItem={({item}) => <SquareButton data={item} />}
          />
        </Container>
        <ContainerVoltar />
      </Background1>
    </Theme>
  );
}
