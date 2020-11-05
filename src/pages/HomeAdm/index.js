import React, {useState, useContext} from 'react';
import Theme, {theme} from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import Background4 from '../../components/Background4';
import {AdmContext} from '../../contexts/admin';
import {ListFuncoes} from './styles';

const Item = ({item, onPress, style}) => (
  <SquareButton data={item} onPress={onPress} style={[style]} />
);

export default function HomeAdm({navigation}) {
  const [funcoes, setFuncoes] = useState([
    {
      id: '101',
      nome: 'Professores Pendentes',
      img: require('../../assets/books.png'),
    },
  ]);
  const {getProfessorList} = useContext(AdmContext);
  const renderItem = ({item}) => {
    var nextScreen;

    if (item.id === '101') {
      nextScreen = 'PendingTeacher';
    } else {
      nextScreen = 'HomeAdm';
    }

    async function handleProf() {
      await getProfessorList();
      navigation.navigate(nextScreen);
    }

    return (
      <Item
        item={item}
        onPress={handleProf}
        style={{backgroundColor: theme.colors.cinzaClaro}}
      />
    );
  };

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
