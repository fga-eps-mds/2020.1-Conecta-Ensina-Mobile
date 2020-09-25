import React, {useState} from 'react';
import Theme from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
import {
  Icon,
  ListFiltro,
  ButtonAulaUrgente,
  ButtonMarcarAula,
  ContainerButtons,
} from './styles';

export default function Home() {
  const [filtros] = useState([
    {key: '1', nome: 'Reforço Escolar', img: require('../../assets/books.png')},
    {key: '2', nome: 'Reforço Escolar', img: require('../../assets/books.png')},
    {key: '3', nome: 'Reforço Escolar', img: require('../../assets/books.png')},
    {key: '4', nome: 'Reforço Escolar', img: require('../../assets/books.png')},
    {key: '5', nome: 'Reforço Escolar', img: require('../../assets/books.png')},
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
            <Icon source={require('../../assets/books.png')} />
            <CustomText white medium>
              Aula Urgente
            </CustomText>
          </ButtonAulaUrgente>
          <ButtonMarcarAula>
            <Icon source={require('../../assets/books.png')} />
            <CustomText white medium>
              Marcar Aula
            </CustomText>
          </ButtonMarcarAula>
        </ContainerButtons>
      </Background1>
    </Theme>
  );
}
