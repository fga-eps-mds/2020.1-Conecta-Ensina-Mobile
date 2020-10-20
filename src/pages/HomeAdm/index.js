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

export default function HomeAdm({navigation}){

  const [funcoes,setFuncoes] = useState([
    {id: '101', nome: 'Professores Pendentes', img: require('../../assets/books.png')},
  ]);

  const [selectedId,setSelectedId] = useState(null);

  const renderItem = ({ item })=>{
    var nextScreen;

    if(item.id === '101'){
      nextScreen = 'ProfessoresPendente'
    }
    else{
      nextScreen = 'HomeAdm'
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
      </Background1>
    </Theme>
  );
}


