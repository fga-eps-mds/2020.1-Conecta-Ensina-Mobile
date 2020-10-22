import React, {useState} from 'react';
import Theme, {theme} from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import Background4 from '../../components/Background4';
import { ListFuncoes } from './styles';

const Item = ({ item, onPress, style }) => (
  <SquareButton data={item} onPress={onPress} style={[style]}/>
);

export default function HomeAdm({navigation}){

  const [funcoes,setFuncoes] = useState([
    {id: '101', nome: 'Professores Pendentes', img: require('../../assets/books.png')},
  ]);

  const getProfessorList = async () => {
    const fetchResponse = await fetch(
      'http://192.168.0.12:3333/api/teachers/status/0',
    );
    try {
      const data = await fetchResponse.json();
      console.log(data.data.teacher);
      setTeachers(data.data.teacher);
      return data;
    } catch (error) {
      return error;
    }
  };

  const [teachers, setTeachers] = useState(getProfessorList);


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
        onPress={() => navigation.navigate(nextScreen, {teachers})}
        style={{ backgroundColor: theme.colors.cinzaClaro }}
      />
    );
  } 

  return (
    <Theme>
      <Background4>
      <ListFuncoes
          horizontal
          data={funcoes}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </Background4>
    </Theme>
  );
}


