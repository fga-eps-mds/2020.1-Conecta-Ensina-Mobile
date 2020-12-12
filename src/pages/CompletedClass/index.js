import React, {useContext, useEffect, useState} from 'react';
import Theme from '../../../Theme';
import {ClassroomContext} from '../../contexts/classroom';
import {StudentContext} from '../../contexts/student';
import gradeResolver from '../../services/gradeResolver';
import dateResolver from '../../services/dateResolver';
import timeResolver from '../../services/timeResolver';
import Background1 from '../../components/Background1';
import {ContainerVisualAula, ListaVisualAula, ButtonVerMais} from './styles';
import CustomText from '../../components/CustomText';

export default function CompletedClass({navigation}) {
  const {statusClasses, setStatusClass} = useContext(ClassroomContext);
  const {studentStack, setStudent} = useContext(StudentContext);

  useEffect(() => {
    console.log(studentStack);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const renderClass = ({item, index}) => {
    return (
      <ContainerVisualAula numColumns={1} nestedScrollEnabled>
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
          {studentStack[index] &&
            studentStack[index].user &&
            `${studentStack[index].user.firstName} ${studentStack[index].user.lastName}`}
        </CustomText>
        <CustomText smaller black>
          {`Série: ${gradeResolver(item.grade)}`}
        </CustomText>
        <ButtonVerMais
          testID="VerMais"
          onPress={() => {
            setStatusClass(item);
            setStudent(studentStack[index]);
            navigation.navigate('ConfirmedClassDetails');
          }}>
          <CustomText smaller white>
            Ver Mais
          </CustomText>
        </ButtonVerMais>
      </ContainerVisualAula>
    );
  };

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
