import React, {useState} from 'react';
import Theme from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import Background1 from '../../components/Background1';
import {Icon,ListFiltro,ButtonAulaUrgente,ButtonMarcarAula,ContainerButtons, Texto} from './styles';

export default function Home() {
  const [filtros] = useState([
    {key: '1', nome: 'Reforço Escolar', img: require('../../assets/books.png')},
    {key: '2', nome: 'Reforço Escolar', img: require('../../assets/books.png')},
    {key: '3', nome: 'Reforço Escolar', img: require('../../assets/books.png')},
  ]);

  return (
    <Theme>
      <Background1>
        <ListFiltro
          horizontal
          data={filtros}
          keyExtractor={(item) => item.key}
          renderItem={({item}) => <SquareButton data={item} />}
        />
        <ContainerButtons>
          <ButtonAulaUrgente>
            <Icon source={require('../../assets/books.png')}/>
            <Texto> Aula Urgente</Texto>
          </ButtonAulaUrgente>
          <ButtonMarcarAula>
            <Icon source={require('../../assets/books.png')}/>
            <Texto> Marcar Aula</Texto>
          </ButtonMarcarAula>
        </ContainerButtons>
      </Background1>
    </Theme>
  );
}
