import React, {useState, useEffect} from 'react';
import Theme, {theme} from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
import {
  BigTextContainer,
  ContainerAula,
  ContainerHorizontal,
  Icon,
  ContainerFuncoes,
} from './styles';

export default function HomeProf({navigation}){

  const [func,setFunc] = useState([
    {id: '101', nome: 'Aulas Marcadas', img: require('../../assets/books.png')},
    {id: '102', nome: 'Aulas Pendentes', img: require('../../assets/books.png')},
    {id: '103', nome: 'Aulas Realizadas', img: require('../../assets/books.png')},
  ]);



  return (
    <Theme>
      <Background1>
        <ContainerFuncoes>
          <SquareButton
          data={func}
          onPress={()=> navigation.navigate('AulaMarcada')}
          style={{ backgroundColor: theme.colors.cinzaClaro }}
          />
          <SquareButton
          data={func}
          onPress={()=> navigation.navigate('AulaPendente')}
          style={{ backgroundColor: theme.colors.cinzaClaro }}
          />
          <SquareButton
          data={func}
          onPress={()=> navigation.navigate(func.prox)}
          style={{ backgroundColor: theme.colors.cinzaClaro }}
          />
        </ContainerFuncoes>
        <ContainerAula>
            <ContainerHorizontal>
              <Icon source={require('../../assets/books.png')} />
              <CustomText white bigSmall>Proxima Aula</CustomText>
            </ContainerHorizontal>
            <BigTextContainer>
              <CustomText white big>12 Jun</CustomText>
            </BigTextContainer>
            <ContainerHorizontal>
              <CustomText white bigSmall>16 - 18 Horas</CustomText>
              <CustomText fundoAzul bigSmall>Matemática</CustomText>
            </ContainerHorizontal>
        </ContainerAula>
      </Background1>
    </Theme>
  );
}


