import React, {useState, useContext} from 'react';
import Theme from '../../../Theme';
import Background1 from '../../components/Background1';
import {
  ContainerVisualAula,
  ListaVisualAula,
  ContainerButtons,
  ContainerTexto,
  ButtonVerMais,
} from './styles';
import CustomText from '../../components/CustomText';
import {ClassroomContext} from '../../contexts/classroom';
import {AuthContext} from '../../contexts/auth';
import {StudentContext} from '../../contexts/student';

export default function ShowClass({navigation}) {
  const {user} = useContext(AuthContext);
  const {statusClasses} = useContext(ClassroomContext);
  const {getStudent} = useContext(StudentContext);

  async function handleButton({item}) {
    if (user.role === 2) {
      await getStudent(item.student);
      navigation.navigate('TeacherClassDetails', {item});
    } else {
      await getStudent(item.teacher);
      navigation.navigate('ClassroomDetails', {item});
    }
  }

  return (
    <Theme>
      <Background1 navigation={navigation} page={'TeacherProfile2'}>
        <ListaVisualAula
          numColumns={2}
          data={statusClasses}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
              <ContainerVisualAula>
                <ContainerTexto>
                  <CustomText smaller black>
                    Horario:
                    {'\n' + item.dtclass}
                  </CustomText>
                  <CustomText smaller black>
                    Conteudo:
                    {'\n' + item.subject}
                  </CustomText>
                  <CustomText smaller black>
                    Distancia:
                    {'\n' + item.cep}
                  </CustomText>
                </ContainerTexto>
                <ContainerButtons>
                  <ButtonVerMais
                    testID="VerMais"
                    onPress={async () => {
                      await handleButton({item});
                    }}>
                    <CustomText smaller white>
                      Ver mais
                    </CustomText>
                  </ButtonVerMais>
                </ContainerButtons>
              </ContainerVisualAula>
            );
          }}
        />
      </Background1>
    </Theme>
  );
}
