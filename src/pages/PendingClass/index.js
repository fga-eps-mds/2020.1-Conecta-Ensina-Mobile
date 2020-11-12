import React, {useState, useContext, useEffect} from 'react';
import Theme from '../../../Theme';
import Background1 from '../../components/Background1';
import {AuthContext} from '../../contexts/auth';
import {
  ContainerVisualAula,
  ListaVisualAula,
  ContainerButtons,
  ContainerTexto,
  ButtonVerMais,
} from './styles';
import CustomText from '../../components/CustomText';

export default function PendingClass({navigation}) {
  const {user} = useContext(AuthContext);

  const getClass = async () => {
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        teacher: user.id,
        status: 0,
      }),
    };
    const fetchResponse1 = await fetch(
      'http://192.168.15.17:3333/api/classroom/',
      settings,
    );
    try {
      const data = await fetchResponse1.json();
      console.log(data.data.classroom);
      setClasses(data.data.classroom);
    } catch (error) {
      return error;
    }
  };
  const [classes, setClasses] = useState(getClass);

  const renderItem = ({item}) => {
    return (
      <ContainerVisualAula>
        <ContainerTexto>
          <CustomText smaller black>
            Horario: {item.dtclass}
          </CustomText>
          <CustomText smaller black>
            Distancia: {item.cep}
          </CustomText>
          <CustomText smaller black>
            Duração: {item.duration}
          </CustomText>
          <CustomText smaller black>
            Serie: {item.grade}
          </CustomText>
          <CustomText smaller black>
            Conteudo: {item.details}
          </CustomText>
        </ContainerTexto>
        <ContainerButtons>
          <ButtonVerMais
            onPress={() =>
              navigation.navigate('PendingClassConfirmation', {item})
            }>
            <CustomText white bigSmall>
              Ver mais
            </CustomText>
          </ButtonVerMais>
        </ContainerButtons>
      </ContainerVisualAula>
    );
  };

  return (
    <Theme>
      <Background1 navigation={navigation} page={'TeacherProfile2'}>
        <ListaVisualAula
          numColumns={2}
          data={classes}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </Background1>
    </Theme>
  );
}
