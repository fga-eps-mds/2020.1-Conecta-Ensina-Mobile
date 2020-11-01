import React, {useState} from 'react';
import Theme from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import ContainerVoltar from '../../components/ContainerVoltar';

import Background1 from '../../components/Background1';
import {ListMaterias, Container, ContainerFooter} from './styles';

export default function Professores({navigation}) {
/*  const [usuario] = useState([
    {id: '1', nome: 'Carlos', img: require('../../assets/user_blue.png')},
    {id: '2', nome: 'Cassia', img: require('../../assets/user_blue.png')},
    {id: '3', nome: 'Arthur', img: require('../../assets/user_blue.png')},
    {id: '4', nome: 'Jorge', img: require('../../assets/user_blue.png')},
    {id: '5', nome: 'Luana', img: require('../../assets/user_blue.png')},
    {id: '6', nome: 'Jade', img: require('../../assets/user_blue.png')},
    {id: '7', nome: 'Carla', img: require('../../assets/user_blue.png')},
    {id: '8', nome: 'Biologia', img: require('../../assets/user_blue.png')},
    {id: '9', nome: 'Redação', img: require('../../assets/user_blue.png')},
    {id: '10', nome: 'Artes', img: require('../../assets/user_blue.png')},
    {id: '11', nome: 'Inglês', img: require('../../assets/user_blue.png')},
    {id: '12', nome: 'Espanhol', img: require('../../assets/user_blue.png')},
    {id: '13', nome: 'História', img: require('../../assets/user_blue.png')},
    {id: '14', nome: 'Geografia', img: require('../../assets/user_blue.png')},
    {id: '15', nome: 'Ciência', img: require('../../assets/user_blue.png')},
    {id: '16', nome: 'Química', img: require('../../assets/user_blue.png')},
    {id: '17', nome: 'Física', img: require('../../assets/user_blue.png')},
    {id: '18', nome: 'Biologia', img: require('../../assets/user_blue.png')},
    {id: '19', nome: 'Redação', img: require('../../assets/user_blue.png')},
  ]);
*/
const getTeachers = async () => {
  const fetchResponse = await fetch('http://192.168.0.157:3333/api/teacher/');
  try {
    const data = await fetchResponse.json();
    console.log(data.data.user);
    setTeachers(data.data.user);
    return data;
  } catch (error) {
    return error;
  }
};

const [teachers, setTeachers] = useState(getTeachers);


  return (
    <Theme>
      <Background1>
        <Container>
          <ListMaterias
            numColumns={3}
            data={teachers}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
            <SquareButton 
              data={item}
              img={require('../../assets/user_blue.png')}
            />
            )}
          />
        </Container>
        <ContainerFooter>
          <ContainerVoltar onPressVoltar={() => navigation.push('Filtros')} />
        </ContainerFooter>
      </Background1>
    </Theme>
  );
}

