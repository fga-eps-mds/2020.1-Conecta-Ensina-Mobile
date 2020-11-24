import React, {useState, useContext} from 'react';
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
import {ClassroomContext} from '../../contexts/classroom';

const Item = ({item, onPress, style}) => (
  <SquareButton data={item} onPress={onPress} style={[style]} />
);

export default function HomeProf({navigation}) {
  const {readClass} = useContext(ClassroomContext);
  const [funcoes] = useState([
    {
      id: '101',
      name: 'Aulas Marcadas',
      img: require('../../assets/books.png'),
    },
    {
      id: '102',
      name: 'Aulas Pendentes',
      img: require('../../assets/books.png'),
    },
    {
      id: '103',
      name: 'Aulas Realizadas',
      img: require('../../assets/books.png'),
    },
  ]);

  const renderItem = ({item}) => {
    var nextScreen;

    if (item.id === '101') {
      nextScreen = 'TeacherClassDetails';
    } else if (item.id === '102') {
      nextScreen = 'PendingClass';
    } else if (item.id === '103') {
      nextScreen = 'CompletedClass';
    } else {
      nextScreen = 'HomeProf';
    }

    return (
      <Item
        item={item}
        onPress={async () => {
          await readClass('f00c1ee9-078b-4b61-8e3f-a23d68da4312');
          navigation.navigate(nextScreen);
        }}
        style={{backgroundColor: theme.colors.cinzaClaro}}
      />
    );
  };

  return (
    <Theme>
      <Background1 navigation={navigation} page={'TeacherProfile2'}>
        <ListFuncoes
          horizontal
          data={funcoes}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
        <ContainerAula>
          <ContainerHorizontal>
            <Icon source={require('../../assets/books.png')} />
            <CustomText white bigSmall>
              Proxima Aula
            </CustomText>
          </ContainerHorizontal>
          <BigTextContainer>
            <CustomText white big>
              12 Jun
            </CustomText>
          </BigTextContainer>
          <ContainerHorizontal>
            <CustomText white bigSmall>
              16 - 18 Horas{' '}
            </CustomText>
            <CustomText fundoAzul bigSmall>
              {' '}
              Matemática
            </CustomText>
          </ContainerHorizontal>
        </ContainerAula>
      </Background1>
    </Theme>
  );
}
