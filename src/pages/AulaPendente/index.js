import React, {useState, useContext} from 'react';
import Theme from '../../../Theme';
import Background1 from '../../components/Background1';
import {AuthContext} from '../../contexts/auth';
import {
  ContainerVisualAula,
  ListaVisualAula,
  ContainerButtons,
  ContainerTexto,
  ButtonConfirmar,
  ButtonRecusar,
} from './styles';
import CustomText from '../../components/CustomText';

export default function AulaPendente({navigation}) {
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
      'http://192.168.0.12:3333/api/classroom/',
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

  const updateStatus = async (id, status) => {
    const settings = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: status,
      }),
    };
    const fetchResponse1 = await fetch(
      'http://192.168.0.12:3333/api/classroom/status/' + id,
      settings,
    );
    try {
      const data = await fetchResponse1.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [classes, setClasses] = useState(getClass);
  console.log(classes);

  const renderItem = ({item}) => {
    return (
      <ContainerVisualAula>
        <ContainerTexto>
          <CustomText smaller black>
            Horario: 16 - 17h
          </CustomText>
          <CustomText smaller black>
            Conteudo
          </CustomText>
          <CustomText smaller black>
            Modalidade
          </CustomText>
          <CustomText smaller black>
            Distancia
          </CustomText>
          <CustomText smaller black>
            {' '}
          </CustomText>
          <CustomText smaller black>
            Dados do Aluno
          </CustomText>
          <CustomText smaller black>
            {' '}
            - Nome
          </CustomText>
          <CustomText smaller black>
            {' '}
            - Serie
          </CustomText>
          <CustomText smaller black>
            {' '}
            - Endereço
          </CustomText>
          <CustomText smaller black>
            {' '}
            - Observação
          </CustomText>
        </ContainerTexto>
        <ContainerButtons>
          <ButtonRecusar onPress={() => updateStatus(item.id, -1)} />
          <ButtonConfirmar onPress={() => updateStatus(item.id, 1)} />
        </ContainerButtons>
      </ContainerVisualAula>
    );
  };

  return (
    <Theme>
      <Background1 navigation={navigation} page={'PerfilProf2'}>
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
