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
  ListFuncoes,
} from './styles';

const Item = ({ item, onPress, style }) => (
  <SquareButton data={item} onPress={onPress} style={[style]}/>
);

export default function HomeProf({navigation}){

  const [funcoes,setFuncoes] = useState([
    {id: '101', nome: 'Aulas Marcadas', img: require('../../assets/books.png')},
    {id: '102', nome: 'Aulas Pendentes', img: require('../../assets/books.png')},
    {id: '103', nome: 'Aulas Realizadas', img: require('../../assets/books.png')},
  ]);

  const [selectedId,setSelectedId] = useState(null);

  const renderItem = ({ item })=>{
    var nextScreen;

    if(item.id === '101'){
      nextScreen = 'AulaMarcada'
    }
    else if(item.id === '102'){
      nextScreen = 'AulaPendente'
    }
    else if(item.id === '103'){
      nextScreen = 'AulaRealizada'
    }
    else{
      nextScreen = 'HomeProf'
    }

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate(nextScreen)}
        style={{ backgroundColor: theme.colors.cinzaClaro }}
      />
    );
  } 

  return (
    <Theme>
      <Background1>
      <ListFuncoes
          horizontal
          data={funcoes}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
        <ContainerAula>
            <ContainerHorizontal>
              <Icon source={require('../../assets/books.png')} />
              <CustomText white bigSmall>Proxima Aula</CustomText>
            </ContainerHorizontal>
            <BigTextContainer>
              <CustomText white big>12 Jun</CustomText>
            </BigTextContainer>
            <ContainerHorizontal>
              <CustomText white bigSmall>16 - 18 Horas             </CustomText>
              <CustomText fundoAzul bigSmall>             Matemática</CustomText>
            </ContainerHorizontal>
        </ContainerAula>
      </Background1>
    </Theme>
  );
}


