import React, {useState, useEffect} from 'react';
import Theme from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import Background1 from '../../components/Background1';
import {Icon,ListFiltro,ButtonAulaUrgente,ButtonMarcarAula} from './styles'
import {ContainerButtons, Texto} from './styles';


export default function Home({navigation}) {

  const [filtros,setFiltros] = useState([
    {key: '1', nome: 'Reforço Escolar', img: require('../../assets/books.png'), clicked: false},
    {key: '2', nome: 'Idiomas', img: require('../../assets/books.png'), clicked: false},
    {key: '3', nome: 'Vestibular', img: require('../../assets/books.png'), clicked: false},
  ]);

  return (
    <Theme>
        <Background1>
          <ListFiltro
          horizontal
          data={filtros}
          keyExtractor={(item) => item.key}
          renderItem={({item}) => <SquareButton data = {item}/>}
          />
          <ContainerButtons>
          <ButtonAulaUrgente>
            <Icon source={require('../../assets/books.png')}/>
            <Texto> Aula Urgente</Texto>
          </ButtonAulaUrgente>
          <ButtonMarcarAula 
          onPress={() => {navigation.navigate('Materias')}}
          >
            <Icon source={require('../../assets/books.png')}/>
            <Texto> Marcar Aula</Texto>
          </ButtonMarcarAula>
        </ContainerButtons>
        </Background1>
    </Theme>
  );
}
