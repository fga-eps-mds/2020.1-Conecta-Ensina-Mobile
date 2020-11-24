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
import { ClassroomContext } from '../../contexts/classroom';
import { StudentContext } from '../../contexts/student';

export default function PendingClass({navigation}) {
  const {getStudent} = useContext(StudentContext)
  const {getClass, classes} = useContext(ClassroomContext)

  useEffect(() => {
   getClass()
  }, [classes]); 


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
            onPress={async () =>
              {await getStudent(item.student)
               navigation.navigate('PendingClassConfirmation', {item})}
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
