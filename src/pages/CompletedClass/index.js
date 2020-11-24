import React, {useContext, useEffect, useState} from 'react';
import Theme from '../../../Theme';
import {ClassroomContext} from '../../contexts/classroom';
import gradeResolver from '../../services/gradeResolver';
import dateResolver from '../../services/dateResolver';
import timeResolver from '../../services/timeResolver';
import Background1 from '../../components/Background1';
import {ContainerVisualAula, ListaVisualAula, ButtonVerMais} from './styles';
import CustomText from '../../components/CustomText';

export default function CompletedClass({navigation}) {
  const {statusClasses, setStatusClass, loadStatusClasses, Host} = useContext(
    ClassroomContext,
  );
  //const [student, setStudent] = useState('');
  const [user, setUser] = useState([]);

  const getUser = async (id) => {
    const fetchResponse = await fetch(`${Host}/api/user/${id}`);
    try {
      const data = await fetchResponse.json();
      console.log(data);
      await setUser(user.concat(data.data.user));
      return data;
    } catch (error) {
      return error;
    }
  };

  const renderClass = ({item, index}) => {
    return (
      <ContainerVisualAula numColumns={1}>
        <CustomText small black>
          Informações Aula
        </CustomText>
        <CustomText small black>
          {`CEP: ${item.cep}`}
        </CustomText>
        <CustomText small black>
          {`Numero: ${item.number}`}
        </CustomText>
        <CustomText small black>
          {`Complemento: ${item.details ? item.details : 'Não informado'}`}
        </CustomText>
        <CustomText small black>{`Data: ${dateResolver(
          item.dtclass,
        )}`}</CustomText>
        <CustomText small black>{`Horário: ${timeResolver(
          item.dtclass,
        )}`}</CustomText>
        <CustomText small black>
          Informações Aluno
        </CustomText>
        <CustomText small black>
          {user[index] && `${user[index].firstName} ${user[index].lastName}`}
        </CustomText>
        <CustomText smaller black>
          {`Série: ${gradeResolver(item.grade)}`}
        </CustomText>
        <ButtonVerMais
          onPress={() => {
            navigation.navigate('ConfirmedClassDetails');
            setStatusClass(item);
          }}>
          <CustomText smaller white>
            Ver Mais
          </CustomText>
        </ButtonVerMais>
      </ContainerVisualAula>
    );
  };
  const getInfo = async () => {
    await loadStatusClasses(4);
  };
  useEffect(() => {
    if (statusClasses !== {}) {
      getInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    statusClasses.map(async (item) => {
      await getUser(item.student);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusClasses]);

  return (
    <Theme>
      <Background1 navigation={navigation} page={'TeacherProfile2'}>
        <ListaVisualAula
          numColumns={2}
          data={statusClasses}
          renderItem={renderClass}
        />
      </Background1>
    </Theme>
  );
}
